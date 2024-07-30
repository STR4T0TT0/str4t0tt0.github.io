---
layout: projects_layout
title: Conduct a security audit
permalink: /projects/security-audit/
---

# Botium Toys

> TO DO : Must include business documents
 
## Scope of the audit
The scope is defined as the entire security program at Botium Toys. This means all assets need to be assessed alongside internal processes and procedures related to the implementation of controls and compliance best practices.

## Goals of the audit
Assess existing assets and complete the controls and compliance checklist to determine which controls and compliance best practices need to be implemented to  improve Botium Toys’ security posture.

## Current assets
Assets managed by the IT Department include: 
- On-premises equipment for in-office business needs  
- Employee equipment: end-user devices (desktops/laptops, smartphones), remote workstations, headsets, cables, keyboards, mice, docking stations, surveillance cameras, etc.
- Storefront products available for retail sale on site and online; stored in the company’s adjoining warehouse
- Management of systems, software, and services: accounting, telecommunication, database, security, ecommerce, and inventory management
- Internet access
- Internal network
- Data retention and storage
- Legacy system maintenance: end-of-life systems that require human monitoring 

## Risk assessment

### Risk description

Currently, there is inadequate management of assets. Additionally, Botium Toys does not have all of the proper controls in place and may not be fully compliant with U.S. and international regulations and standards. 
Control best practices
The first of the five functions of the NIST CSF is Identify. Botium Toys will need to dedicate resources to identify assets so they can appropriately manage them. Additionally, they will need to classify existing assets and determine the impact of the loss of existing assets, including systems, on business continuity.

### Risk score

On a scale of 1 to 10, the risk score is 8, which is fairly high. This is due to a lack of controls and adherence to compliance best practices.
Additional comments
The potential impact from the loss of an asset is rated as medium, because the IT department does not know which assets would be at risk. The risk to assets or fines from governing bodies is high because Botium Toys does not have all of the necessary controls in place and is not fully adhering to best practices related to compliance regulations that keep critical data private/secure. Review the following bullet points for specific details:

- Currently, all Botium Toys employees have access to internally stored data and may be able to access cardholder data and customers’ PII/SPII.
- Encryption is not currently used to ensure confidentiality of customers’ credit card information that is accepted, processed, transmitted, and stored locally in the company’s internal database. 
- Access controls pertaining to least privilege and separation of duties have not been implemented.
- The IT department has ensured availability and integrated controls to ensure data integrity.
- The IT department has a firewall that blocks traffic based on an appropriately defined set of security rules.
- Antivirus software is installed and monitored regularly by the IT department. 
- The IT department has not installed an intrusion detection system (IDS).
- There are no disaster recovery plans currently in place, and the company does not have backups of critical data. 
- The IT department has established a plan to notify E.U. customers within 72 hours if there is a security breach. Additionally, privacy policies, procedures, and processes have been developed and are enforced among IT department members/other employees, to properly document and maintain data.
- Although a password policy exists, its requirements are nominal and not in line with current minimum password complexity requirements (e.g., at least eight characters, a combination of letters and at least one number; special characters). 
- There is no centralized password management system that enforces the password policy’s minimum requirements, which sometimes affects productivity when employees/vendors submit a ticket to the IT department to recover or reset a password.
- While legacy systems are monitored and maintained, there is no regular schedule in place for these tasks and intervention methods are unclear.
- The store’s physical location, which includes Botium Toys’ main offices, store front, and warehouse of products, has sufficient locks, up-to-date closed-circuit television (CCTV) surveillance, as well as functioning fire detection and prevention systems.



### Assets Managed by the IT Department
The assets managed by Botium Toys' IT department include:
1. **On-premises equipment**: for in-office business needs.
2. **Employee equipment**: such as end-user devices (desktops/laptops), smartphones, remote workstations, headsets, cables, keyboards, mice, docking stations, and surveillance cameras.
3. **Storefront products**: available for retail sale both on-site and online, stored in the company's adjoining warehouse.
4. **Management of systems, software, and services**: including accounting, telecommunication, database security, e-commerce, and inventory management systems.
5. **Internet access**.
6. **Internal network**.
7. **Data retention and storage**.
8. **Legacy system maintenance**: involving end-of-life systems requiring human monitoring.

### Risk Assessment: Additional Comments
Key points from the risk assessment's "Additional Comments" section include:
1. **Access Controls**: All employees currently have access to internally stored data, including potentially sensitive data such as cardholder information and PII/SPII.
2. **Encryption**: Not in use for ensuring confidentiality of customers' credit card data stored and processed locally.
3. **Access Control Policies**: Lacking implementation of least privilege and separation of duties.
4. **Data Integrity and Availability**: Ensured by the IT department.
5. **Firewall**: Installed and operational with appropriate rules.
6. **Antivirus Software**: Installed and regularly monitored.
7. **Intrusion Detection System (IDS)**: Not installed.
8. **Disaster Recovery Plans and Backups**: Nonexistent, leading to potential data loss risks.
9. **Notification Plan**: A plan exists to notify EU customers within 72 hours of a data breach. Privacy policies and procedures are in place for data management.
10. **Password Policies**: Existing policies are nominal and not aligned with current complexity standards; there is no centralized password management system.
11. **Legacy System Monitoring**: Monitoring and maintenance are in place but not on a regular schedule.
12. **Physical Security**: Sufficient locks, CCTV surveillance, and fire detection/prevention systems are in place.

> TO DO : Import matrix and analysis

### Checklists
Based on the provided reports, we will answer whether each control and compliance best practice is in place:

#### **Controls Assessment**
- **Least Privilege**: No
- **Disaster recovery plans**: No
- **Password policies**: Yes (but nominal)
- **Separation of duties**: No
- **Firewall**: Yes
- **Intrusion detection system (IDS)**: No
- **Backups**: No
- **Antivirus software**: Yes
- **Manual monitoring, maintenance, and intervention for legacy systems**: Yes (but not regularly scheduled)
- **Encryption**: No
- **Password management system**: No
- **Locks (offices, storefront, warehouse)**: Yes
- **Closed-circuit television (CCTV) surveillance**: Yes
- **Fire detection/prevention (fire alarm, sprinkler system, etc.)**: Yes

#### **Compliance**
**PCI DSS**:
- **Authorized user access to credit card info**: No
- **Secure environment for credit card info**: No
- **Data encryption**: No
- **Secure password management policies**: No

**GDPR**:
- **Data privacy for EU customers**: Yes
- **Breach notification plan**: Yes
- **Data classification and inventory**: No
- **Enforcement of privacy policies**: Yes

**SOC 1 & SOC 2**:
- **User access policies**: No
- **Confidentiality of sensitive data**: No
- **Data integrity**: Yes
- **Data availability**: Yes

The above assessment provides a detailed overview of the current state of controls and compliance practices at Botium Toys, based on the documents provided.