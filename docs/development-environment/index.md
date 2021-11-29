# Development Environment
This is a guide to getting started with the Dyalog Integrated Development Environments on supported platforms. For help with the APL language, see [our language guide](/language/index.md).

Dyalog provides two [integrated development environments]() (IDEs). There is the Dyalog IDE for Microsoft Windows, and the Remote IDE or [(RIDE)]() for use on Linux and macOS.

This page talks about parts of the development environment common to both IDEs. While you do not need to know all of this to get started using APL to solve problems, it is useful to understand the terminology when you want to develop applications, ask for help or report issues.

## Basic layout
The basic layouts for both standard development environments are described in [section 2.2 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#first-contact).

## The session
This can refer to [the session log](#the-session-log), [the session object](#the-session-object) and [the session file](#the-session-file).

## The session log
This is a record of everything you have typed into the session and output from those expressions.

You can save this log as a **.dlf** file using **Session** → **Save As** on Windows, or with the following expression [obtained from APLcart](https://aplcart.info/?q=save%20session%20file#):

```APL
      {⍵ ⎕NPUT⍨⊂⎕SE⎕WG'Log'} '/path/to/file.dse'
```

The log file is updated when Dyalog closes. Delete the log file before opening Dyalog to start with a clean log file.

## The session object
The **session object** [[documentation](http://help.dyalog.com/latest/#UserGuide/The%20APL%20Environment/Session%20Object.htm)] (or **session namespace**), called `⎕SE`, is a special system object which is accessible from APL. It contains all of your settings for things like `]boxing` and [print width `⎕PW`](), as well as window and toolbar settings in the Windows IDE.

## The session file
This is a file with the extension **.dse**. It contains the value of a [session object](#the-session-object). You can use multiple session files to save separate configurations of your development environment.

The current session file location is the value of the [configuration paramter](http://help.dyalog.com/latest/#UserGuide/Installation%20and%20Configuration/Configuration%20Parameters/session_file.htm) `Session_File`.

```APL
      ]config Session_File
 Session_File  C:\Users\Dyalog\Documents\Dyalog APL-64 18.2 Unicode Files\def_uk.dse 
```

## The workspace explorer
This tool provides an overview of all of the names in your active workspace.