# Jackett

[TOC]



## Res
🏠 https://github.com/Jackett/Jackett



## Intro
Jackett works as a proxy server: it translates queries from apps ([Sonarr](https://github.com/Sonarr/Sonarr), [Radarr](https://github.com/Radarr/Radarr), [SickRage](https://sickrage.github.io/), [CouchPotato](https://couchpota.to/), [Mylar3](https://github.com/mylar3/mylar3), [Lidarr](https://github.com/lidarr/lidarr), [DuckieTV](https://github.com/SchizoDuckie/DuckieTV), [qBittorrent](https://www.qbittorrent.org/), [Nefarious](https://github.com/lardbit/nefarious) etc.) into tracker-site-specific http queries, parses the html or json response, and then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches. Jackett is a single repository of maintained indexer scraping & translation logic - removing the burden from other apps.

> **Developer note:** The software implements the [Torznab](https://torznab.github.io/spec-1.3-draft/index.html) (with hybrid [nZEDb](https://github.com/nZEDb/nZEDb/blob/b485fa326a0ff1f47ce144164eb1f070e406b555/resources/db/schema/data/10-categories.tsv)/[Newznab](https://newznab.readthedocs.io/en/latest/misc/api/#predefined-categories) [category numbering](https://github.com/Jackett/Jackett/wiki/Jackett-Categories)) and [TorrentPotato](https://github.com/RuudBurger/CouchPotatoServer/wiki/Couchpotato-torrent-provider) APIs.

A third-party Golang SDK for Jackett is available from [webtor-io/go-jackett](https://github.com/webtor-io/go-jackett)



## Ref

