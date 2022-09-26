# Application Development
Dyalog's Integrated Development Environments allow you to interactively use APL to develop and debug applications.

On all platforms, Dyalog includes an Integrated Development Environment (IDE) to enable the interactive use of the APL notation to explore data, discover algorithms and create solutions. Using the IDE, the user can create an application through experimentation and easily diagnose problems, resolve issues and resume work. The IDE provides editors for functions and classes, and a tracer which allows the setting of break points, watch points, and full edit-and-resume capabilities.

The advanced user can enhance the IDE through User Commands. As part of the standard offering, Dyalog provides user commands that can, for example, interface to external source code management systems and search, replace and refactor code in the active workspace or in external code; you can further extend the IDE by implementing your own user commands.

## Remote IDE (RIDE)
The RIDE is a cross-platform, graphical development environment capable of producing a rich user experience on a variety of platforms. It can be run on macOS, Linux and Microsoft Windows, and can be used from any one of these platforms as a front end for Dyalog versions from 14.1 onwards. The RIDE and connected Dyalog engines do not need to be running on the same device, the same type of device or even on the same continent. From Dyalog version 17.0, the RIDE does not even need to be installed on client machines; if it is installed on the machine where the interpreter is running, then the interpreter can be configured to act as a web server and provide remote debugging or interaction through any compatible web browser.

[:material-web: RIDE User Guide](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf)

[:fontawesome-brands-github: RIDE project on GitHub](http://github.com/Dyalog/ride)

## Dyalog IDE for Microsoft Windows
The RIDE is now the recommended IDE for macOS, AIX and Linux users. However, our native Microsoft Windows development environment remains the richest environment for the development of APL applications. Over the years, the Windows IDE has taken advantage of the Windows GUI to provide a Workspace Explorer, integrated search and replace tools, a language bar, tools for debugging GUI applications, an editor for nested arrays and integrated charting of data. Until the RIDE catches up, the classical Windows IDE is expected to remain the tool of choice for pure Windows development.

## Text-based (TTY) IDE
The original interface to Dyalog is a UNIX (or VT-100) style terminal session. Despite only having a fixed-size screen full of characters, this interface does provide all of the interactive functionality mentioned in the introduction. We will continue to provide this interface for use in situations where no GUI is available or where developers prefer the retro look!

## Deploy with Docker containers
Containers provides a consistent environment across different machines and operating systems. The effect is similar to that of virtual machines, but more lightweight and efficient.

<img style="width:15%; float:right;" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" />

With Docker containers you can:

- deploy easily to desktop, servers or in the cloud.
- package software and its dependencies in a standardised way.
- test your application in an environment similar to that in which it will be deployed.
- have your users obtain your software and its dependencies, ready to run, with a single command.
- deploy your application to the cloud and scale it easily with systems such as [kubernetes](https://kubernetes.io/) to meet demand as needed.

Read [the docker website](https://www.docker.com/resources/what-container/) to learn more about Docker containers and images.

Dyalog provides pre-made containers for:

- [The Dyalog Interpreter](https://hub.docker.com/r/dyalog/dyalog)
- [The Jarvis web service framework](https://hub.docker.com/r/dyalog/jarvis)
- [Dyalog Jupyter Notebooks](https://hub.docker.com/r/dyalog/jupyter)

Including support for interactive debugging using the [Remote IDE](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf).

```shell
docker run -e RIDE_INIT=serve:*:4502 -p 4502:4502 dyalog/dyalog
```

Access from RIDE in a web browser:

```APL
docker run -e RIDE_INIT=http:*:8888 -p 8888:8888 dyalog/dyalog
```

<div id="videos">
<style>
	#videos {
		display: flex;
		text-align: center;
	}
</style>

<figure>
	<a href="https://dyalog.tv/Dyalog20/?v=DeNkIYRehSs"><img src="https://img.youtube.com/vi/DeNkIYRehSs/0.jpg">
	<figcaption>
		Dyalog 20: Dyalog's Docker Containers <a target="_blank" rel="noopener noreferrer" href="https://www.dyalog.com/uploads/conference/dyalog20/presentations/D08_Dyalog_Docker_Containers.pdf">(slides PDF)</a>
	</figcaption>
	</a>
</figure>

<figure>
	<a href="https://dyalog.tv/Dyalog20/?v=DeNkIYRehSs"><img src="https://img.youtube.com/vi/KKJMeGAWGaE/0.jpg">
	<figcaption>
		Dyalog Webinars: Microservices in Dyalog APL
	</figcaption>
	</a>
</figure>

</div>

