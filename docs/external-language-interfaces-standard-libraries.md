# External Language Interfaces and Standard Libraries

## Compiled libraries interface (`⎕NA`)
The **Name Association** function ⎕NA provides access from APL to compiled functions within a library. 

[:material-web: Online documentation for Name Association ⎕NA](http://help.dyalog.com/latest/#Language/System%20Functions/na.htm)

A library is implemented according to the operating system as follows:

- a Dynamic Link Library (DLL) under Windows
- a Shared Library (.so or .dylib) under Linux and macOS
- a static library (.a) under AIX

A compiled library is a collection of functions typically written in C (or C++) each of which may take arguments and return a result.

Input and output data types must be explicitly declared.

## .NET
.NET contains a plethora of useful libraries.
To use .NET functions and namespaces, set `⎕USING` and create an instance of a .NET class with `⎕NEW`.
```APL
      ⎕USING←'System'
      mydt ← ⎕NEW DateTime (2008 4 30)
      TimeZone.CurrentTimeZone.StandardName
GMT Standard Time
```

## Python (Py'n'APL)
## R language (RSConnect)
## Microsoft Office (OLE Client)
OLE is a Microsoft technology which can be used to interface with Microsoft Office products, including Excel, PowerPoint and Word. The Dyalog OLE bridge is only on Microsoft Windows.

Here is a quick example to open a connection to Excel, create a workbook and add data to it.

```APL
      XL←⎕NEW'OLEClient'(⊂'ClassName' 'Excel.Application')
      XL.Visible←1
      XL.Workbooks.Add⍬
      XL.ActiveWorkbook.Sheets[1].Name
Sheet1
      XL.ActiveWorkbook.Sheets[1].Range[⊂'A1:A5'].Value2←⍪⍳5
      XL.ActiveWorkbook.Sheets[⊂'Sheet1'].Range[⊂'B1:B5'].Value2←⍪,¨'ABCDE'
```

For further information and examples, see:

[:fontawesome-solid-file-pdf: Chapter Q, Section 2 on page 676 of Mastering Dyalog APL](https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf#page=698)  
[:fontawesome-brands-youtube: Dyalog Webinar: APL and Microsoft Excel](https://dyalog.tv/Webinar/?v=hs90SdUc9dE)  
[:fontawesome-solid-file-pdf: Chapter 9 of the Dyalog for Microsoft Windows Interface Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Interface%20Guide.pdf#page=185)  
[:fontawesome-solid-file-pdf: Charting the APL/Excel Waters](https://www.dyalog.com/uploads/conference/dyalog11/presentations/C05_using_excel_under_apl/officeauto11.pdf)
