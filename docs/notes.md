## Listing and Clearing Names
In APL, arrays are the first class entities, but they are not the only things that can be named. In Dyalog there are many [name classes](http://help.dyalog.com/latest/#Language/System%20Functions/nc.htm), but in general we refer to any named entity as a name, and together the functions, variables, operators, namespaces, classes, instances etc. are just called names.

You can clear the workspace using `)CLEAR`. An unsaved workspace will be lost, but a [file system link](#link) will be broken such that the files are still in tact.

## Creating Functions and Operators
With your cursor highlighting a name, press <kbd>Shift</kbd>+<kbd>Enter</kbd> to open the editor.

While editing, you can use the forward-slash `/` on the [numpad](https://en.wikipedia.org/wiki/Numeric_keypad) to automatically format your code.

### Tradfns
Traditional functions and operators, called "tradfns" (trad-funs with a short "u" sound) and "tradops", have a header which follows a similar syntax to how they are called.
```APL
 result←{left}Tradfn right   ⍝ Optional left argument denoted by {}
 :If 0=⎕NC'left'
     result←right
 :Else
     result←left right
 :EndIf
```

### Dfns
Dfns and dops use `⍺` to refer to their left argument, and `⍵` to refer to their right argument. Dops use `⍺⍺` to refer to their left operand, and `⍵⍵` to refer to their right operand.
```APL
Dfn ← {
   ⍺ ← 'default'   ⍝ Assign ⍺ to create a default left argument
   ⍺ ⍵
}
```

### Tacit
Tacit [trains](https://apl.wiki/Tacit_programming#Trains) and [derived functions](https://apl.wiki/Tacit_programming#Derived_functions) do not explicitly refer to their arguments. However, they can still be assigned to names and used just like any other functions.
```APL
      Mean ← +⌿÷≢
```

## Saving Your Work

### Link
The system called [Link](https://github.com/dyalog/link) can be used to create a bi-directional link between the active workspace and a folder on the file system. In the session:
```APL
      ]LINK.Create # \d\tmp   ⍝ ]Create can be used as a shortcut
Linked: # ←→ C:\d\tmp
```
Only [names]() which are created in the editor are automatically updated on the file system. Any name can be added using `]LINK.Add`, for example:
```APL
      MyDfn ← {⍺+⍵}
      ]Add MyDfn
Added: #.MyDfn
```
With Link, any changes fixed using the editor will be reflected on the file system. You can also use a text editor to make changes, and those changes will be reflected in the workspace.

> Note: Link cannot save tacit functions. These must be wrapped inside dfns, tradfns or scripted namespaces to be used with Link.

### Save Without Closing
By default, the only way to save changes made using the editor is to close the editor using the <kbd>Esc</kbd> key. However, you can set up a keyboard shortcut to save your changes without closing the editor. 

1. 
	* In the Microsoft Windows IDE, go to Options▸Configure▸Keyboard Shorcuts. 
	* In the RIDE, click the keyboard icon (<img alt="mini keyboard logo" src="/img/kbdmini.svg" width="15px">) at the top-right of the language bar. 
1. Look (or search in the RIDE) for the code `FX` and set it to a shortcut of your choosing.

### Workspaces
Link is the recommended method to keep work saved as text files, as it allows easy integration with [version control software](https://betterexplained.com/articles/a-visual-guide-to-version-control/) (e.g. Git, SVN).

However, we continue to maintain and support binary `.dws` workspace files. In particular, these can still be useful for deploying your application as a single file.

Binary `.dws` workspace files contain everything in your workspace - this includes all named entities e.g. variables, functions, classes and namespaces as well as system variable settings such as [`⎕IO`](https://aplwiki.com/wiki/Index_origin), [`⎕ML`](https://aplwiki.com/wiki/Migration_level) and other [quad names](https://aplwiki.com/wiki/Quad_name).

To save your workspace, simply do:
```APL
      )SAVE /path/to/my/workspace.dws
```

Loading your work again later is as simple as:
```APL
      )LOAD /path/to/my/workspace.dws
```

> Note: `)LOAD`-ing a workspace overwrites everything in the current workspace.