---
layout: article_layout
title: "ICMP protocol decoded"
date: 2024-08-17 07:36:00 -0000
image: "/assets/images/articles/knowledge/icmp-cover.webp"
excerpt: "The Internet Control Message Protocol (ICMP) is a crucial communication protocol that serves as the backbone for diagnostic and error-reporting activities across the internet. In this comprehensive article, I will dive deep into the ICMP protocol's technical specifics and explore its practical use cases."
categories: post
tags: Network-Security Network-Administration
---

![Illustrated by our virtual artist, a simplified network diagram showing the ICMP protocol in action. Depict two computers communicating with each other using Echo Request and Echo Reply messages. Include a visual representation of the OSI model with the ICMP layer highlighted.](/assets/images/articles/knowledge/icmp-article.webp)


<div class="toc-container">
    <div class="toc-header">
        <i class="fas fa-bars"></i> Quick navigation
    </div>
    <ul class="toc-links">
        <li><i class="fas fa-angle-right"></i> <a href="#section1">What is ICMP ?</a></li>
        <li><i class="fas fa-angle-right"></i> <a href="#section2">Diagnostic tools</a></li>
        <li><i class="fas fa-angle-right"></i> <a href="#section3">PMTUD application</a></li>
        <li><i class="fas fa-angle-right"></i> <a href="#section4">Monitoring</a></li>
        <li><i class="fas fa-angle-right"></i> <a href="#section5">Internet of Things</a></li>   
        <li><i class="fas fa-angle-right"></i> <a href="#section6">Security implications</a></li>
        <li><i class="fas fa-angle-right"></i> <a href="#section7">Final thoughts</a></li>
    </ul>
</div>


<h2 id="section1">What is ICMP ?</h2>

The Internet Control Message Protocol (ICMP) is defined by RFC 792 and resides in the layer 3 aka network layer of the OSI model. Its primary purpose is to provide feedback about issues in data transmission, allowing for better management of network performance and troubleshooting. Unlike transmission protocols like TCP or UDP, it's important to understand that the ICMP protocol is **NOT responsible for data delivery**. Instead, it sends error messages and operational information. ICMP operates through various message types with unique functions. 

### Message = echo reply

Used by the `ping` command to check the reachability of a network device. When a `ping` command is issued, an ICMP **echo request** is sent to the target IP address. When the target device receives the Echo Request, it responds with an Echo Reply if it is reachable.

Suppose you issue the following `ping` command from a terminal:

```bash
ping 8.8.8.8
```

This command sends an Echo Request to Google's DNS server (IP: 8.8.8.8). The output will be similar as :

```bash
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=55 time=10.4 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=55 time=10.2 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=55 time=10.1 ms
```

In my example, the ICMP Echo Reply responses are returned informations from the target, confirming it is reachable. 

### Message = destination unreachable

An ICMP "destination unreachable" message is sent when a packet cannot reach its intended destination for some reason. This is a common ICMP message type and typically occurs when there's a routing issue, a host, network or service is/are unavailable.

In order to access at this informations, you must used a network analysis tool like Wireshark or tcpdump. I assume that a device A is trying to reach device B on a specific port that is closed. The device A sends a packet, and device B responds with:

```14:22:18.987654 IP 192.168.1.20 > 192.168.1.10: ICMP 192.168.1.20 udp port 80 unreachable, length 64
 0x0000:  4500 0054 5c3e 4000 4001 a6e3 c0a8 0114  E..T\.@.@......
	0x0010:  c0a8 010a 0303 f5b1 4f3b 0000 0000 4500  ........O;....E.
	0x0020:  003c 1c46 4000 4011 71b8 c0a8 010a c0a8  .<.F@.@.q.......
	0x0030:  0114 0035 0050 0028 bf3b 6865 6c6c 6f20  ...5.P.(.;slt 
	0x0040:  776f 726c 64                             alex 
    ```
   

In this case:
- **Source**: 192.168.1.20 is our device B, the responder.
- **Destination**: 192.168.1.10 is the device A, the sender.

The device A tries to send a UDP packet to a specific port on a remote host B, but that port is closed or unavailable. The remote host B responds with an ICMP "destination unreachable" message with the code 3, which means "port unreachable."

