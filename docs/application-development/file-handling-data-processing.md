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
If it is only APL systems that need to store data, the most convenient and efficient way to store that data is in APL **component files**.

Here we will briefly look at the basic usage of component files. A full treatment of component files is provided in [Chapter N of Mastering Dyalog APL](https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf#page=557) and more information can be found in the [component file documentation](http://help.dyalog.com/latest/#Language/APL Component Files/Component Files.htm).

System functions that deal with component files begin `⎕F...`.

### Tie and untie
In Dyalog, component files have the extension **.dcf** (Dyalog Component File) and must be **tied** and **untied**.

A component file may be exclusively tied (`⎕FTIE`) or have a shared tie (`⎕FSTIE`). With an exclusive tie, no other process may access the file.

```APL
      tn←'cfile'⎕FCREATE 0   ⍝ The file is exclusively tied
      ⎕FUNTIE tn             ⍝ The file is untied, it can now be used by other applications and processes
```

The next time we want to use this file, we can use `⎕FTIE` instead of `⎕FCREATE`. The right argument to these functions specifies a tie number (which can be different each time the file is tied), but with a right argument of `0` the next available tie number is used (component file tie numbers start at 1).

```APL
      tn←'cfile'⎕FTIE 0   ⍝ The file on disk is cfile.dcf, but this extension is assumed if not specified 
```

The structure of a component file is analogous to a nested vector of arrays. We add new values by appending them to the end of a file.

```APL
      (3 3⍴⍳9)⎕FAPPEND tn
      (↑'Dave' 'Sam' 'Ellie' 'Saif')⎕FAPPEND tn
      nested←2 2⍴'this' 0 'that' (1 2 3)
      nested ⎕FAPPEND tn
```

Each array stored in a component file (a *component*) is referred to by its index in the file (its *component number*), starting from 1 (not affected by `⎕IO`).

```APL
      ⎕FREAD¨tn,¨1 2 3
┌─────┬─────┬────────────┐
│1 2 3│Dave │┌────┬─────┐│
│4 5 6│Sam  ││this│0    ││
│7 8 9│Ellie│├────┼─────┤│
│     │Saif ││that│1 2 3││
│     │     │└────┴─────┘│
└─────┴─────┴────────────┘
```

A component can be replaced by any other array.
```APL
      'Hello'⎕FREPLACE tn 2
      ⎕FREAD tn 2
Hello
```

Use `⎕FSIZE` to find the range of components and file size:
```
      ⎕FSIZE tn
1 4 1744 1.8446744073709552E19
```

The elements of `⎕FSIZE` are:

- `[1]` The number of the first component
- `[2]` 1 + the number of the last component (that is, where a new component will be if `⎕FAPPEND` is used)
- `[3]` The current size of the file in bytes
- `[4]` The file size limit in bytes

Components can be removed from the beginning or end of a component file, with the `⎕FDROP` function analogous to `⍺↓⍵`.

```APL
      ⎕FDROP tn  1
      ⎕FDROP tn ¯1
      ⎕FREAD¨tn,¨1 2 3
FILE INDEX ERROR: cfile.dcf: No such component
      ⎕FREAD¨tn,¨1 2 3
      ∧
      ⎕FREAD tn 2   ⍝ Only component number 2 remains
Dave 
Sam  
Ellie
Saif 
```

After use, don't forget to untie all tied component files using `⎕FUNTIE ⎕FNUMS`.

### Multi-user access
If you are working on a system through which multiple users need to access the same component files, it is important to become familiar with multi-user access techniques and potential pitfalls. In particular, you will need to use `⎕FSTIE`, `⎕FHOLD`, `⎕FSTACK` and probably `⎕AN`.

- [Chapter N of Mastering Dyalog APL](https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf#page=557)
- [Online documentation: Controlling multi-user access](https://help.dyalog.com/latest/index.htm#Language/APL%20Component%20Files/Programming%20Techniques.htm)

Multi-user access can mean manual access by actual human users, or automated access by separate computers or processes.

## Downloading data from the internet
The **HttpCommand** class is built on top of the [**Conga**](https://docs.dyalog.com/latest/Conga%20User%20Guide.pdf) framework for TCP/IP communications. At the most basic level, it can be used to perform HTTP requests to retrieve data from servers. 

```APL
      ]load HttpCommand
#.HttpCommand
      ⍴(#.HttpCommand.Get 'https://google.com').Data
14107
```

For more information, see [the HttpCommand document](https://github.com/Dyalog/library-conga/blob/master/Documentation/HttpCommand.md). Alternatively, there is documentation within the comments of the code for the HttpCommand class; simply use `)ed HttpCommand` or press <kbd>Shift+Enter</kbd> with the text cursor on the name in the session.

Previous versions of HttpCommand were documented in [HttpCommand.md in the library-conga GitHub repository](https://github.com/Dyalog/library-conga/blob/master/Documentation/HttpCommand.md).
