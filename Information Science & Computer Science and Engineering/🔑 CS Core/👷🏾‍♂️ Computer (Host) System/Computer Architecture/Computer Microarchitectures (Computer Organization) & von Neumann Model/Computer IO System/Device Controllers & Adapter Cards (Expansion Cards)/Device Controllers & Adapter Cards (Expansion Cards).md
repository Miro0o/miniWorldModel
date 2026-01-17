# Device Controllers & Adapter Cards (Expansion Cards)

[TOC]



## Res
### Related Topics
↗ [Expansion Bus (Ports & Computer Bus Interfaces)](../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces).md)
↗ [Expansion Slot & Internal Bus](../../Computer%20Bus%20(Datapath)%20&%20Interfaces%20&%20Protocols/🛣️%20Expansion%20Bus%20(Ports%20&%20Computer%20Bus%20Interfaces)/Expansion%20Slot%20&%20Internal%20Bus/Expansion%20Slot%20&%20Internal%20Bus.md)

↗ [Audio Cards](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Input%20&%20Output%20Devices/Audio%20Cards/Audio%20Cards.md)
↗ [Sound Cards](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Input%20&%20Output%20Devices/Sound%20Cards/Sound%20Cards.md)
↗ [NIC (Network Adapter)](../../../../../🏎️%20Computer%20Networking%20and%20Communication/📌%20Computer%20Networking%20Basics%20(Protocol%20Part)/0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link%20Layer%20Network%20Devices/NIC%20(Network%20Adapter).md)
- ↗ [Network Chips & Devices](../../../../../EE%20Related%20Theories%20&%20Hardware%20Implementation/Auxiliary%20Hardware%20&%20Peripherals%20Implementations/Input%20&%20Output%20Devices/Network%20Chips%20&%20Devices/Network%20Chips%20&%20Devices.md)

↗ [Computer Interfaces & Hardware Drivers](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/Computer%20Interfaces%20&%20Hardware%20Drivers.md)
↗ [Computer (IO Devices) Drivers & Programming](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)



## Intro
### (Device) Controller
> Controller is the hardware part of controlling a device. The software counterparts come as a ↗ [Device Driver](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/🛞%20Computer%20(IO%20Devices)%20Drivers%20&%20Programming/Computer%20(IO%20Devices)%20Drivers%20&%20Programming.md)

> 🔗 https://simple.wikipedia.org/wiki/Device_controller

A device controller is a system that handles the incoming and outgoing signals of the CPU by acting as a bridge between CPU and the I/O devices. **A device is connected to the computer via a plug and socket, and the socket is connect to a device controller**. Device controllers use binary and digital codes. An IO device contains mechanical and electrical parts. A device controller is the electrical part of the IO device.

![](../../../../../../../Assets/Pics/Pasted%20image%2020240327200246.png)
<small>图1-7计算机中的总线连接示意图<br><a>https://www.cnblogs.com/deliweier-wangshuping/p/16167870.html</a></small>

---
🔗 https://en.wikipedia.org/wiki/Controller_(computing)

