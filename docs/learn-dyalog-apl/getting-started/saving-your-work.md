# Saving Your Work

## Link
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

## Save Without Closing
By default, the only way to save changes made using the editor is to close the editor using the <kbd>Esc</kbd> key. However, you can set up a keyboard shortcut to save your changes without closing the editor. 

1. 
	* In the Microsoft Windows IDE, go to Options▸Configure▸Keyboard Shorcuts. 
	* In the RIDE, click the keyboard icon (<img alt="mini keyboard logo" src="/img/kbdmini.svg" width="15px">) at the top-right of the language bar. 
1. Look (or search in the RIDE) for the code `FX` and set it to a shortcut of your choosing.

## Workspaces
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