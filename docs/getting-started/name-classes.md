# Listing and Clearing Names
In APL, arrays are the first class entities, but they are not the only things that can be named. In Dyalog there are many [name classes](http://help.dyalog.com/latest/#Language/System%20Functions/nc.htm), but in general we refer to any named entity as a name, and together the functions, variables, operators, namespaces, classes, instances etc. are just called names.

You can clear the workspace using `)CLEAR`. An unsaved workspace will be lost, but a [file system link](#link) will be broken such that the files are still in tact.
