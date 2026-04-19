# FAQ

[TOC]



## 👉 How to clean local DNS cache in ubuntu?
#ubuntu #dns #cache 

🎯 **Ubuntu 22.04 and higher**
```shell
sudo resolvectl flush-caches
```

🎯 **Ubuntu 17.04 to 18.04**

From Ubuntu 17.04 and onwards, systemd-resolve is used for DNS. You can flush systemd's caches like so:
```shell
sudo systemd-resolve --flush-caches
```

🎯 **For 11.10 and below**

Ubuntu doesn't cache dns records by default so unless you've installed a dns cache there isn't anything to clear.

DNS records are likely cached by your provider's DNS servers so if you want to check if the DNS changes you made were successful you can interrogate a DNS server from your domain hosting service with dig:

`dig -t a ns1.myhostingcompany.com @domain_registrar_dns_server`

It you want Ubuntu to start caching dns I recommend installing `pdnsd` together with `resolvconf`. `nscd` is buggy and not advisable.