This message helps to diagnose network connectivity issues, such as unreachable services, incorrect routing, or firewall restrictions.

Let's now suppose that you're using a tool like `ping`, and you're trying to reach 192.168.1.20, but the host is down or unreachable. You might receive the following output from a tool like `ping`:

```bash
ping 192.168.1.20 (192.168.1.20): 56 data bytes
From 192.168.1.10 icmp_seq=1 Destination host unreachable
From 192.168.1.10 icmp_seq=2 Destination host unreachable
From 192.168.1.10 icmp_seq=3 Destination host unreachable
...
```

In this case, our sender, the device A (192.168.1.10) is informing you that the responder, the destination host B (192.168.1.20) is unreachable, using an ICMP "destination unreachable". 

As you can see, the `ping` tool can quickly help you to find an issue. However, it cannot help you to know the message returned. In my example it is a message type 3 with code 1 meaning that the port is unreachable (type 3) and the message is for the host (code 1). The host may be offline. In practice, the "destination host unreachable" response typically occurs in situations where there's an issue in the network, such as routing problems. 

### Message = time exceeded

An ICMP "time exceeded" message is sent when a packet's Time-to-Live (TTL) field reaches zero **before** reaching its destination. This is typically seen in network diagnostic tools like `traceroute`, where each router along the path decrements the TTL of the packet, and if it reaches zero, the router sends back an ICMP "time exceeded" message to the sender.

I assume that we are using the `traceroute` tool to trace the path to a destination server. When the TTL of a packet sent by `traceroute` expires at an intermediate router, that router sends back an ICMP type 11 message "time exceeded". Let's use this tool to trace the path to Google's DNS server (8.8.8.8):

```bash
traceroute 8.8.8.8
```

As the TTL is incrementally increased, intermediate routers will respond with ICMP "time exceeded" messages, indicating how far along the packet has traveled. 

```bash
traceroute to 8.8.8.8 (8.8.8.8), 30 hops max, 60 byte packets
 1  192.168.1.1  1.123 ms  1.052 ms  1.022 ms
 2  10.0.0.1     5.432 ms  5.229 ms  5.067 ms
 3  * * *
 4  72.14.216.1  20.153 ms  20.024 ms  20.002 ms
 5  ...
```

In this output:
- Router at `192.168.1.1` responds with an ICMP "Time Exceeded" message because the TTL expired after reaching it.
- The same happens at `10.0.0.1`.
- The `* * *` indicates that an ICMP "Time Exceeded" message was not received, possibly due to a firewall or other filtering mechanism.

This message helps diagnose where packets are being delayed or dropped along the path to a destination.

### Message = redirect message


An ICMP "redirect" message is used by routers to inform a host that there is a more efficient route for a particular destination. This can happen when a host sends a packet to a router but that router knows of a more direct route that the host should use in the future.

Let's suppose that our host (192.168.1.10) sends a packet to a server (10.0.0.20) through a router A (192.168.1.1), but router A knows that router B (192.168.1.2) is a better route to the destination. Router A will send an ICMP "redirect" message to the host, advising it to use router B for packets to 10.0.0.20 in the future.

We are using a network tool like Wireshark or tcpdump to capture packets and see the received ICMP "redirect" message. 

```20:15:30.123456 IP 192.168.1.1 > 192.168.1.10: ICMP redirect 192.168.1.10 to host 192.168.1.2, length 56
	0x0000:  4500 003c 1c46 4000 4001 8a3a c0a8 0101  E..<.F@.@..:....
	0x0010:  c0a8 010a 0501 f55c c758 0000 0102 0304  .......\.X......
	0x0020:  0800 45f2 0028 5f84 4000 4001 b775 c0a8  ..E..(_@.@..u..
	0x0030:  010a c0a8 0102 0800 f21d c0a8 0102       ..............
```

In this message:
- **Source**: 192.168.1.1 is router A, sending the redirect.
- **Destination**: 192.168.1.10 our host, the original sender.
- **Gateway**: 192.168.1.2 router B, the better gateway

This message category optimizes network traffic by ensuring that the host knows the most efficient route for reaching a particular destination.

