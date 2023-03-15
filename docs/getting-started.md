# Getting started with Dyalog APL
You do not need to install anything to get started using and learning the APL language.

You can get started with the materials listed here using the [TryAPL online interpreter](https://tryapl.org). 

## Quick Start
If you do decide to install Dyalog, the following instructions should get you up and running with a standard workflow.

<span markdown style="color: red;">:fontawesome-brands-youtube:</span> [Editing and Debugging Dyalog APL](https://youtu.be/0CYReeNue6A).

When you start Dyalog, you are met with a blank area with a text cursor. This is the session window. You can input APL expressions (usually indented by 6 spaces) and press enter to see their results:

```APL
      1+2
3
```

To create a function you can use: the `⎕ED` system command; double click on a name; or press <kbd>Shift+Enter</kbd> with the cursor on a name.

```APL
⎕ED'MyFunction'
```

You can now write a tradfn or dfn ([APL Course: User-defined Functions](https://course.dyalog.com/user-defined-functions)) in the editor.

Pressing <kbd>Esc</kbd> will close the editor and save your changes in the active workspace. The active workspace is the currently running set of code - functions and variables etc.

**Save your work:**

Create a link between the active workspace and a folder on the file system:

```APL
      ]Create # /tmp/MyProject
Linked: # ←→ C:\tmp\MyProject [directory was created]
```

Now, when you make a change using the editor (after closing it with <kbd>Esc</kbd>), a file in that folder will be created or updated.

For larger applications or complex workflows, you might want to learn about [projects and packages](./application-development/projects-and-packages.md).

## Tips
Check out our [page of tips](./tips.md) suggested by users.

## New to programming
The book [Mastering Dyalog APL](https://mastering.dyalog.com) by Bernard Legrand is aimed at new developers and is suitable for people with no prior programming experience. However, it is also a fairly comprehensive guide to the many aspects of both the APL language and the Dyalog development environments, and so intermediate and advanced users will still find it valuable.

The book was originally published in 2009, and although it is being re-worked as an e-book to include chapters on recent features, the original is still [available as a physical book](https://www.dyalog.com/mastering-dyalog-apl.htm).

## New to APL
If you are already familiar with a programming language or two, the book [**Learning APL**](https://xpqz.github.io/learnapl) by Stefan Kruger offers an excellent introduction to modern APL for experienced programmers.

## Guided problem sets
Our [APL Course](https://course.dyalog.com) is a set of guided problem sets with examples and explained solutions.

It aims to cover the majority of language constructs and is broader in scope than [**Learning APL**](#new-to-apl), but not as comprehensive as [Mastering Dyalog APL](#new-to-programming).

## Resources
- Perhaps some info from https://www.dyalog.com/getting-started.htm
- https://www.dyalog.com/getting-started/tips.htm (less hidden!)
- Suggested learning route a la https://github.com/openstenoproject/plover/wiki/Learning-Stenography
