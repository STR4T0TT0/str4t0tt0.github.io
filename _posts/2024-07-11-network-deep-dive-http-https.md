---
layout: article_layout
title: "Why HTTP is a thing of the past ?"
date: 2024-07-11 08:00:00 -0000
image: "/assets/http-vs-https.jpg"
excerpt: "What are the difference between HTTP and HTTPS ? The S is not silence."
categories: post
tags: Network-Security Network-Administration
---
![Illustrated by our virtual artist, protocole deep dive HTTP vs HTTPs.](/assets/http-vs-https.jpg)

### Overview of HTTP and HTTPS


#### HTTP (Hypertext Transfer Protocol)
- **Definition**: HTTP is a protocol used for transmitting hypertext over the web. It is the foundation of data communication for the World Wide Web.
- **Purpose**: To retrieve and present web pages.
- **Key Features**: Stateless, plain text transmission, uses port 80 by default.
- **Typical Use Cases**: Serving web pages, retrieving images, videos, and other web resources.<!--more-->


![HTTPS and HTTP a side-by-side comparison of the definitions, purposes, and key features.](/assets/side-by-side-https.png)

#### HTTPS (Hypertext Transfer Protocol Secure)
- **Definition**: HTTPS is the secure version of HTTP, which uses SSL/TLS to encrypt data transfer.
- **Purpose**: To secure the data transmitted over the web.
- **Key Features**: Encrypted communication, uses port 443 by default, relies on SSL/TLS certificates.
- **Typical Use Cases**: Online banking, secure login pages, e-commerce websites, any site requiring secure data transfer.

### Layer comparison

#### Application Layer
- **HTTP**:
  - **Functionality**: Fetches resources like HTML documents.
  - **Involved Protocols**: HTTP/1.1, HTTP/2.
  - **Data Format**: Plain text.
  - **Processing**: Simple request-response protocol.

- **HTTPS**:
  - **Functionality**: Same as HTTP but with added security.
  - **Involved Protocols**: HTTPS, SSL/TLS.
  - **Data Format**: Encrypted data.
  - **Processing**: Encrypts and decrypts data using SSL/TLS.
  
![HTTPS and HTTP a diagram showing the differences at each layer of the TCP/IP model.](/assets/layers-comparison-http-https.png)


#### Transport Layer
- **HTTP**:
  - **Mechanisms**: Connection-oriented, uses TCP.
  - **Error Checking**: TCP handles error checking and retransmission.
  - **Flow Control**: Managed by TCP.
  - **Protocols**: TCP.

- **HTTPS**:
  - **Mechanisms**: Same as HTTP, but with an additional SSL/TLS handshake.
  - **Error Checking**: Handled by TCP and SSL/TLS.
  - **Flow Control**: Managed by TCP and SSL/TLS.
  - **Protocols**: TCP, SSL/TLS.

#### Internet Layer
- **HTTP & HTTPS**:
  - **Routing**: Both rely on IP for routing.
  - **Addressing Mechanisms**: Use IP addresses.
  - **Involved Protocols**: IPv4, IPv6.
  - **Packet Structure**: IP packets for both, with HTTPS packets containing encrypted payloads.

#### Network Access Layer
- **HTTP & HTTPS**:
  - **Data Link and Physical Layer Functions**: Both use Ethernet, Wi-Fi, etc.
  - **Involved Protocols**: Ethernet, Wi-Fi.
  - **Frame Structure**: Ethernet frames.

### Performance Metrics

- **Throughput**: 
  - **HTTP**: Generally higher since there’s no encryption overhead.
  - **HTTPS**: Slightly lower due to encryption/decryption overhead.
- **Latency**:
  - **HTTP**: Lower latency as no SSL/TLS handshake is needed.
  - **HTTPS**: Higher latency due to SSL/TLS handshake.
  
![Bar chart comparing throughput and latency for HTTP and HTTPS per protocol generations.](/assets/performance-metrics-https.png)


Both protocols are equally reliable at the transport layer (TCP). And both of them, can scale similarly, but HTTPS requires additional server resources for encryption.

### Security Features

- **HTTP**:
  - **Authentication**: Basic authentication mechanisms (username/password), not secure.
  - **Encryption**: None.
  - **Vulnerabilities**: Prone to eavesdropping, man-in-the-middle attacks.
  - **Mitigation Strategies**: None inherent.

- **HTTPS**:
  - **Authentication**: Uses SSL/TLS certificates.
  - **Encryption**: Encrypted data transfer using SSL/TLS.
  - **Vulnerabilities**: SSL/TLS vulnerabilities (e.g., Heartbleed).
  - **Mitigation Strategies**: Regular updates, strong encryption algorithms, certificate management.

### Implementation and Configuration


- **HTTP**:
  - **Ease of Setup**: Simple to set up.
  - **Compatibility**: Highly compatible with all web technologies.
  - **Tools/Software Support**: Supported by all web servers and clients. However, modern web browsers like Chrome, Firefox, and Safari display warnings when users visit HTTP sites, indicating that the connection is not secure.

- **HTTPS**:
  - **Ease of Setup**: Requires SSL/TLS certificate setup.
  - **Compatibility**: Requires compatible browsers and servers.
  - **Tools/Software Support**: Requires tools for certificate management (e.g., Let's Encrypt).

![Bar chart comparing throughput and latency for HTTP and HTTPS per protocol generations.](/assets/flowchart-ssl-handshake-simplified.png)

### Why HTTP usage is declining in favor of HTTPS ?

The decline in HTTP usage is driven by three main reasons : the need for enhanced security, privacy, regulatory compliance. To a lesser degree, we can also mention some performance improvements. Because modern versions of the HTTP protocol, are only supported over HTTPS.

#### 1. **Security Concerns**
- **Data Encryption**: HTTP does not encrypt data, meaning that any information transmitted between the client and server can be easily intercepted by third parties. This exposes users to risks such as data theft and eavesdropping.
- **Man-in-the-Middle Attacks**: HTTP is susceptible to man-in-the-middle attacks where an attacker can intercept and alter the communication between the client and server without either party knowing.

#### 2. **Privacy**
- **Sensitive Information**: With increasing awareness and regulation around data privacy, ensuring the confidentiality of user data is paramount. HTTPS encrypts data, protecting it from unauthorized access.
- **User Trust**: Users are becoming more privacy-conscious and are more likely to trust and engage with websites that use HTTPS.

#### 3. **Regulatory Requirements**
- **GDPR and Other Regulations**: Regulations such as the General Data Protection Regulation (GDPR) require that personal data be protected, and using HTTPS is a key component of compliance.
- **Industry Standards**: Many industry standards now mandate the use of HTTPS for data protection. Browsers are beginning to automatically upgrade HTTP requests to HTTPS if the server supports it, further reducing the prevalence of HTTP.
