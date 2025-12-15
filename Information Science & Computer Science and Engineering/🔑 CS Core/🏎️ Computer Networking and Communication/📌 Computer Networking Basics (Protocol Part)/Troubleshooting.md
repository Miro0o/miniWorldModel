# Troubleshooting

[TOC]



## 👉 Fastly error: unknown domain: 
#stackoverflow #dns #network #fastly

🙋‍♀️ 
Since yesterday I've encountered following error a couple of times:

> Fastly error: unknown domain: stackoverflow.com. Please check that this domain has been added to a service.
> 
> Details: cache-fra-eddf8230041-FRA

(2023/10/1)

🤷🏽‍♂️
Also on MSE: [Error: Unknown domain: stackoverflow.com](https://meta.stackexchange.com/q/393415)
Also getting the error, from Spain.Tried to update Windows DNS to CloudFlare's 1.1.1.1 but still getting the error

👨‍🏫
- Does your employer have their own DNS for their devices? Stack Overflow recently [changed their IP addresses](https://meta.stackexchange.com/questions/393039/stack-exchange-network-sites-ip-addresses-may-change-in-the-coming-weeks) so that might be the cause. One way to check would be to see what an nslookup returns to you for Stack Overflow.


👨‍🏫 
I can reproduce your error by editing my [hosts](https://en.wikipedia.org/wiki/Hosts_(file)) file and adding an entry for Stack Overflow (won't recommend doing this with random IP addresses in an uncontrolled manner!) pointing to the IP address provided in your [comment](https://meta.stackoverflow.com/questions/426682/fastly-error-unknown-domain#comment974285_426682), so this is due to the IP address change and is due to the DNS used by your employer. You should inform your employer about this change and ask them to get it fixed.

[Fastly error: unknown domain: | meta.stackoverflow.com]: https://meta.stackoverflow.com/a/426683/16542494

[How to flush fastly cache]: https://community.platform.sh/t/how-to-flush-the-fastly-cache/484