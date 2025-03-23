# CSV (Comma Separated Values)

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Comma-separated_values

Comma-separated values (CSV) is a text file format that uses commas to separate values, and newlines to separate records. A CSV file stores tabular data (numbers and text) in plain text, where each line of the file typically represents one data record. Each record consists of the same number of fields, and these are separated by commas in the CSV file. If the field delimiter itself may appear within a field, fields can be surrounded with quotation marks.

The lack of adherence to the **CSV standard RFC 4180** necessitates the support for a variety of CSV formats in data input software. Despite this drawback, CSV remains widespread in data applications and is widely supported by a variety of software, including common spreadsheet applications such as Microsoft Excel. Benefits cited in favor of CSV include human readability and the simplicity of the format


### Delimiter Separated File
The CSV file format is one type of **delimiter-separated file format**. Delimiters frequently used include the comma, tab, space, and semicolon. Delimiter-separated files are often given a ".csv" extension even when the field separator is not a comma. Many applications or libraries that consume or produce CSV files have options to specify an alternative delimiter.



## Definition of CSV Format
> 🔗 https://www.ietf.org/rfc/rfc4180.txt

While there are various specifications and implementations for the CSV format (for ex. [4], [5], [6] and [7]), there is no formal specification in existence, which allows for a wide variety of interpretations of CSV files.  This section documents the format that seems to be followed by most implementations:

1. Each record is located on a separate line, delimited by a line break (CRLF).  For example:
``` csv
aaa,bbb,ccc CRLF
zzz,yyy,xxx CRLF
```

2. The last record in the file may or may not have an ending line break. For example:
```csv
aaa,bbb,ccc CRLF
zzz,yyy,xxx
```

3. There maybe an optional header line appearing as the first line of the file with the same format as normal record lines.  This header will contain names corresponding to the fields in the file and should contain the same number of fields as the records in the rest of the file (the presence or absence of the header line should be indicated via the optional "header" parameter of this MIME type).  For example:
```csv
field_name,field_name,field_name CRLF
aaa,bbb,ccc CRLF
zzz,yyy,xxx CRLF
```
   
4. Within the header and each record, there may be one or more fields, separated by commas.  Each line should contain the same number of fields throughout the file.  Spaces are considered part of a field and should not be ignored. The last field in the record must not be followed by a comma.  For example:
``` csv
aaa,bbb,ccc
```

5. Each field may or may not be enclosed in double quotes (however some programs, such as Microsoft Excel, do not use double quotes at all).  If fields are not enclosed with double quotes, then double quotes may not appear inside the fields.  For example:
```csv
"aaa","bbb","ccc" CRLF
zzz,yyy,xxx
```

6. Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes.  For example:
```csv
"aaa","b CRLF
bb","ccc" CRLF
zzz,yyy,xxx
```

7. If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by preceding it with another double quote.  For example:
```csv
"aaa","b""bb","ccc"
```



## Ref
[理解CSV格式规范（解析CSV必备） | CSDN]: https://blog.csdn.net/woaixiaoyu520/article/details/78455650

参考于[CSV in Wikipedia](https://en.wikipedia.org/wiki/Comma-separated_values "Comma-separated values")
参考于[RFC 4180](https://tools.ietf.org/html/rfc4180 "Request for Comments 4180: Common Format and MIME Type for Comma-Separated Values (CSV) Files")
参考于[CSV Reader](https://www.csvreader.com/csv_format.php "CSVReader.com")

上面说过，CSV并不是一种单一的、定义明确的格式（尽管RFC 4180有一个被通常使用的定义）。因此在实践中，术语“CSV”泛指具有以下特征的任何文件：
- 纯文本，使用某个字符集，比如ASCII、Unicode、EBCDIC或GB2312；
- 由记录组成（典型的是每行一条记录）；
- 每条记录被分隔符分隔为字段（典型分隔符有逗号、分号或制表符；有时分隔符可以包括可选的空格）；
- 每条记录都有同样的字段序列。

所以，在常规的约束条件下，存在着许多CSV变体，故CSV文件并不完全互通，如使用约定好的其他分隔符、转义规则等。因此，实际使用CSV需要数据交换双方约定规则（其实大体思路不变，一些细节），在进行CSV文件读写就免不了进行文件的解析。

正如CSV并不明确的格式，CSV文件的解析同样没有标准方法，一般可以自己实现读写，网上也有很多种不同语言的实现版本。例如opencsv、csvreader等。它们可能会与RFC中的规定有所出入，例如在csvreader中有要求：

> 前缀和后缀的空格字符，逗号和制表符，与逗号或记录分隔符相邻的内容将被修剪。
> 为了保证前导和后缀空白字符的保留，必须通过将字段嵌入到双引号集合中来限定字段。

使用时需要注意。