# Types of Software Testing

[TOC]



## Res
### Related Topics
↗ [Software Analysis & Binary Engineering](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/Software%20Analysis%20&%20Binary%20Engineering.md)
↗ [Software Analysis Basics](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/Software%20Analysis%20Basics.md)



## Intro
> 🔗 https://en.wikipedia.org/wiki/Software_testing_tactics

This article discusses a set of tactics useful in [software testing](https://en.wikipedia.org/wiki/Software_testing "Software testing"). It is intended as a comprehensive list of tactical approaches to [software quality assurance](https://en.wikipedia.org/wiki/Software_quality_assurance "Software quality assurance") (more widely colloquially known as [quality assurance](https://en.wikipedia.org/wiki/Quality_assurance "Quality assurance") (traditionally called by the acronym "QA")) and general application of the [test method](https://en.wikipedia.org/wiki/Test_method "Test method") (usually just called "testing" or sometimes "developer testing").



## 👉 Functional Testing
### 🚚 Unit Testing



#### White Box Testing



#### Gorilla Testing



### 🔁 Integrating Testing
#### Gray box testing
#### API testing


### 🏢 System Testing
#### End to End Testing
#### Black Box Testing
#### Smoke Testing
#### Sanity Testing
#### Happy path Testing
####  Monkey Testing


### 🙇 Acceptance Testing
#### Alpha Testing
#### Beta Testing
#### Operational acceptance testing (OAT)
#### User acceptance testing (UAT)
#### Contractual and regulatory acceptance testing



## 👉 Non-Functional Testing
### 🤺 Security Testing
#### Fuzz Testing
↗ [Fuzzing (Concrete Execution)](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🐒%20Software%20Vulnerability%20&%20Weakness/🏴‍☠️%20Techniques%20-%20Vulnerability%20Disclosure%20&%20Discovery/Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)
#### Penetration Testing
↗ [Network Penetration (Pen-testing)](../../../../CyberSecurity/Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Network%20Penetration%20(Pen-testing).md)

### 👨🏻‍🎤 Performance Testing
#### Load Testing
#### Stress Testing
#### Scalability Testing
#### Volume Testing (flood testing)
#### Endurance Testing (Soak Testing)
#### Concurrent Testing


### 💪 Usability Testing
#### Exploratory Testing
#### Cross browser Testing
#### Accessibility Testing


### 🫱🏻‍🫲🏿 Compatibility Testing
This is a testing type in which it validates how software behaves and runs in a different environment, web servers, hardware, and network environment.

[Compatibility testing](https://www.softwaretestinghelp.com/software-compatibility-testing/) ensures that software can run on different configuration, different databases, different browsers, and their versions. The testing team performs compatibility testing.
#### Browser Compatibility Testing
This is a sub-type of Compatibility Testing (which is explained below) and is performed by the testing team.

[Browser Compatibility Testing](https://www.softwaretestinghelp.com/how-is-cross-browser-testing-performed/) is performed for web applications and ensures that the software can run with a combination of different browsers and operating systems. This type of testing also validates whether a web application runs on all versions of all browsers or not.
#### Backward Compatibility Testing
It is a type of testing that validates whether the newly developed software or updated software works well with the older version of the environment or not.

Backward Compatibility Testing checks whether the new version of the software works properly with the file format created by an older version of the software. It also works well with data tables, data files, and data structures created by the older version of that software. If any of the software is updated, then it should work well on top of the previous version of that software.



## 👉 Other Types of Testing
### Ad-hoc Testing
The name itself suggests that this testing is performed on an [ad-hoc](https://www.softwaretestinghelp.com/ad-hoc-testing/) basis, i.e., with no reference to the test case and also without any plan or documentation in place for this type of testing.

The objective of this testing is to find the defects and break the application by executing any flow of the application or any random functionality.

Ad-hoc testing is an informal way of finding defects and can be performed by anyone in the project. It is difficult to identify defects without a test case, but sometimes it is possible that defects found during ad-hoc testing might not have been identified using the existing test cases.


### Back-end Testing
Whenever an input or data is entered on the front-end application, it is stored in the database and the testing of such database is known as Database Testing or Backend Testing.

There are different databases like SQL Server, MySQL, Oracle, etc. Database Testing involves testing of table structure, schema, stored procedure, data structure, and so on. In Back-end Testing, GUI is not involved, the testers are directly connected to the database with proper access and testers can easily verify data by running a few queries on the database.

There can be issues identified like data loss, deadlock, data corruption, etc during this back-end testing and these issues are critical to fixing before the system goes live into the production environment.


### Boundary Value Testing
This type of testing checks the behavior of the application at the boundary level.

[Boundary Value Testing](https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/) is performed to check if defects exist at boundary values. Boundary Value Testing is used for testing a different range of numbers. There is an upper and lower boundary for each range and testing is performed on these boundary values.

If testing requires a test range of numbers from 1 to 500, then Boundary Value Testing is performed on values at 0, 1, 2, 499, 500, and 501.


### Branch Testing
This is also known as Branch coverage or decision coverage testing. It is a type of white box testing performed at the unit test level. It is done to make sure that each possible path from the decision point is executed at least once for 100% of test coverage.


### Comparison Testing
Comparison of a product’s strengths and weaknesses with its previous versions or other similar products is termed Comparison Testing.


### Equivalence Partitioning
It is a testing technique and a type of Black Box Testing. During this [Equivalence Partitioning](https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/), a set of groups are selected and a few values or numbers are picked up for testing. It is understood that all values from that group generate the same output.

The aim of this testing is to remove redundant test cases within a specific group that generate the same output but not any defect.

Suppose the application accepts values between -10 and +10, then using equivalence partitioning, the values picked for testing are zero, one positive value, and one negative value. So the Equivalence Partitioning for this testing is -10 to -1, 0, and 1 to 10.


### Example Testing
Example testing is real-time testing. It includes real-time scenarios and scenarios are based on the experience of the testers.

This type of testing is also known as experience-based testing because it uses the tester’s knowledge of how the application has worked in the past, how to break the application, what kind of errors are common in this type of application.


### Graphical User Interface (GUI) Testing
The objective of this GUI Testing is to validate the GUI as per the business requirement. The expected GUI of the application is mentioned in the Detailed Design Document and GUI mockup screens.

GUI Testing includes the size of the buttons and input fields present on the screen, alignment of all text, tables, and content in the tables.

It also validates the menu of the application. After selecting different menu and menu items, it validates that the page does not fluctuate, and the alignment remains the same after hovering the mouse on the menu or sub-menu.


### Incremental Integration Testing
[Incremental Integration Testing](https://www.softwaretestinghelp.com/incremental-testing/) is a Bottom-up approach for testing, i.e continuous testing of an application when new functionality is added.

Application functionality and modules should be independent enough to test separately. This is done by programmers or by testers.


### Install/Uninstall Testing
Installation testing is performed to check that the software application is installed properly and working as per expectation. Installation testing is a phase of testing before users interact with the actual application for the first time. Installation testing is also called “Implementation Testing”.

Uninstallation Testing is performed to confirm if all the components or elements of the software are removed from the system or not.

[Installation and Uninstallation Testing](https://www.softwaretestinghelp.com/software-installationuninstallation-testing/) is done on full, partial, or upgraded install/uninstall processes on different operating systems under different hardware or software environments.


### Mutation Testing
[Mutation Testing](https://www.softwaretestinghelp.com/what-is-mutation-testing/) is a type of white box testing in which the source code of one program is changed and verifies whether the existing test cases can identify these defects in the system.

The change in the program source code is very minimal, so it does not impact the entire application, only the specific area having the impact and the related test cases should be able to identify those errors in the system.


### Negative Testing
The mindset of the tester is to “Break the System/Application” and it is achieved through Negative Testing.

[Negative Testing technique](https://www.softwaretestinghelp.com/what-is-negative-testing/) is performed using incorrect data, invalid data, or input. It validates if the system throws an error of invalid input and behaves as expected.

It should not take much time to load any page or system and should be sustained during peak load. Different performance and load tools are used to do this testing.


### Recovery Testing
It is a type of testing that validates how well the application or system recovers from crashes or disasters.

Recovery Testing determines if the system can continue its operation after a disaster. Assume that the application is receiving data through a network cable and suddenly that network cable has been unplugged.

Sometime later, plug in the network cable; then the system should start receiving data from where it lost the connection due to the network cable being unplugged.


### Regression Testing
Regression testing is testing of unchanged features of the application to make sure that any bug fixes, adding new features, deleting, or updating existing features, are not impacting the working application.

To find out regression scope is an important part in  [Regression Testing](https://www.softwaretestinghelp.com/regression-testing-tools-and-methods/). To find out regression scope, Tester needs to find out the area of application where changes happened and the Impact of those changes on the entire application. It is difficult to cover the whole regression test suite in every release, so [Automation Testing Tools](https://www.softwaretestinghelp.com/automation-testing-tutorial-1/) are used in regression testing.


### Risk-Based Testing (RBT)
For [Risk-Based Testing](https://www.softwaretestinghelp.com/risk-management-during-test-planning-risk-based-testing/), the functionalities or requirements are tested based on their priority. Risk-Based Testing includes testing of highly critical functionality, which has the highest impact on business and in which the probability of failure is very high.

Priority decisions are based on business needs, so once priority is set for all functionalities, then high priority functionality or test cases are executed first, followed by medium and then low priority functionalities.

Low priority functionality may be tested or not tested based on the available time. Risk-Based Testing is carried out if there is insufficient time available to test the entire software and the software needs to be implemented on time without any delay.

This approach is followed only by the discussion and approval of the client and senior management of the organization.


### Static Testing
Static Testing is a type of testing which is done without the execution of any code. Reviews, walkthroughs, and inspections are different methods of performing static testing. Activities like reviewing of requirement documents, customer requirement specification, high level, and low-level design, code syntax, naming standards, etc. come under static testing.

Static Testing also applies to test cases, test plans, test scenarios. Static testing is done to prevent the defect rather than catching the defect at a later stage. That is why static testing is cost-effective.

**For example,** Tester is testing a pet insurance website. The logic for premium calculation is described in requirement documentation. As a part of static testing, testers can review the developer code for premium calculation and compare it with the requirement document to prevent the defect related to premium calculation.


### Vulnerability Testing
The testing, which involves identifying weaknesses in the software, hardware, and network, is known as Vulnerability Testing. In malicious programs, the hacker can take control of the system, if it is vulnerable to such kinds of attacks, viruses, and worms.

We need to check if those systems undergo Vulnerability Testing before production. It may identify critical defects and flaws in security.



## Ref
[Types Of Software Testing: Different Testing Types With Details]: https://www.softwaretestinghelp.com/types-of-software-testing/