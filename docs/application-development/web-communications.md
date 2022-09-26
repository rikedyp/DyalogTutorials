# Web communications

## HttpCommand 
[:material-web: HttpCommand online documentation](https://dyalog.github.io/HttpCommand/)

HttpCommand is a utility is designed to make it easy for the APL user to send requests to and receive responses from HTTP servers like web servers and web services.  
HttpCommand is included with Dyalog APL as a loadable utility.

Below is a simple example of making a GET request to a web API:

```APL
      ]Get HttpCommand   ⍝ Use ]Load prior to Dyalog version 18.2
#.HttpCommand
      response ← HttpCommand.Get'https://catfact.ninja/fact'
      response.(HttpStatus HttpMessage)
┌───┬──┐
│200│OK│
└───┴──┘
      response.Data
{"fact":"In an average year, cat owners in the United States spend over $2 billion on cat food.","length":86}
```

## Jarvis Web Service Framework
[:material-web: Jarvis online documentation](https://github.com/Dyalog/Jarvis/wiki)

Jarvis allows you to serve up a single APL function or an entire application, as a an HTTP/JSON or RESTful web service. Jarvis automatically converts payloads between JSON and APL arrays, can serve static HTTP resources and integrates WebSocket support with publish/subscribe capability. Jarvis can maintain application session state, with user validation based on HTTP Basic authentication, custom authentication, and/or client-side certificates.

## TCP Client and Server Library (Conga)
[:fontawesome-solid-file-pdf: Conga user guide](https://docs.dyalog.com/latest/Conga%20User%20Guide.pdf)

Conga provides network communication capabilities for APL applications. Higher-level tools like Jarvis, MiServer, HttpCommand and FtpClient are all built upon Conga, which provides fundamental TCP client and server APIs, with optional web socket support.

In addition to raw or text formats suitable for communication with non-APL peers, Conga provides a protocol layer that can transmit APL arrays in binary format between two APL interpreters running Conga.

Conga embeds GnuTLS and supports secure and encrypted communications. APL client and server applications can require and validate peer certificate information. There is also support for Integrated Windows Authentication, enabling identification of users who already logged into a domain controller without re-entering credentials.

## APLSSH
[:fontawesome-brands-github: github.com/Dyalog/aplssh](https://github.com/Dyalog/aplssh)

This is a wrapper around the **libssh2** library. Currently, it only exposes a small fraction of its functionality. It can execute remote commands, and read and write files.


## Using Microsoft .NET
Dyalog can be used with industry-standard Microsoft components in the same way as most other programming languages that integrate with Microsoft .NET:

- Dyalog can be used as an ASP.NET scripting language to build web pages under Microsoft IIS.
- SharePoint WebParts can be developed using Dyalog as a .NET programming language.
- Microsoft IIS can also serve up Web Services implemented in Dyalog.

See chapters 6 through 9 of the [:fontawesome-solid-file-pdf: Dyalog for Microsoft Windows .NET Interface Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20.NET%20Framework%20Interface%20Guide.pdf)

Dyalog can also be used to power web solutions more indirectly, by acting as a participant in message queuing systems like Windows Communications Foundation / MSMQ – or any tool that is based on Microsoft .NET.

## Conga TCP Wrapper
[:fontawesome-solid-file-pdf: Conga User Guide](http://docs.dyalog.com/latest/Conga%20User%20Guide.pdf)

Provides wrappers for listening (server) and client sockets, which can, optionally, be made secure using TLS. Sockets can be used to transmit either raw byte streams or entire APL arrays from one process to another. Code samples are provided, showing how to build web servers and clients, a simple FTP client and server and an RPC framework.