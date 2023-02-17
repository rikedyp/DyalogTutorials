---
hide: navigation
---

# Tools and Interface Catalogue
Repositories in [:fontawesome-brands-github: Dyalog](https://github.com/dyalog) are maintained and supported by Dyalog. Other repositories are maintained by their respective owners.

## [Application Development and Deployment](./application-development.md)
|Tool|Description|Documentation|
|---|---|---|
|[Windows IDE](./application-development.md#dyalog-ide-for-microsoft-windows)|Write, run and debug Dyalog applications on Microsoft Windows|[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows UI Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20UI%20Guide.pdf)|
|[RIDE](./application-development.md#remote-ide-ride)|The recommended IDE for macOS and Linux.<br>Remotely connect to an interpreter over a network on any platform|[:fontawesome-solid-file-pdf: RIDE User Guide](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf)|
|Link|Save APL source in text files to integrate with external code editors and source code management software|[:material-web: Link User Guide](https://dyalog.github.io/link)|
|[Docker](./application-development.md#deploy-with-docker-containers)|Run Dyalog and deploy applications using Docker containers|[:octicons-link-external-16: Dyalog on Docker](https://hub.docker.com/r/dyalog/dyalog)|

## [Web communications](./web-communications.md)
|Tool|Description|Documentation|
|---|---|---|
|[Jarvis](./web-communications.md#jarvis-web-service-framework)|Expose APL functions as a JSON or REST web services|[:material-web: Jarvis User Guide](https://dyalog.github.io/Jarvis/)|
|[HttpCommand](./web-communications.md#httpcommand)|Make HTTP requests to access web data and services|[:material-web: HttpCommand User Guide](https://dyalog.github.io/HttpCommand/)|
|HttpUtils|Compose and manipulate HTTP messages|[:fontawesome-solid-file-pdf: Code Libraries Reference Guide](http://docs.dyalog.com/latest/Code%20Libraries%20Reference%20Guide.pdf)|
|[Conga](./web-communications.md#conga-tcp-wrapper)|TCP/IP communications library|[:fontawesome-solid-file-pdf: Conga User Guide](http://docs.dyalog.com/latest/Conga%20User%20Guide.pdf)|
|aplssh|Start and manage SSH sessions from APL using libssh2|[:fontawesome-brands-github: Dyalog/aplssh](https://github.com/Dyalog/aplssh)|
|SAWS|SOAP-based Web Service framework|[:fontawesome-solid-file-pdf: SAWS User Guide](http://docs.dyalog.com/latest/SAWS%20User%20Guide.pdf)|

## [File handling and data processing](./file-handling-data-processing.md)
|Tool|Description|Documentation|
|---|---|---|
|[SQAPL](./file-handling-data-processing.md#sql-interface)|Interface to ODBC data sources (SQL databases)|[:fontawesome-solid-file-pdf: SQL Interface Guide](http://docs.dyalog.com/latest/SQL%20Interface%20Guide.pdf)|
|vecdb|A very simple column-store management system|[:fontawesome-brands-github: Dyalog/vecdb](https://github.com/Dyalog/vecdb)|
|[⎕CSV](./file-handling-data-processing.md#csv)|Read data from CSV files and text as APL arrays; write APL arrays to CSV format and files|[:material-web: Comma Separated Values](http://help.dyalog.com/latest/#Language/System%20Functions/csv.htm)|
|[⎕JSON](./file-handling-data-processing.md#json)|Convert between APL namespaces and JSON text|[:material-web: JSON Convert](http://help.dyalog.com/latest/#Language/System%20Functions/json.htm)|
|[⎕XML](./file-handling-data-processing.md#xml)|Convert between a special APL array format and XML text|[:material-web: XML Convert](http://help.dyalog.com/latest/#Language/System%20Functions/xml.htm)|
|[⎕MAP](./file-handling-data-processing.md#map)|Treat files on disk as APL arrays|[:material-web: Map File](http://help.dyalog.com/latest/#Language/System%20Functions/map.htm)|
|loaddata.dws|Example workspace with functions to load and save data from SQL, CSV, Excel and XML data sources|`)LOAD loaddata`|

## [External language interfaces and standard libraries](./external-language-interfaces-standard-libraries.md)
|Tool|Description|Documentation|
|---|---|---|
|[⎕NA](./external-language-interfaces-standard-libraries.md#compiled-libraries-interface)|Interface to compiled libraries (.dll, .so, .dylib, .a), for example those written in C/C++|[:material-web: Name Association](http://help.dyalog.com/latest/#Language/System%20Functions/na.htm)|
|RSConnect|R language interface with Rserve|[:fontawesome-brands-github: kimmolinna/rsconnect](https://github.com/kimmolinna/rsconnect)|
|Math|Interface to LAPACK and FFTW to compute eigenvalues, eigenvectors and Fast Fourier Transforms|[:fontawesome-brands-github: Dyalog/Math](https://github.com/Dyalog/Math)|
|Py'n'APL|Access python code from APL and vice versa|[:fontawesome-brands-github: Dyalog/pynapl](https://github.com/Dyalog/pynapl)|
|.NET|Create and use instances of .NET classes.<br>Recent versions of cross-platform .NET are referred to as ".NET Core" in the Dyalog documentation.|[:fontawesome-solid-file-pdf: .NET Core Interface Guide](https://docs.dyalog.com/latest/dotNET%20Core%20Interface%20Guide.pdf)<br>[:fontawesome-solid-file-pdf: Comparison of .NET Core/Framework Interfaces](https://docs.dyalog.com/latest/dotNET%20Differences.pdf)|
|.NET Framework|Create and use instances of .NET classes.<br>Define new .NET classes in Dyalog APL that can be used from other .NET languages such as C#.|[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows .NET Framework Interface Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20.NET%20Framework%20Interface%20Guide.pdf)|
|[Microsoft OLE](./external-language-interfaces-standard-libraries.md#microsoft-office-ole-client)|Control Microsoft Office and other applications from Dyalog|

## GUI and graphics
|Tool|Description|Documentation|
|---|---|---|
|EasyGUI|Lightweight utility library for creating simple cross-platform graphical user interfaces|[:fontawesome-brands-github: JoshDavid/EasyGUI](https://github.com/JoshDavid/EasyGUI/)
|Dyalog User Interface (DUI)|Successor of the MiServer web server framework. Write GUI applications in APL and deploy them either as stand-alone applications using HTMLRenderer or serve them as websites and web applications accessible via a web browser.|[:fontawesome-brands-github: Dyalog/DUI](https://github.com/Dyalog/DUI/)<br>[:material-web: MiServer Website (samples and documentation)](https://miserver.dyalog.com/)|
|sharpplot.dws|Graphing library for data visualisation|[:material-web: sharpplot.com](https://www.sharpplot.com/)|
|[:fontawesome-brands-github: Selenium](https://github.com/Dyalog/Selenium)|Automate the use of web browsers using using Selenium WebDriver under Microsoft Windows|[:fontawesome-solid-file-pdf: Driving Selenium from Dyalog APL](https://github.com/Dyalog/Selenium/raw/master/Selenium%20from%20Dyalog.pdf)
|HTMLRenderer|GUI object for rendering HTML, CSS and JavaScript using the . Create cross-platform graphical user interfaces.|[:fontawesome-solid-file-pdf: HTMLRenderer User Guide](https://docs.dyalog.com/latest/HTMLRenderer%20User%20Guide.pdf)<br>[:material-web: HTMLRenderer User Guide](https://docs.dyalog.com/latest/HTMLRenderer%20User%20Guide.htm)|

## [Asynchronous programming](./asynchronous-programming.md)
|Tool|Description|Documentation|
|---|---|---|
|[Spawn](./asynchronous-programming.md#the-spawn-operator)|The Spawn operator `&` is a lightweight method for doing multiple time-consuming (but not compute-heavy) tasks in parallel.|[:material-web: Spawn](help.dyalog.com/latest/#Language/Primitive Operators/Spawn.htm)|
|[Futures and Isolates](./asynchronous-programming.md#futures-and-isolates)|Execute code in parallel CPU threads|[:fontawesome-solid-file-pdf: Parallel Language Features Guide](http://docs.dyalog.com/latest/Parallel%20Language%20Features.pdf)|
|.NET Tasks|The [.NET Task Class](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-6.0) can be used directly from Dyalog APL using the [.NET interface](./external-language-interfaces-standard-libraries.md#net).|[:fontawesome-solid-file-pdf: .NET Core Interface Guide](https://docs.dyalog.com/latest/dotNET%20Core%20Interface%20Guide.pdf)<br>[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows .NET Framework Interface Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20.NET%20Framework%20Interface%20Guide.pdf)<br>[:fontawesome-solid-file-pdf: Comparison of .NET Core/Framework Interfaces](https://docs.dyalog.com/latest/dotNET%20Differences.pdf)|

## Process management
|Tool|Description|Documentation|
|---|---|---|
|APLProcess|Launch and manage processes from within APL|[:fontawesome-solid-file-pdf: Code Libraries Reference Guide - Core Library](http://docs.dyalog.com/latest/Code%20Libraries%20Reference%20Guide.pdf)|
|aplservice.dws|Template for running a Dyalog application as a Microsoft Windows service|[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows Installation and Configuration Guide](http://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf#page=99)|

## APL system migration
|Tool|Description|Documentation|
|---|---|---|
|Workspace Transfer|Exchange code between APL systems|[:fontawesome-solid-file-pdf: APL Workspace Transfer Guide](http://docs.dyalog.com/latest/APL%20Workspace%20Transfer%20Guide.pdf)|
|[:fontawesome-brands-github: APLX](https://github.com/Dyalog/aplx)|Tools to help migrate from APLX to Dyalog|[:fontawesome-solid-file-pdf: APL Workspace Transfer Guide](http://docs.dyalog.com/latest/APL%20Workspace%20Transfer%20Guide.pdf)|
