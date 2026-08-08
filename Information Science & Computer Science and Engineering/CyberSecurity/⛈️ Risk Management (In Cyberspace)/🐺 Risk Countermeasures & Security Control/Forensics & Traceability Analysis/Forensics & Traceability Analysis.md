# Forensics & Traceability Analysis

[TOC]



## Res
### Related Topics
↗ [Digital Forensics and Incident Response (DFIR)](../Disaster%20&%20Incidence%20Response%20(IR)/Digital%20Forensics%20and%20Incident%20Response%20(DFIR).md)
↗ [Exfiltration](../../../Application%20Security/💉%20Web%20Security/Network%20Penetration%20(Pen-testing)/Achieve%20Phase/Exfiltration/Exfiltration.md)
↗ [Data Security](../../../Data%20Security/Data%20Security.md)
- ↗ [Data Privacy & PET (Privacy Enhancement Technologies)](../../../Data%20Security/Data%20Privacy%20&%20PET%20(Privacy%20Enhancement%20Technologies)/Data%20Privacy%20&%20PET%20(Privacy%20Enhancement%20Technologies).md)

↗ [Forensics](../../../🏰%20Cybersecurity%20Basics%20&%20Information%20Security%20(InfoSec)/CTF%20&%20AWD/Forensics/Forensics.md)
↗ [Forensics & Counter Forensics Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Forensics%20&%20Counter%20Forensics%20Tools/Forensics%20&%20Counter%20Forensics%20Tools.md)

↗ [EXIF (Exchangeable Image File Format)](../../../../🔑%20CS%20Core/🧙‍♂️%20Algorithm%20&%20Data%20Structure/Other%20Topics%20in%20Algorithms/Data%20Compression%20Technologies/Media%20Formats%20&%20Standards%20&%20Codec%20(Coder-Decoder)/Graphics%20Formats%20&%20Standards/EXIF%20(Exchangeable%20Image%20File%20Format).md)


### Learning Resources
https://www.forensicxlab.com/
Opensource Digital Forensics. Learn, Share, Investigate.

