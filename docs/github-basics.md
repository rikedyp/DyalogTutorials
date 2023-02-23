# GitHub basics
Dyalog develops some tools using Git and hosts the source code and distributable packages using GitHub.

## Import directly to the workspace
If a tool is purely APL code - a workspace or APL text source files - then it may be possilbe to bring it directly into the workspace using the experimental `]Get` user command.

For example, to get the latest release of HttpCommand, navigate to the [HttpCommand releases page](https://github.com/Dyalog/HttpCommand/releases). Under **Assets**, *Right click* on **HttpCommand.dyalog** then click *Copy Link*. Then paste that link after `]Get` in the session and press <kbd>Enter</kbd>.

```APL
      ]Get https://github.com/Dyalog/HttpCommand/releases/download/v5.1.15/HttpCommand.dyalog
#.HttpCommand
      (HttpCommand.GetJSON 'GET' 'https://catfact.ninja/fact').Data.fact
Your cat's heart beats at a rate almost double that of yours, from 110-140 beats per minute.
```

See `]Get -?` for more information and examples.

## Using the latest development version
Where no release is available, or if you want to use the latest development version of a tool, you can download the tool code as a compressed (zipped) folder.

1. Open the project of interest.
1. Click on <img width="100px" src="../img/button_github_clone.jpg" alt="Clone or Download button" />
1. Click on the **Download ZIP** button in the dialog box that is displayed.

## Developing a tool
This is a very brief summary of the Fork and Pull Request collaborative development procedure - more thorough introductions to Git and GitHub are available:

- [W3Schools Git and GitHub introduction](https://www.w3schools.com/git/git_intro.asp)
- [GitHub Quickstart Hello World](https://docs.github.com/en/get-started/quickstart/hello-world)

Changes over time can be viewed on the GitHub page for the project. For example, the changes for library-conga can be viewed on [github.com/Dyalog/library-conga/commits/master](https://github.com/Dyalog/library-conga/commits/master).

To participate in the development of a tool, or to fix an issue that you've spotted:

1. Ensure that you have a GitHub account and are logged in.
1. Open the project of interest.
1. Click on <img width="50px" src="../img/button_github_fork.jpg" alt="Fork button" />
1. This takes a copy of the project to your account for you to work on. We recommend that you use a tool such as [Atlassian SourceTree](https://www.sourcetreeapp.com/) (unless you are already a seasoned Git user, in which case you already know what to do) – and "clone" the repository from there.
1. Once you have made changes to your fork of the project, click on <img width="50px" src="../img/button_github_pullrequest.jpg" alt="Pull request button" /> – this informs us that your changes are ready for us to review and include in the project.

If you have any issues whilst trying to make updates, please contact us – we're happy to talk you through the necessary process.