### Message = source quench
> Please note that the following information are deprecated. So, they are no longer essential for daily operations. I provide this information for reference purposes only. Feel free to skip this section unless you require background context on outdated concepts. The deprecation of ICMP "source quench" was due to its inefficiency, the availability of better congestion control mechanisms, and its susceptibility to security risks.

The ICMP "source quench" message was originally designed as a **flow control mechanism** for IP networks. When a router or host was overwhelmed by incoming traffic and could not process packets fast enough, it would send an ICMP "Source Quench" message to the sender, requesting it to **slow down** the rate at which it was sending packets. This was meant to prevent packet loss and congestion in the network.

The following factors led to the official deprecation of quench messages in 1995.

- **Ineffectiveness** : these messages were not effective in controlling congestion. When routers became congested, they would send source quench messages. Instead of improving the congestion problem, this additional traffic make it worse.
- Poor scalability : one other critical issue is that these message  did not specify exactly **how much should the sender slow down and for which duration**. Without a standardized or dynamic adjustment mechanism, senders might not adjust their sending rate properly, leading to either overcompensation or undercompensation.
- **Increased network overhead** : the messages added extra traffic to an already congested network. If a router was experiencing congestion, it was expected to send out multiple source quench messages to each sender, further contributing to the problem and potentially increasing the network load.
- **Security issues**: by design, the mechanism has the potential to be used effectively in a denial-of-service attack.  Attackers could send spoofed source quench messages, tricking the sender into unnecessarily reducing its transmission rate.
- **TCP congestion control techniques**: were developed to handle congestion more effectively. These mechanisms include algorithms like TCP slow Start, TCP congestion avoidance, and TCP fast retransmit. These flow control techniques dynamically adjust the sender's transmission rate based on observed packet loss or round-trip times, without the need for out-of-band signaling like ICMP source quench.
- Better firmware: routers generally implement other forms of congestion management, such as packet dropping and traffic shaping. For example, routers might use **Random Early Detection (RED) or Weighted Fair Queuing (WFQ)** to manage traffic and reduce congestion.

<h2 id="section2">Diagnostic tools</h2>

One of the most common uses of ICMP is in network diagnostics. When network administrators need to check if a device is reachable or trace the path of packets across multiple routers, ICMP is the protocol that enables these tests. `Ping` sends ICMP "echo request" messages and waits for "echo reply"(ies). It also helps to measure round-trip time and potential packet loss. `Traceroute` relies on ICMP "time exceeded" messages to identify each hop along the route to the destination.

ICMP diagnostics remain fundamental tools, even in today’s complex cloud-native environments. However, **the reliability of ping and traceroute tools depends on network administrators’ ability** to correctly interpret ICMP responses. 

<h2 id="section3">Path for maximum transmission unit discovery</h2>

Another practical application of ICMP is Path MTU Discovery (PMTUD). It's a mechanism used to **determine the largest packet size that can traverse a network** path without fragmentation. ICMP plays a vital role here by sending back **ICMP "fragmentation needed"** messages when a packet is too large for a particular link, prompting the sender to reduce the packet size.

In virtual environments, ICMP feedback allowed administrators to fine-tune packet sizes, improving overall network performance. For instance, several administrators deploying virtual machines in Amazon Web Services encountered packet loss issues. The root cause was identified as improper Path MTU Discovery configuration, leading to packets being dropped due to size limitations. ICMP "fragmentation needed" messages enabled them to adjust the MTU settings.

PMTUD is also particularly important in scenarios involving encrypted tunnels like VPNs. As an illustration, imagine a company running a VPN across multiple sites noticed significant performance degradation. By analyzing ICMP "fragmentation needed" messages, the team was able to optimize the VPN’s MTU, thereby improving speed and reliability.

<h2 id="section4">Monitoring</h2>

ICMP’s dual role as a diagnostic tool and a potential attack vector makes it a double-edged sword in the cybersecurity landscape. Attackers often use ICMP for network reconnaissance, trying to discover live hosts through ping sweeps or exploiting ICMP vulnerabilities in DDoS (Distributed Denial of Service) attacks. While ICMP-based attacks such as DDoS and tunneling are relatively rare compared to other vectors, they highlight the importance of securing ICMP traffic using rate-limiting and proper firewall configurations. Below are two examples of  attacks that have been reported.

