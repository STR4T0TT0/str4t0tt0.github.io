---
layout: article_layout
title: "Industries at risk! Mitigating critical flaws in Rockwell PanelView™ "
date: 2024-07-10 08:00:00 -0000
image: "/assets/PanelView-Plus6-family.1920.webp"
excerpt: "Recently, Microsoft revealed two significant security flaws in the Rockwell Automation PanelView Plus systems. Why these flaws can be critical ?"
categories: post
tags: Manufacturing-Security IT-Infrastructure Threat-Intelligence
---
![Illustrated by our virtual artist, vulnerabilities exploited by remote attackers executing arbitrary code.](/assets/alexis-rockwell-panel-breaches.webp)

Recently, Microsoft revealed two significant security flaws in the Rockwell Automation PanelView Plus systems. These vulnerabilities could be exploited by remote, unauthenticated attackers to execute arbitrary code and trigger a denial-of-service (DoS) condition. 

## What are we writing about?

Rockwell Automation PanelView Plus is a series of human-machine interfaces (HMIs) produced by Rockwell Automation. These devices are used in industrial settings to provide operators with a graphical interface to monitor and control machinery and processes. The PanelView Plus interesting key features for us are :

**Touchscreen Interface**: These HMIs come with touchscreen displays, allowing operators to interact with various controls and view real-time data from the connected machinery.

**Visualization and Control**: PanelView Plus HMIs are designed to display process information graphically. Operators can view status updates, alarms, and trends, and can control different aspects of the machinery directly from the interface.

**FactoryTalk View Software**: They are often integrated with Rockwell Automation’s FactoryTalk View software, which is used to develop, deploy, and manage HMI applications.

**Connectivity**: These devices can connect to various industrial networks and controllers, facilitating communication and data exchange between different parts of the industrial automation system.

## Why these flaws can be critical ?

This technology is utilized across various industries to enhance control, monitoring, and efficiency in different operational processes. Here a couple of examples of use cases in different industries :

**Assembly Line Monitoring**: In a car factory, a PanelView Plus HMI is used to monitor the assembly line. It displays real-time data on the production speed, machinery status, and any errors or malfunctions. Operators can adjust machine settings directly from the HMI to ensure smooth operation and maintain production efficiency.

**Bottling Process Control**: In a beverage bottling plant, a PanelView Plus is used to control and monitor the bottling process. It shows the fill levels, capping status, and conveyor speeds. Operators can use the touchscreen to start or stop the process, adjust the speed, and troubleshoot issues, ensuring the products are bottled correctly and efficiently.

**Water Quality Monitoring**: At a water treatment plant, a PanelView Plus HMI helps operators monitor the quality of water being treated. It provides data on chemical levels, water flow rates, and filtration status. Operators can adjust chemical dosages and manage filtration systems directly from the HMI to ensure safe and clean water supply.

**Batch Production Management**: In a pharmaceutical factory, a PanelView Plus HMI is used to manage the production of medicine batches. It displays critical information such as ingredient mixing times, temperatures, and batch tracking. Operators can control the entire batch production process, ensuring consistency and compliance with regulatory standards.

**Automated Packaging Lines**: In many logistic hubs, a PanelView Plus is used to control automated packaging lines. It shows the status of packaging machines, the number of items packaged, and detects any jams or errors. Operators can quickly respond to issues, change packaging settings, and optimize the workflow for higher productivity.



![Illustrated by our virtual artist, vulnerabilities exploited by remote attackers executing arbitrary code.](/assets/PanelView-Plus6-family.1920.webp)
> PanelView™ Plus © 2024 Rockwell Automation


## Let's breaking down the concepts !

The two identified vulnerabilities are related to improper input validation, a common flaw that can be exploited by attackers to compromise a system. 

1. **CVE-2023-2071** (CVSS score: 9.8) remote code execution vulnerability
2. **CVE-2023-29464** (CVSS score: 8.2) denial-of-service vulnerability

> In a nutshell, the Common Vulnerability Scoring System, aka CVSS score,  is a standard used to assess the severity of security vulnerabilities. It provides a numerical score from 0 to 10 that reflects the potential impact and risk of a vulnerability.

### Vulnerabilty 1 : remote code execution vulnerability

This vulnerability affects FactoryTalk View Machine Edition (versions 13.0, 12.0, and prior). It arises from improper input validation in custom classes used by the PanelView Plus interface. An attacker can send specially crafted packets to upload and load a malicious DLL into the device, gaining the ability to execute arbitrary code.

#### What is a improper input validation ?

Input validation is the process of verifying that the data provided to a program is correct and safe to use. Proper input validation ensures that only expected and safe data is processed. Thereby, improper input validation occurs when a program does not properly check or sanitize the input data. This can allow attackers to inject malicious data and manipulate the program’s behavior. Both vulnerabilities in the PanelView Plus are due to improper input validation.

- **Impact**: Successful exploitation allows the attacker to take control of the device, potentially manipulating its functions, stealing data, or disrupting operations.

- **Mitigation**: Applying patches provided by Rockwell Automation and ensuring that all input data is validated before processing can help mitigate this risk.

#### How it works ?

The Remote Code Execution (RCE) is a type of vulnerability that allows an attacker to execute arbitrary code on a remote system. This means that **the attacker can run any command or program on the target device without physical access**. In the case of PanelView Plus, the RCE vulnerability involves two custom classes that can be manipulated to upload and execute a malicious DLL (Dynamic Link Library).

> - **Custom Classes**: These are user-defined templates in programming that define specific behaviors or attributes. When these classes are not securely designed, they can be exploited.
> 
> - **DLL (Dynamic Link Library)**: A file format used for holding multiple codes and procedures for Windows programs. When an attacker can upload a malicious DLL, he can control what the device does.



### Vulnerabilty 2 : denial-of-service vulnerability

This vulnerability impacts FactoryTalk Linx (versions 6.30, 6.20, and prior). Similar to the CVE-2023-2071 above, it stems from improper input validation. By sending a packet larger than the buffer size, an attacker can cause the device to become unresponsive, leading to a strict DoS condition.

- **Impact**: Exploitation can render the device inoperative, affecting operations and potentially causing significant downtime.

- **Mitigation**: Regular updates and patches, along with proper buffer management practices, can help prevent such vulnerabilities.

#### How works a denial-of-Service or DoS attack ?

Generally, a **Denial-of-Service (DoS)** attack aims to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services. In the context of PanelView Plus, the DoS vulnerability involves sending a crafted buffer that the device cannot handle properly, causing it to crash or become unresponsive.


> - A **crafted buffer** is a specific set of data prepared by the attacker to exploit a vulnerability. 
>
> - A  **buffer handling** is the process of managing data storage in a program. If not handled correctly, it can lead to crashes or other unwanted behaviors.


## Patches should be applied asap !

I find these vulnerabilities are particularly alarming due to their potential for exploitation by unknown threat actors aiming to cause significant harm, including sabotage. The impact on industries relying on Rockwell Automation PanelView Plus systems could be profound, disrupting operations, compromising safety, and resulting in substantial financial losses. It is imperative for organizations to proactively address these security flaws through robust mitigation strategies, regular updates, and vigilant monitoring. By staying informed and taking decisive action, we can safeguard our critical infrastructure and ensure the resilience and security of our industries.