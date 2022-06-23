# Deploy with Docker containers
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