https://forensics.wiki/
- The Forensics Wiki has transitioned to this new domain and platform; read more about it at [Transitioning Forensics Wiki to GitHub](https://osdfir.blogspot.com/2022/11/transitioning-forensics-wiki-to-github.html).
- The Forensics Wiki is an open source website providing information related to digital forensics. The articles on the website cover a wide range of information from [tools](https://forensics.wiki/tags/#tools) used during investigations to [papers](https://forensics.wiki/tags/#papers) [people](https://forensics.wiki/tags/#people) and [organizations](https://forensics.wiki/tags/#organization) that contribute to the field.



## Intro
### Forensic Science & Digital Forensics

#### Classes of Evidences /Artifacts
**Two big evidence classes**
- User data:
	- docs,
	- photos,
	- browser history,
	- Videos,
	- Communication
	- Etc.
- System data:
	- logs,
	- power events,
	- activity levels,
	- Location data
	- connected devices,
	- Etc.

**Core artifact families**
- Filesystem & timestamps
	- (Modified, Accessed, Changed, Birth) MACB
- Execution history
	- (prefetch, shimcache/amcache)
	- OS Serach Index
		- Windows Search index (Windows.edb)
			- Records file names, sometimes content snippets, and paths — including synced folders (e.g. OneDrive)
		- Thumbnail cache (thumbcache_xxx.db)→ Stores generated previews of images, documents, PDFs—including cloud-synced or temporary files
		- Jump lists / RecentDocs can also reflect recent access to synced files.
		- Remnants persist even after browser history or sync logs are cleared
		- Useful for timeline correlation: browser → sync client → OS artifacts
		- Can reveal evidence of viewed or transferred files that no longer exist
- Registry & system configs
- Logs
	- (system/app)
- User activity
	- (browser/search/recent files)
- Removable media (USB/CD)
	- Device presence + first/last seen
		- (USBSTOR, SetupAPI.dev.log)
		- Vendor/Product ID, serial number, volume label
		- First connection & last seen timestamps
		- Confirms which device was connected, when, and how often
	- File interaction evidence
		- LNK files → target paths, volume serials, last opened times
		- $MFT / $UsnJrnl → file creation, modification, deletion, rename events
		- Shows what files were accessed or transferred to/from the device
	- CD/DVD burns & external writes
		- IMAPI2 event logs → disc burn sessions, timestamps, labels
		- Prefetch → execution evidence for burning software
		- App logs → ISO paths, tracklists
		- Indicates potential data exfiltration via optical media
- Network traces (DNS/HTTP)
- Cloud/app footprints
	- Browser history
		- Visited URLs: show navigation to webmail, file-sharing platforms (e.g. Google Drive, opbox, Mega, OneDrive)
		- Download history: filenames, paths, timestamps; often survives file deletion
		- Search queries: Google/Bing search terms stored in history and form-autocomplete DBs
		- Session data (cookies, local storage): evidence of logins, tokens, and services accessed
	- Client databases & sync logs
		- Cloud sync DBs (e.g. OneDrive ClientTelemetry.db, Google Drive snapshot.db)
			- track file sync events (added, renamed, deleted), user accounts, device IDs, last sync times
		- Log files often stored in `%AppData%`, `%LocalAppData%`, or system temp:
			- contain detailed transfer info (file paths, timestamps, error messages)
		- Credential remnants: tokens, device registration details, or cached OAuth credentials
#### Common Tips
**Log Files**
- System & application logs are great timeline anchors
	- Contain rich details: timestamps, usernames, process IDs, network activity
	- Useful for anchoring, attribution, and corroboration
- Common pitfalls to watch for
	- Rotation & retention: older entries may be gone
	- Privilege gaps: not everything is logged
	- Parsing issues: multiline, encoding, or partial log entries
	- Clock drift / unsynced systems: misleading or inconsistent timestamps
- Always record timebase & timezone assumptions
	- Logs may mix local time, UTC, DST shifts, or unsynced clocks
	- Document offsets and standards to avoid timeline errors

**Time sanity: pick a base & normalize**
- Check device time settings early
	- Verify system clock, timezone, DST, and NTP sync status
	- Note any drift or desynchronization before analysis starts
- Pick a time base and stick to it
	- Decide on UTC or local time for the investigation
	- Convert and label all timestamps consistently
	- Avoid mixing UTC, local, and “unknown” timestamps in one timeline
- Call out uncertainty explicitly
	- Note any ± clock skew, DST ambiguity, or incomplete timezone info
	- Document assumptions and sources of time
	- Flag where precision may be degraded

**Corroboration > anecdotes**
- Method triangulation
	- Verify findings using a second tool or method
		- e.g. Autopsy timeline vs. manual $MFT parsing
		- Hash checks with two different utilities
	- Reduces risk of tool-specific parsing errors or bugs
- Data triangulation
	- Look for independent artifacts that support the same conclusion
		- e.g. USBSTOR key + LNK files + $UsnJrnl entries all indicate a USB copy event
		- Browser history + sync logs + thumbnail cache confirm a cloud upload
	- Builds stronger, defensible narratives
		- Actively seek disconfirming evidence
	- Don’t just collect what fits your theory — try to break it
	- Check for alternate explanations or missing pieces
	- Peer review and second-opinion checks catch blind spots

**Ethics & scope quick hits**
- Minimal collection; privacy awareness
- Contemporaneous notes; who/when/how
- Record **tool names/versions** and **hashes** of acquired data (baseline habit)


### Traceability Analysis
> 传统的被动防御策略(如防火墙、杀毒软件等)在 面对 日益复杂的智能攻击行为时难以有效保护网络安全和抑制攻击。网络攻击者大多使用伪造IP地址或通过多个跳板发起攻击，使防御方很难确定真正攻击源的身份和位置，难以实施有针对性的防御策略。
> “知己知彼，百战不殆”，在网络攻防对抗中，只有拥有信息优势，才能更加有效地实施网络对抗策略，进而取得胜利。网络攻击追踪溯源的目标是探知攻击者身份、攻击点位置及攻击路径等信 息，据此制定有针对性的防护或反制措施，进而占领网络攻防对抗制高点。
> 
> 《网络攻防术》朱俊虎，网络空间安全学科规划教材


### Counter Forensics & Anti-Counter Forensics
↗ [Forensics & Counter Forensics Tools](../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Forensics%20&%20Counter%20Forensics%20Tools/Forensics%20&%20Counter%20Forensics%20Tools.md)



## Digital Forensic Model & Work Flow
### Simplified Digital Forensic model
Inspired by Abstract Digital Forensic Model (Reith, Carr & Gunsch)
1. Identification (planning)
	- The problem at hand:
		- Which questions do I need to answer?
		- What is the scope of the investigation / incident response?
		- Where can I expect to find relevant data?
		- Definition of done
	- Guidance indicators:
		- Can we draw on earlier experience from similar incidents?
		- Do indicators suggest adjustment of scope or questions?
	- Competencies and resources:
		- Which competencies are needed?
		- Do we need external help or additional tools?
		- Estimate in regards to when the job will be done
2. Preservation (data acquisition)
	- Case management:
		- How do I document my chain of custody?
		- How do I audit who can access case data?
	- Data acquisition:
		- How do I take a copy of data in a forensically sound manner?
			- Not just a question of copying data
				- The chain of custody starts here!
			- Forensic soundness
		- Which tool support do I need?
		- Are there any legal constraints?
		- Types of data
			- Hard-drives, USB keys
			- Onboard storage
			- Mixed physical / cloud
			- Live data
			- Cloud desktop
			- Non-standard adapters
		- (minimum documentation requirements)
			- On which device/service was the data originally located?
			- When was the data acquired?
			- Who acquired the data?
			- Which tools were used to acquire the data?
			- What is the hash value of the acquired data?
			- Details regarding time
	- Time synchronization:
		- Are data and time currently correct on the target device?
		- Is time synchronization enabled on the target device?
3. Analysis
	- Tools and processing
		- Deployment and configuration of forensic analysis tools
		- Configuration check (time zone, images, etc.)
		- Automated processing is essential
		- But always lacks behind the real world and only parses common datatypes
	- Analysis
		- Prioritized interpretation of processing results
		- Manual analysis (time consuming)
		- Findings can trigger an additional processing or preservation round
	- Validation and other checks
		- Trust no one and nothing
		- Every tool has known and unknown flaws
		- Various scientific and investigative methods to mitigate and/or find errors and flaws in forensic results
		- Validation of forensic findings
			- Method triangulation (aka. dual tool validation)
			- Data triangulation (does other forensic findings point in the same direction?)
			- Actively look for items that invalidates your results
			- Peer review
		- Mitigation of uncertainty in forensic findings
			- Data triangulation
				- Witness statements
				- Video recordings (CCTV)
				- Cellular information
			- If there are any uncertainties, they should be clearly documented
4. Documentation
	- Know your audience
		- Most decision makers only read your conclusion
		- Use drawings and figures for complex relationships
	- Reproducibility and transparency
		- The receiver should be able to reproduce your findings given your report and the forensic image
		- List all tools and versions
	- Unbiased and honest
		- Include findings that speaks against your conclusion
		- List and explain all uncertainties



## Ref
[安全攻击溯源思路及案例 | cnblog]: https://www.cnblogs.com/xiaozi/p/13817637.html

![](../../../../../../Assets/Pics/Pasted%20image%2020240330193819.png)

[Digital Forensic Report — M57 Jean/ Allison Case — Data Breach of “M57.biz” | medium]: https://hasanka-amarasinghe.medium.com/digital-forensic-report-m57-jean-allison-case-data-breach-of-m57-biz-92396ec3a657

[🔦 Debunking the Expert Witness Compression Format (EWF)]: https://www.forensicxlab.com/blog/ewf
![](../../../../../Assets/Pics/Pasted%20image%2020251016003412.png)
![](../../../../../Assets/Pics/Pasted%20image%2020251016003430.png)
