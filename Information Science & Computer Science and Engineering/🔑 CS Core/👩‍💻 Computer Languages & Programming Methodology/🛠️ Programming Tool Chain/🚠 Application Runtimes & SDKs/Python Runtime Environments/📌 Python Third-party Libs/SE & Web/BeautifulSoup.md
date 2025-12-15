# BeautifulSoup

[TOC]



## Res
🔗 https://pypi.org/project/beautifulsoup4/

### Links
- [Homepage](https://www.crummy.com/software/BeautifulSoup/bs4/)
- [Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [Discussion group](https://groups.google.com/group/beautifulsoup/)
- [Development](https://code.launchpad.net/beautifulsoup/)
- [Bug tracker](https://bugs.launchpad.net/beautifulsoup/)
- [Complete changelog](https://bazaar.launchpad.net/~leonardr/beautifulsoup/bs4/view/head:/CHANGELOG)



## Intro
Beautiful Soup is a library that makes it easy to scrape information from web pages. It sits atop an HTML or XML parser, providing Pythonic idioms for iterating, searching, and modifying the parse tree.



## Ref
[beautifulsoup提取所有<a>标签内容 Python]: https://blog.csdn.net/suibianshen2012/article/details/61915222

[🤔 Python3使用BeautifulSoup解析百度关键词搜索结果]: http://www.opython.com/1373.html

[Python爬虫：史上最详细的BeautifulSoup教程]: https://www.jianshu.com/p/424e037c5dd8

beautifulsoup怎么获取指定section下的指定a标签的href

- 最老实写法
soup.find('section', id='one').find('a')['href']

- 抖机灵写法
soup.a['href'] # 默认取第一个元素

- find_all 神器
soup.find_all('a')[0]['href'] # 返回一个列表

- CSS 选择器大法好
soup.select('section[id=one] a')[0]['href'] 或
soup.select('#one a')[0]['href']

- 正则熟悉的话可以自己撸正则
其他模块
- XPath 或者 pyquery 模块也是不错的选择哦

[👍 Beautiful Soup 定位指南]: https://www.cnblogs.com/skying555/p/5416864.html