- Example 1: a massive ICMP flood attack targeted several major financial institutions in the U.S., sending millions of ICMP Echo Request packets to overwhelm the network infrastructure. Despite mitigation strategies in place, the attack caused disruptions to online banking services for hours.

- Example 2: hackers in Eastern Europe used ICMP tunneling techniques to covertly transfer data across a compromised network in June 2023. By encapsulating the payload within ICMP Echo Replies, they bypassed firewall rules designed to block other forms of malicious traffic.

<h2 id="section5">Internet of Things (IoT)</h2>

The Internet of Things (IoT) refers to a network of physical devices connected to the internet, capable of collecting, sharing, and acting on data. 

Examples of IoT devices include **smart thermostats** that learn your heating preferences, **smart speakers** that enable voice-controlled home automation, **wearable devices** such as watches that track health metrics, and **smart security cameras** providing real-time video monitoring. Other examples include **connected appliances** like smart refrigerators, **smart lighting systems** for remote control of home lighting, and **smart locks** offering keyless entry. 

It is necessary for these devices to communicate with each other. Since many IoT devices possess a limited computational power and lightweight operating systems, ICMP is frequently chosen as the protocol for error notification and network diagnostics.

However, the challenge lies in balancing ICMP’s utility with its potential to be exploited, especially in environments where security concerns are critical. In July 2023, users of a popular smart thermostat reported frequent disconnections from their home Wi-Fi networks. ICMP error messages helped network administrators identify that the issue was related to overloaded routers not properly handling ICMP packets from these low-powered devices.

IoT devices such as controllers are essential for monitoring and managing different processes, machinery, and **controllers in industrial settings**. In September 2023, a smart factory in Germany experienced intermittent downtime in its IoT-enabled machinery. ICMP was crucial in diagnosing issues with the routers handling these devices, where faulty ICMP "redirect messages" were incorrectly rerouting traffic, causing significant latency spikes.


<h2 id="section6">Security implications</h2>

While ICMP is vital for network management, it has also been leveraged in some significant cyber-attacks. The examples of ICMP misuse in recent cyber-attacks illustrate how vital it is to monitor even the most seemingly innocuous network protocols. **Key strategies** may include:

- **Rate limiting ICMP traffic** : restrict the number of ICMP messages that can be sent or received by a host in a given timeframe.
- **Firewall filtering** : check if firewalls properly block or allow ICMP traffic as per organizational policies. For instance, a government agency reported that a sophisticated group used ICMP "echo requests" for reconnaissance before launching a full-scale cyberattack on their servers.
- **ICMP tunneling prevention** : always monitor for signs of ICMP tunneling and employ deep packet inspection tools to detect and block this activity. For example, a ransomware group used ICMP packets to exfiltrate data before encrypting systems. The attackers evaded detection by using encrypted ICMP packets to communicate with their command-and-control server.

<h2 id="section7">Final thoughts</h2>

ICMP, though often overlooked, is a foundational protocol that underpins critical functions in network diagnostics, performance optimization, and security. It serves as the backbone of some of the most essential network tools and techniques, providing the means to troubleshoot connectivity issues, optimize data paths, and manage network traffic efficiently.

ICMP has a wide range of applications, ranging from tools like ping and traceroute to facilitating Path MTU Discovery and supporting IoT device management. Its versatility allows it to play a crucial role in both routine network operations and advanced security monitoring, acting as a vital communication layer between devices.

However, this same utility also makes ICMP a potential vector for cyberattacks. From DDoS attacks to covert data exfiltration using ICMP tunneling, I think it is obvious that ICMP must be handled with care. As organizations increasingly rely on interconnected systems and IoT devices, securing ICMP traffic and monitoring for abnormal behavior becomes even more critical.

### <i class="fa-solid fa-book-open-reader"></i> Further readings 
- [Postel, J. "Internet Control Message Protocol". 1981](https://www.rfc-editor.org/rfc/rfc792.txt)
- [Gont, F. "Deprecation of ICMP Source Quench Messages". 2012](https://tools.ietf.org/html/rfc6633)