In [computer hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware"), a **controller** may refer to:
- [Memory controller](https://en.wikipedia.org/wiki/Memory_controller "Memory controller"), a unit that manages access to memory
- [Charge controller](https://en.wikipedia.org/wiki/Charge_controller "Charge controller")
- [Game controller](https://en.wikipedia.org/wiki/Game_controller "Game controller"), a device by which the user controls the operation of the computer
- [Host controller](https://en.wikipedia.org/wiki/Host_controller "Host controller")
- [Sound controller](https://en.wikipedia.org/wiki/Sound_controller "Sound controller")
- [Network controller](https://en.wikipedia.org/wiki/Network_controller "Network controller")
- [Graphics controller](https://en.wikipedia.org/wiki/Graphics_controller "Graphics controller") or [video display controller](https://en.wikipedia.org/wiki/Video_display_controller "Video display controller")
- SCSI [host bus adapter](https://en.wikipedia.org/wiki/Host_bus_adapter "Host bus adapter")
- [Parallel port](https://en.wikipedia.org/wiki/Parallel_port "Parallel port") controller
- [Microcontroller](https://en.wikipedia.org/wiki/Microcontroller "Microcontroller") unit (MCU)
- [Keyboard controller](https://en.wikipedia.org/wiki/Keyboard_controller_\(computing\) "Keyboard controller (computing)")
- [Programmable Interrupt Controller](https://en.wikipedia.org/wiki/Programmable_Interrupt_Controller "Programmable Interrupt Controller")
- [Northbridge (computing)](https://en.wikipedia.org/wiki/Northbridge_\(computing\) "Northbridge (computing)")
- [Southbridge (computing)](https://en.wikipedia.org/wiki/Southbridge_\(computing\) "Southbridge (computing)")
- [Universal asynchronous receiver/transmitter](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver/transmitter "Universal asynchronous receiver/transmitter") (UART) communications controller chip
- [Peripheral DMA controller](https://en.wikipedia.org/wiki/Peripheral_DMA_controller "Peripheral DMA controller")
- [Disk controller](https://en.wikipedia.org/wiki/Disk_controller "Disk controller")
- [Floppy disk controller](https://en.wikipedia.org/wiki/Floppy_disk_controller "Floppy disk controller")
- [Disk array controller](https://en.wikipedia.org/wiki/Disk_array_controller "Disk array controller"), also known as a RAID controller, a type of storage controller
- [Flash controller](https://en.wikipedia.org/wiki/Flash_controller "Flash controller"), or SSD controller, which manages flash memory
- [Terminal Access Controller](https://en.wikipedia.org/wiki/Terminal_Access_Controller "Terminal Access Controller")
- [IBM 2821 Control Unit](https://en.wikipedia.org/wiki/IBM_2821_Control_Unit "IBM 2821 Control Unit"), used to attach card readers, punches and line printers to IBM System/360 and IBM System/370 computers
- [IBM 270x](https://en.wikipedia.org/wiki/IBM_270x "IBM 270x") and [IBM 37xx](https://en.wikipedia.org/wiki/IBM_37xx "IBM 37xx"), used for telecommunications
- [IBM 3271, 3272, 3271, and 3174](https://en.wikipedia.org/wiki/IBM_3271#Controllers "IBM 3271"), used to attach terminals (display devices)
- [MIDI controller](https://en.wikipedia.org/wiki/MIDI_controller "MIDI controller")
- [Programmable logic controller](https://en.wikipedia.org/wiki/Programmable_logic_controller "Programmable logic controller")


### Expansion Card /Adapter Card
> An expansion card contains a device controller, because the card (a PCB) is considered a device itself. However, a device controller can exists in other kinds of devices /interfaces as well, like a USB controller.
> 
> An expansion card comes with its own interface and bus.

> 🔗 https://en.wikipedia.org/wiki/Expansion_card

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), an **expansion card** (also called an **expansion board**, **adapter card**, **peripheral card** or **accessory card**) is a [printed circuit board](https://en.wikipedia.org/wiki/Printed_circuit_board "Printed circuit board") that can be inserted into an [electrical connector](https://en.wikipedia.org/wiki/Electrical_connector "Electrical connector"), or **expansion slot** (also referred to as a bus slot) on a computer's [motherboard](https://en.wikipedia.org/wiki/Motherboard "Motherboard") (see also [backplane](https://en.wikipedia.org/wiki/Backplane "Backplane")) to add functionality to a computer system. Sometimes the design of the computer's case and motherboard involves placing most (or all) of these slots onto a separate, removable card. Typically such cards are referred to as a [riser card](https://en.wikipedia.org/wiki/Riser_card "Riser card") in part because they project upward from the board and allow expansion cards to be placed above and parallel to the motherboard.

Expansion cards allow the capabilities and interfaces of a computer system to be extended or supplemented in a way appropriate to the tasks it will perform. For example, a high-speed multi-channel data acquisition system would be of no use in a personal computer used for bookkeeping, but might be a key part of a system used for industrial process control. Expansion cards can often be installed or removed in the field, allowing a degree of user customization for particular purposes. Some expansion cards take the form of "daughterboards" that plug into connectors on a supporting system board.

![](../../../../../../../Assets/🗃%20Archive/Curriculums/Assets/Screen%20Shot%202021-10-13%20at%2015.52.16.png)

+  Extension Card
	+  the circuit board is called extension card
		+ ![](../../../../../../../Assets/🗃%20Archive/Curriculums/Assets/Screen%20Shot%202021-10-13%20at%2015.53.49.png)
	+ internal 
		+ Soud card / PCI
		+ Modem card / PCMCIA
		+ Network card / BNC+RJ45/ PCI
		+ Digiral TV card / PCI
		![](../../../../../../../Assets/🗃%20Archive/Curriculums/Assets/Screen%20Shot%202021-10-13%20at%2016.00.08.png)
		+ Digiral TV card / PCIE1x
	+ external
		+ [video interface](https://zhuanlan.zhihu.com/p/133994348)
		+  VGA, Video Graphics Array
			+ IBM, 1987, monolog 
		+ DVI, Digital Visual Interface
		+ HDMI, High Definition Multimedia Interface
		+ DP, Display port
			+ https://baike.baidu.com/item/DisplayPort接口/10713038



## Ref
[AX88179A | ASIX]: https://www.asix.com.tw/en/product/USBEthernet/Super-Speed_USB_Ethernet/AX88179A

The AX88179A is a USB 3.2 Gen1 to Gigabit Ethernet controller with integrated 10/100/1000Mbps Gigabit Ethernet PHY. AX88179A supports Windows 11/10/8.x, Linux/Android/Chrome OS, Nintendo Switch in-box drivers, and iOS/iPadOS/macOS/Linux native CDC-NCM driver for driverless, Plug & Play.   
  
The AX88179A is an easy-design, small form factor and cost-efficient solution, which adapts to any platforms required to support Gigabit Ethernet network connectivity via USB port and is suitable for Desktop/Notebook/POS, USB Ethernet dongles, docking stations, smart mobile device cradles, game consoles, smart camera/IP STB, 5G/LTE router/gateway, etc. smart home/office applications.

[Expasion Card | Wikipedia]: https://en.wikipedia.org/wiki/Expansion_card
