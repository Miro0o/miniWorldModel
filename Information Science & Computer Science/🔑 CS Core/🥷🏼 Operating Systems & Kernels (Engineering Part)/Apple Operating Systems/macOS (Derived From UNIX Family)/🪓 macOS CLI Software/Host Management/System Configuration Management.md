# System Configuration Management

[TOC]



## Res


## Deamons
### `configd` 
The configd daemon is responsible for many configuration aspects of the local system. configd maintains data reflecting the desired and current state of the system, provides notifications to applications when this data changes, and hosts a number of configuration agents in the form of loadable bundles.

Each configuration agent is responsible for a well-defined aspect of configuration management.

The agents look to one or more input sources (preferences, low-level kernel events, configd notifications, etc) and, through a set of policy modules, interacts with the system to establish the desired operational configuration.

Access to the data maintained by configd is via the SystemConfiguration.framework SCDynamicStore APIs.


### `launchd`
↗ [launchd & launchctl](../Process%20Management/System%20Service%20Management/launchd%20&%20launchctl.md)



## Manage Tools
### 👉`scutil`
Manage system configuration parameters

Invoked with no options, scutil provides a command line interface to the "dynamic store" data maintained by configd(8).  Interaction with this data (using the `SystemConfiguration.framework` SCDynamicStore APIs) is handled with a set of commands read from standard input.  A list of the available commands is available by entering the help directive.


### 👉 `scselect`



## Ref

