# Autonomous Driving

[TOC]



## Res
### Related Topics
↗ [Computer Vision (CV)](../../../../🧠%20Computing%20Methodologies/👽%20Artificial%20Intelligence/Computer%20Vision%20(CV)/Computer%20Vision%20(CV).md)


### Projects
 [openpilot](https://github.com/commaai/openpilot) 

openpilot is an open source driver assistance system. openpilot performs the functions of Automated Lane Centering and Adaptive Cruise Control for over 200 supported car makes and models.


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Self-driving_car

A **self-driving car**, also known as an **autonomous car**, **driverless car**, **robotic car** or **robo-car**, is a [car](https://en.wikipedia.org/wiki/Car "Car") that is capable of operating with reduced or no [human input](https://en.wikipedia.org/wiki/User_input "User input"). They are sometimes called **[robotaxis](https://en.wikipedia.org/wiki/Robotaxi "Robotaxi")**, though this term refers specifically to self-driving cars operated for a [ridesharing company](https://en.wikipedia.org/wiki/Ridesharing_company "Ridesharing company").

As of 2026, the term "self-driving" lacks an agreed standard definition and is also subject to commercial advertising and branding considerations. In 2020, [Waymo](https://en.wikipedia.org/wiki/Waymo "Waymo") was the first to offer rides in driverless taxis in the [operational design domain](https://en.wikipedia.org/wiki/Operational_design_domain "Operational design domain") (ODD) of limited geographic areas, but as of late 2025, no system has achieved full autonomy in all domains - sometimes referred to as "Level 5" on a scale of 0 to 5 levels of automation defined by the global standards organisation [SAE International](https://en.wikipedia.org/wiki/SAE_International "SAE International"), or simply "no driver" as given by the classification system proposed by [Mobileye](https://en.wikipedia.org/wiki/Mobileye "Mobileye") in the US.

Following a history of experimentation and development of [advanced driver assistance](https://en.wikipedia.org/wiki/Advanced_driver_assistance_systems "Advanced driver assistance systems") systems (ADAS) after WWII, two main technologies are now primarily used: [LiDAR](https://en.wikipedia.org/wiki/Lidar "Lidar") (Light Detection and Ranging), and visual sensors (cameras) which capture images and video like human eyes. These are combined with systems such as [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System "Global Positioning System"), [neural networks](https://en.wikipedia.org/wiki/Neural_network_\(machine_learning\) "Neural network (machine learning)"), [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), and established ADAS engineering to deliver levels of driving autonomy.

With more self-driving cars on public roads, an increasing number of safety incidents, collisions and even deaths have been recorded around the world. The primary obstacle to self-driving is the advanced software and mapping required to make them work safely across the wide variety of conditions that drivers experience. Other issues include security of [over-the-air updates](https://en.wikipedia.org/wiki/Over-the-air_update "Over-the-air update"), legal and [regulatory](https://en.wikipedia.org/wiki/Regulation_of_self-driving_cars "Regulation of self-driving cars") issues, [ethics](https://en.wikipedia.org/wiki/Ethics "Ethics") and consumer confidence. Methods of testing and monitoring the reliability of cars have evolved in parallel with the deployment of cars with self-driving capabilities, with various standards for this being proposed. Should autonomous cars gain mass adoption, wider implications for urban infrastrucure and the economy have also been discussed.

Public perception and acceptance of autonomous cars has been found to be mixed. A 2014 telephone poll in the US found 31.7% would not continue to drive once an automated car was available to them, while a survey in 2022 found only a quarter (27%) of the world's population would feel safe in one.

> 🤖 Gemini 2.5 flash
> https://gemini.google.com/share/5aab8319524a

**Major Players**
The landscape is divided between "Tech-First" companies and "Traditional OEMs" (Original Equipment Manufacturers).

| **Category**                | **Key Players**                                             | **Current Status**                                                                                                                               |
| --------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tech Leaders**            | **Waymo (Alphabet)**, **Zoox (Amazon)**, **Baidu (Apollo)** | The gold standard for L4. They operate true driverless fleets in complex urban areas.                                                            |
| **Consumer EV/Tech**        | **Tesla**, **XPENG**, **NIO**, **Xiaomi**                   | Focusing on "Generalized ADAS" (L2/L3). Tesla's FSD (Supervised) has massive data scale but still requires human oversight.                      |
| **Tier 1 & Infrastructure** | **NVIDIA**, **Mobileye**, **Qualcomm**                      | The "brains" behind the cars. NVIDIA's Thor and Mobileye’s Drive platforms provide the chips and foundational software for others to build upon. |

**Main Technological Solutions**
There is a massive industry-wide debate over which sensor suite and software architecture is superior:6
- **The "Vision-Only" Path (Tesla Approach):**
    - **Logic:** If humans can drive with just eyes (cameras), AI should too.
    - **Pros:** Lower hardware cost ($500–$1,000); easier to scale to millions of consumer cars.
    - **Cons:** Struggles in extreme weather (fog/heavy rain) and lacks "true" depth measurement redundancy.
- **The "Sensor Fusion" Path (Waymo/Zoox/Mobileye Approach):**
    - **Logic:** Use **LiDAR**, **Radar**, and **Cameras** together.
    - **Pros:** Incredible precision and safety; LiDAR provides a 3D "point cloud" that works in the dark and can see through light fog.
    - **Cons:** Extremely expensive (the sensor suite can cost $10k–$30k); requires complex "HD Mapping" of every street.
- The AI Revolution: End-to-End Learning:
	- The latest trend in 2026 is moving away from "rule-based" code (if X, then Y) toward Neural Networks.11 The car is trained on millions of hours of human driving video, learning to "feel" the road and predict human behavior rather than just following rigid geometry.



## Ref
[奔驰用了四年时间，发现L3自动驾驶没有未来？]: https://mp.weixin.qq.com/s/Kcl8nx9vl2M7LjgxEndLcA
[去美国试了最新的特斯拉FSD+Grok，我有点被震惊了。。。]: https://mp.weixin.qq.com/s/85GajqZsZ-F-rzFTdoc0xw
