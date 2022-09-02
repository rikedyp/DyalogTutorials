# SQL Interface
SQAPL provides an interface to ODBC-compliant SQL databases including Oracle, Microsoft Access, MySQL and DB2. Even properly-formatted text and CSV (comma separated value) files can be accessed using SQAPL.

SQAPL contains functions to read, write and manage SQL databases. It is supported on all platforms, although some platforms could incur an additional licence fee for the server component of SQAPL.

For more information about using SQAPL, see the SQL Interface Guide.

For small amounts of data, it is usually quickest and easiest to use raw APL with arrays. Nested matrices offer a convenient format comparable to a spreadsheet (in fact, they can be directly imported from Excel or CSV files). Inverted tables take the idea of column store and implement them in APL for great search and retrieval performance.

For quick access to simply read data from or write data to a table, the functions `LoadSQL` and `SaveSQL` from the utility workspace `LOADDATA` may be all that you need.

```APL
      'LoadSQL' 'SaveSQL'⎕CY'LOADDATA'
      LoadSQL'NorthWind' 'products'
```

Using SQAPL, you can:
- Retrieve a list of available data sources, and connect to one or more of them.
- Query the database catalogue, to determine which tables, view and columns
exist in a data source.
- Prepare and then repeatedly execute SQL statements, or execute SQL
statements immediately without first preparing them. Multiple statements may
be active simultaneously.
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

## Get Started
SQAPL ships with Dyalog APL. Simply copy it into the active workspace to start using it:

```APL
'SQA'⎕CY'SQAPL
```

```APL
      ]names SQA
SQA.Apl2Scar      SQA.DefaultXlate  SQA.GetInfo       SQA.SetData       SQA.TypeInfo     
SQA.AplVersion    SQA.Describe      SQA.GetWarning    SQA.SetDelete     SQA.X            
SQA.BrowseConnect SQA.Do            SQA.Init          SQA.SetExec       SQA.buildcovers  
SQA.Cancel        SQA.Exec          SQA.NativeSQL     SQA.SetInsert     SQA.dxlate       
SQA.Close         SQA.ExecDirect    SQA.Parse         SQA.SetPrepare    SQA.⍙SQAPL       
SQA.Columns       SQA.ExecN         SQA.Prepare       SQA.SetUpdate     SQA.⍙SQAPL1      
SQA.Connect       SQA.Fetch         SQA.PutData       SQA.Tables        SQA.⍙SQAParse    
SQA.CursorName    SQA.FileVersion   SQA.Scar2Apl      SQA.Transact                       
SQA.DSN           SQA.GetData       SQA.SetColumns    SQA.Tree     
```


- who is it for?
- how do I get started?
- Basic use
- Integrating into my application

On Microsoft Windows, ... drivers

SQAPL on macOS is currently not supported.

On Linux