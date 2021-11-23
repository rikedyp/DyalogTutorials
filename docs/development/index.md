# The APL Working Environment
The vast majority of the time, we deal with simply our code and some data. Our code is mostly in the form of [functions](), while our data is typically [read in from files]().

There is a section in Mastering Dyalog APL which describes the [layouts of the different working environments](https://mastering.dyalog.com/Getting-Started.html#first-contact) available with Dyalog. Here we define the pieces of your workflow relating to the workspace and the session.

## The session
You will often see "*the session*" used to refer to both [the session log](#the-session-log) (where you enter expressions and see their output) and [the session file](#the-session-file) (where your IDE settings are stored).

## The session log
This is the space where you enter APL expressions and see their output. Input is preceded by a 6-space prompt, whereas output is returned flush to the left-hand side.

The location of the log file is a [configuration parameter]() called `Log_File`. You can view this using the `]Config` [user command]().

```APL
      ]Config Log_File MAXWS
 Log_File  C:\Users\rpark\Documents\Dyalog APL-64 18.2 Unicode Files\default.dlf 
 
      ⎕←2 ⎕NQ # 'GetEnvironment' 'Log_File'
C:\Users\dyalog\Documents\Dyalog APL-64 18.2 Unicode Files\default.dlf
```

## The session file

## The workspace

### Namespaces