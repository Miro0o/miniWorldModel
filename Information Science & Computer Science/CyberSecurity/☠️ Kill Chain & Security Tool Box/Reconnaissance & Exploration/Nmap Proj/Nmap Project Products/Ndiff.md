# Ndiff

[TOC]



## Res
📂 https://nmap.org/book/ndiff-man.html



## Intro
Ndiff is a tool to aid in the comparison of Nmap scans. It takes two Nmap XML output files and prints the differences between them. The differences observed are:
- Host states (e.g. up to down)
- Port states (e.g. open to closed)
- Service versions (from `-sV`)
- OS matches (from `-O`)
- Script output

Ndiff, like the standard **diff** utility, compares two scans at a time.



## Ref

