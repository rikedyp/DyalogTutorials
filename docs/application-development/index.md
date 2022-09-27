# Tools and Interface Catalogue
Repositories in [:fontawesome-brands-github: Dyalog](https://github.com/dyalog) are maintained and supported by Dyalog. Other repositories are maintained by their respective owners.

## Application Development and Deployment
|Tool|Description|Documentation|
|---|---|---|
|[Windows IDE](./application-development.md#dyalog-ide-for-microsoft-windows)|Write, run and debug Dyalog applications on Microsoft Windows|[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows UI Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20UI%20Guide.pdf)|
|[RIDE](./application-development.md#remote-ide-ride)|The recommended IDE for macOS and Linux.<br>Remotely connect to an interpreter over a network on any platform|[:fontawesome-solid-file-pdf: RIDE User Guide](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf)|
|Link|Save APL source in text files to integrate with source code management software|[:material-web: Link User Guide](https://dyalog.github.io/link)|
|[Docker](./application-development.md#deploy-with-docker-containers)|Run Dyalog and deploy applications using Docker containers|[:octicons-link-external-16: Dyalog on Docker](https://hub.docker.com/r/dyalog/dyalog)|

## Process management and deployment
|Tool|Description|Documentation|
|---|---|---|
|APLProcess|Launch and manage processes from within APL|[:fontawesome-solid-file-pdf: Code Libraries Reference Guide - Core Library](http://docs.dyalog.com/latest/Code%20Libraries%20Reference%20Guide.pdf)|
|aplservice.dws|Template for running a Dyalog application as a Microsoft Windows service|[:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows Installation and Configuration Guide](http://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf#page=99)|
|Futures and Isolates|Execute code in parallel CPU threads|[:fontawesome-solid-file-pdf: Parallel Language Features Guide](http://docs.dyalog.com/latest/Parallel%20Language%20Features.pdf)|

## Web communications
|Tool|Description|Documentation|
|---|---|---|
|[Jarvis](./web-communications.md#jarvis-web-service-framework)|Expose APL functions as a JSON or REST web services|
|[HttpCommand](./web-communications.md#httpcommand)|Make HTTP requests to access web data and services|[:material-web: HttpCommand User Guide](https://dyalog.github.io/HttpCommand/)|
|HttpUtils|Compose and manipulate HTTP messages|[:fontawesome-solid-file-pdf: Code Libraries Reference Guide](http://docs.dyalog.com/latest/Code%20Libraries%20Reference%20Guide.pdf)|
|[Conga](./web-communications.md#conga-tcp-wrapper)|TCP/IP communications library|[:fontawesome-solid-file-pdf: Conga User Guide](http://docs.dyalog.com/latest/Conga%20User%20Guide.pdf)|
|FtpClient|A passive-mode FTP client|
|aplssh|Start and manage SSH sessions from APL using libssh2|[:fontawesome-brands-github: Dyalog/aplssh](https://github.com/Dyalog/aplssh)|
|SAWS|SOAP-based Web Service framework|[:fontawesome-solid-file-pdf: SAWS User Guide](http://docs.dyalog.com/latest/SAWS%20User%20Guide.pdf)|

## File handling and data processing
|Tool|Description|Documentation|
|---|---|---|
|loaddata.dws|Example workspace with functions to load and save data from SQL, CSV, Excel and XML data sources|
|[SQAPL](./file-handling-data-processing.md#sql-interface)|Interface to ODBC data sources (SQL databases)|[:fontawesome-solid-file-pdf: SQL Interface Guide](http://docs.dyalog.com/latest/SQL%20Interface%20Guide.pdf)|
|vecdb|A very simple column-store management system|[:fontawesome-brands-github: Dyalog/vecdb](https://github.com/Dyalog/vecdb)|
|[⎕CSV](./file-handling-data-processing.md#csv)|Read data from CSV files and text as APL arrays; write APL arrays to CSV format and files|[:material-web: Comma Separated Values](http://help.dyalog.com/latest/#Language/System%20Functions/csv.htm)|
|[⎕JSON](./file-handling-data-processing.md#json)|Convert between APL namespaces and JSON text|[:material-web: JSON Convert](http://help.dyalog.com/latest/#Language/System%20Functions/json.htm)|
|[⎕XML](./file-handling-data-processing.md#xml)|Convert between a special APL array format and XML text|[:material-web: XML Convert](http://help.dyalog.com/latest/#Language/System%20Functions/xml.htm)|
|[⎕MAP](./file-handling-data-processing.md#map)|Treat files on disk as APL arrays to avoid importing data into the workspace|[:material-web: Map File](http://help.dyalog.com/latest/#Language/System%20Functions/map.htm)|

## External language interfaces and standard libraries
|Tool|Description|Documentation|
|---|---|---|
|[⎕NA](./external-language-interfaces-standard-libraries.md#compiled-libraries-interface)|Interface to compiled libraries (.dll, .so, .dylib, .a)|
|RSConnect|R language interface with Rserve|[:fontawesome-brands-github: kimmolinna/rsconnect](https://github.com/kimmolinna/rsconnect)|
|Math|Interface to LAPACK and FFTW to compute eigenvalues, eigenvectors and Fast Fourier Transforms|[:fontawesome-solid-file-pdf: Code Libraries Reference Guide - Development tools](http://docs.dyalog.com/latest/Code%20Libraries%20Reference%20Guide.pdf#page=18)|
|Py'n'APL|Access python code from APL and vice versa|[:fontawesome-brands-github: Dyalog/pynapl](https://github.com/Dyalog/pynapl)|
|.NET|
|.NET|Previously .NET Core|
|Microsoft .NET Framework|
|Microsoft OLE|Control Microsoft Office and other applications from Dyalog|

## GUI and graphics
|Tool|Description|Documentation|
|---|---|---|
|DUI|
|EasyGUI|
|Chart Wizard|
|Graph Plotting Library|
|Selenium|

## APL system migration
|Tool|Description|Documentation|
|---|---|---|
|Workspace Transfer|
|APLX|
