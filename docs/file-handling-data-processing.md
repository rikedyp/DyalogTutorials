# File handling and data processing
Reading data into and getting data out of the workspace.

There are some in-built tools for importing data from files and the internet. If you are already familiar with [python](), [R language]() or [.NET]() then you can use one of the [external language bridges]() to bring data into APL from files via one of these languages. However, it will usually be simpler and faster in the long term to become familiar with the following tools.

## Binary files or arbitrary file types
The term "Native Files" refers to any type of file on a hard disk. These can be text or media files, or even executable files. Usually we are interested in various kinds of text files; the rest of this page lists [system functions](https://help.dyalog.com/latest/#Language/System%20Functions/Summary%20Tables/System%20Functions%20Categorised.htm) for handling these, including [`⎕NGET`](#nget).

For files of arbitrary type and format, some system functions beginning `⎕N`.

First, we must **tie** the file, locking it from use by other applications. `⎕NTIE` returns a tie number.

```APL
      tn ← '/path/to/file'⎕NTIE 0
```

This is a quick summary. For more details see [the Native Files cheat sheet](https://docs.dyalog.com/latest/CheatSheet%20-%20Native%20Files.pdf) and [system functions and variables A-Z](https://help.dyalog.com/latest/index.htm#Language/System%20Functions/Summary%20Tables/System%20Functions%20and%20Variables%20ColWise.htm) in the online documentation.

In the chapter on selecting from arrays there was [an example of reading a text file](../Selecting-from-arrays/#word-problems) using `⎕NGET`. Before Dyalog version 15.0, reading text files required a couple of extra steps. Some `⎕N...` native file functions are general and can be used to read and write any type of file. As a simple example, here we tie the file **words.txt**, read the data and store it in a variable, and finally untie the file.

!!! Note
	For multi-user systems, take care to set appropriate file access permissions when using `⎕NCREATE`, `⎕NTIE` and `⎕NLOCK`.

```APL
      tn←'assets/words.txt'⎕NTIE 0
      ⎕←10↑words←(⎕UCS 10)(≠⊆⊢)⎕NREAD tn 82(⎕NSIZE tn)0
┌─┬───┬────┬────┬─────┬────┬──────┬────┬──────┬────┐
│A│A's│AA's│AB's│ABM's│AC's│ACTH's│AI's│AIDS's│AM's│
└─┴───┴────┴────┴─────┴────┴──────┴────┴──────┴────┘
      ⎕NUNTIE⎕NNUMS
```

## Text Files
Generally the `⎕N...` family of system functions are for reading and writing *native files* as described in the documentation. `⎕NGET` and `⎕NPUT` are useful for reading and writing text files without having to tie and untie them.

```APL
(⊂words)⎕NPUT'data/words.txt'                      ⍝ Write words to a unicode text file
(content encoding newline)←⎕NGET'data/words.txt'   ⍝ Read words from a unicode text file
words←(⎕UCS newline)((~∊⍨)⊆⊢)content               ⍝ Split words on each new line 
```

## Tabular data
For small amounts of data, it is usually quickest and easiest to use raw APL with arrays. Nested matrices offer a convenient format comparable to a spreadsheet (in fact, they can be directly imported from Excel or CSV files). Inverted tables take the idea of column store and implement them in APL for great search and retrieval performance.

## ⎕CSV
The Comma Separator Values system function `⎕CSV` can read tabular data from `.csv` files as APL matrices,
Comma separated values are a very common and convenient . While we encourage you to [read the documentation](https://help.dyalog.com/latest/#Language/System Functions/csv.htm) for a full description, here is an overview of features of `⎕CSV`:

- Read data from and write data to files directly  
	```APL
	data ← ⎕CSV '/path/to/file.csv'
	```
- Separate the header (first row) from the rest of the data  
	```APL
	(data header) ← ⎕CSV '/path/to/file.csv' ⍬ ⍬ 1
	```
- Treat specific columns of input as numeric or text, depending on the options provided.  
	The `4` here indicates to convert numeric values if possible, else keep the value as text.
	```APL
    numeric_if_possible ← ⎕CSV '/path/to/file.csv' ⍬ 4
	```
- Use a separator other than commas, using the "Separator" variant option, for example using tabs (`⎕UCS 9`) for Tab Separated Values (.tsv).  
	```APL
	tsv ← ⎕CSV⍠'Separator' (⎕UCS 9)⊢'/path/to/file.csv'
	```
- Read data chunks at a time so as to not fill the workspace, using the "Records" variant option.  

	???Example
		```APL
			path ← '/path/to/file.csv'    ⍝ The file path as simple character vector
			ReadCSV10←⎕CSV⍠'Records' 10   ⍝ A function to read CSV 10 records at a time
			tn←path ⎕NTIE 0               ⍝ Tie the file - this locks it from use by other applications
			first10 ← ReadCSV10 tn        ⍝ Read the first 10 records (rows)
			second10 ← ReadCSV10 tn       ⍝ Read the next 10
			≢¨first10 second10
		10 10
			first10 second10
		┌──────────┬──────────┐
		│┌──┬─────┐│┌──┬─────┐│
		││1 │JQZUK│││11│DECJM││
		│├──┼─────┤│├──┼─────┤│
		││2 │ANPYW│││12│PXPGL││
		│├──┼─────┤│├──┼─────┤│
		││3 │WYVSR│││13│SYSCN││
		│├──┼─────┤│├──┼─────┤│
		││4 │ZOGOX│││14│EKDPS││
		│├──┼─────┤│├──┼─────┤│
		││5 │CXKRS│││15│XCOHA││
		│├──┼─────┤│├──┼─────┤│
		││6 │BFTYO│││16│RDAHR││
		│├──┼─────┤│├──┼─────┤│
		││7 │VFLAS│││17│KPUTW││
		│├──┼─────┤│├──┼─────┤│
		││8 │BAFYD│││18│TPDOD││
		│├──┼─────┤│├──┼─────┤│
		││9 │XPEBP│││19│BGIVA││
		│├──┼─────┤│├──┼─────┤│
		││10│UVBFG│││20│IITSO││
		│└──┴─────┘│└──┴─────┘│
		└──────────┴──────────┘
			⎕NUNTIE tn                    ⍝ Don't forget to untie the file after use!
		```

	If you are reading large tabular data, you can use [`⎕MAP`](#map) to access the data without bringing it all into your workspace, potentially preventing a `WS FULL` error.

*[CSV]: Comma Separated Values

<figure>
	<a href="https://dyalog.tv/Dyalog20/?v=AHoiROI15BA"><img src="https://img.youtube.com/vi/AHoiROI15BA/hqdefault.jpg">
	<figcaption>
		Parsing content from text files using Dyalog APL's ⎕CSV by Adám's APL
	</figcaption>
	</a>
</figure>

## `⎕JSON`
## `⎕XML`
XML is a format that has fallen out of favour in recent years, but is still useful to be able to import and export it easily when you need to.

*[XML]: Extensible Markup Language

## `⎕R/⎕S`
Search and replace using regular expressions.

`⎕R` and `⎕S` are dyadic operators which allow searching text using Pearl Compatible Regular Expressions (PCRE).

Dyalog's search and replace accept multiple search and replace strings and/or functions in a single call.

## `⎕MAP`
[Full documentation for `⎕MAP`](http://help.dyalog.com/latest/#Language/System%20Functions/map.htm).

The memory mapping function `⎕MAP` associates a file on disk with an APL array in the workspace. This is useful if you are working with data that cannot fit inside the available workspace memory. One approach might be to read the data in chunks and process one chunk at a time (for example, see the "Records" variant option for `⎕CSV`). Another approach is to use `⎕MAP`.

If you are working with data which is very large, you might not want or be able to bring all of the data into the workspace in order to process it. If you are reading large tabular data, [`⎕CSV`'s `Records` variant `⍠` option](#csv) might be a convenient tool when used in combination with `⎕MAP`.

`⎕MAP` allows you to treat a file on disk as if it were a variable in the workspace.

```APL
      text ← 80 ¯1 ⎕MAP '/path/to/file.txt'
```

You must specify the type according to the [Data Representation `⎕DR`](http://help.dyalog.com/latest/#Language/System%20Functions/Data%20Representation%20Monadic.htm) of the data to be read.

## ⎕JSON
JSON is not only a convenient way to represent nested data structures, but also a convenient data representation for the modern web since it is natively handled by JavaScript. `⎕JSON` converts between APL arrays, including namespaces and text vector representations of JSON.

```APL
      'ns'⎕NS⍬
      ns.var←1 2 3
      ns.char←'abc'
      ⎕JSON ns
{"char":"abc","var":[1,2,3]}
```

A JSON object in Dyalog uses dot-syntax to access members. Some JSON object keys are invalid APL names, so Dyalog works around this using special characters:
```APL
      (⎕JSON'{"$name": "steve", "3var": "what"}').⎕nl-⍳9
┌─────┬─────────┐
│⍙3var│⍙⍙36⍙name│
└─────┴─────────┘
```

Be aware of incompatible namespaces, although most of the time you will be converting data rather than namespaces.

```APL
      'ns'⎕NS⍬
      ns.fn←{⍵}
      ⎕JSON ns
DOMAIN ERROR: JSON export: item "fn" of the right argument cannot be 
converted (⎕IO=1)
      ⎕JSON ns
      ∧
```

Recall [the expression for an empty JSON object](../Shape Reshape/#the-shape-of-a-scalar).

Using `⎕JSON`, we can also [display error information in a human-readable format](../Errors/#pass-it-on).

*[JSON]: JavaScript Object Notation

## Component files
If it is only APL systems that need to store data, the most convenient and efficient way to store that data is in APL component files. Component files can store any type of APL array, including namespaces.

System functions that deal with component files begin `⎕F`.

[:fontawesome-brands-dyalog: Chapter N of Mastering Dyalog APL](https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf#page=557)  
[:material-web: Component Files Online Documentation](https://help.dyalog.com/latest/#Language/APL%20Component%20Files/Component%20Files.htm)  
[:fontawesome-solid-file-pdf: Chapter 5 of Dyalog Programming Reference Guide](https://docs.dyalog.com/latest/Dyalog%20Programming%20Reference%20Guide.pdf)

## Downloading data from the internet
See [HttpCommand](./web-communications.md#httpcommand).

## SQL Interface
SQAPL provides an interface to ODBC-compliant SQL databases including Oracle, Microsoft Access, MySQL, MariaDB and DB2. It contains functions to read, write and manage SQL databases. It is supported on all platforms, although some platforms could incur an additional licence fee for the server component of SQAPL.

For more information about using SQAPL, see the [SQL Interface Guide](https://docs.dyalog.com/latest/SQL%20Interface%20Guide.pdf).

For quick access to simply read data from or write data to a table, the functions `LoadSQL` and `SaveSQL` from the utility workspace [`LOADDATA`]() may be all that you need.

```APL
      'LoadSQL' 'SaveSQL'⎕CY'LOADDATA'
      LoadSQL'NorthWind' 'products'
```

### Features
Using SQAPL, you can:

- Retrieve a list of available data sources, and connect to one or more of them.
- Query the database catalogue, to determine which tables, views and columns
exist in a data source.
- Retrieve data from a result set. Retrieve a description of the contents of a
result set.
- Execute SQL statements multiple times using a matrix containing a row of
data for each execution (known as Bulk Input).
- Commit or roll back transactions.
- If connected with sufficient privileges, execute any SQL statement supported
by the database management system, including the creation of tables or views
(Data Definition Language – or DDL), indexes, stored procedures, or GRANT
statements (etc).
- Retrieve a list of data types supported by a data source.

### Getting Started
SQAPL ships with Dyalog APL. Simply copy it into the active workspace and call `SQA.Init` with an empty argument to start using it:

```APL
'SQA'⎕CY'SQAPL
SQA.Init⍬
```

Commonly used functions include:

|Function|Purpose|
|---|---|
|`SQA.Connect`|Connect to a data source|
|`SQA.Tables`|Show available tables|
|`SQA.Columns`|See information about tables including column data types and widths|
|`SQA.Do`|Execute SQL statements supported by your database and driver|
