# Helpful Tips

## Getting Help
Place the cursor on a symbol or other built-in and press <kbd>F1</kbd> to go straight to the help page for it.

## Editing
Try the `F1` tip above for `)ed` to learn how to quickly create new items of various types.

Use <kbd>Shift</kbd>+<kbd>Enter</kbd> to edit a name.

`)ed "file:///path/file.ext"` lets you edit plain-text files, and upon closing, APL will ask you how to use the content.

You can load APL functions/operators/objects from plain-text files with `2⎕FIX'file:///path/file.ext'`.

## Saving Your Work
... and picking up from where you left off.

If you enter `)off` then your session log is saved before APL closes, so you can simply scroll up when you're ready to continue.

If you enter `)continue` then your workspace is saved with a temporary name and you can get it back with `)load continue`.

## Debugging and Meta Information
Use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to trace into a function and execute it one line at a time.

Use <kbd>Shift</kbd>+<kbd>Enter</kbd> with the cursor on white space to edit a suspended function.

Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Backspace</kbd> and <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> to scroll backward and forwards in your input history. They can also be used as Undo and Redo in the editor.

Get all the technical details of the last error or event with `⎕JSON⍠'Compact'0⊢⎕DMX` .

`]map` displays the content and structure of your workspace.

## Shortcuts

Many built-in functionalities have neither menu items, nor keyboard shortcuts assigned by default. Go to Options▸Configure▸Keyboard Shorcuts in the IDE or click the keyboard icon (<img alt="mini keyboard logo" src="/img/kbdmini.svg" width="15px">) in RIDE to set up keyboard shortcuts.

In the Windows IDE, you can use the copy and paste buttons on the Object (not Edit!) tool bar to copy and paste tables as matrices, documents as vectors of character vectors, and images as bitmap objects.

## Quick utilities

`]plot data` will draw simple graphs of your data. See `]plot -??` for details.

`]open filename` opens a file in its default application.

`]cd dir` lets you change directory from inside APL.

## Display forms
Turn boxing on to make the display of nested arrays more clear:
```APL
      ]box on
Was OFF
      ⍳2 3
┌───┬───┬───┐
│1 1│1 2│1 3│
├───┼───┼───┤
│2 1│2 2│2 3│
└───┴───┴───┘
```
With the `trains` modifier, you can display [function trains](https://apl.wiki/Tacit_programming#Trains) with a tree structure:
```APL
      ]box -trains=tree
Was -trains=box
      +⌿÷≢
  ┌─┼─┐
  ⌿ ÷ ≢
┌─┘    
+      
```
With the `fns` modifier, nested arrays will have boxed display even if they are printed to the session from within functions.
```APL
      Print←{⎕←⍵}
      Print ⍳2 3
 1 1  1 2  1 3 
 2 1  2 2  2 3 
      ]box on -fns=on
Was ON -fns=off
      Print ⍳2 3
┌───┬───┬───┐
│1 1│1 2│1 3│
├───┼───┼───┤
│2 1│2 2│2 3│
└───┴───┴───┘
```
With the `style` modifier you can get a more verbose view including hints for axes and data types. See all the options with `]box -??` .
```APL
      ]box -style=max
┌→─────────────┐
│Was -style=min│
└──────────────┘
      ⊂'APL'
┌───────┐
│ ┌→──┐ │
│ │APL│ │
│ └───┘ │
└∊──────┘
```

`]rows on -fold=3` will let you scroll horizontally and trim large outputs so they don't flood your screen vertically.

The above settings can be made permanent by saving your session (Session▸Save in the Windows IDE or `2⎕NQ⎕SE'FileWrite'`)

In general, help for user commands can be found with `]command -?`.

Use `⎕SE.Dyalog.Utils.repObj myArray` to generate an expression for (almost) any given array.

## External tools
The `]APLcart` user command can be used to search [APLcart.info](https://aplcart.info) from within the session. 
For example:
```APL
      ]aplcart autosave workspace
X, Y, Z: any type array  M, N: numeric array  I, J: integer array  A, B: Boolean array  C, D: character array  f, g, h: function  ax: bracket axis  s: scalar  v: vector  m: matrix
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Cv{∇⌊⎕DL⍵⊣0#.⎕SAVE⍺}&Ns  Save workspace as Cv every Ns seconds                                                                                                                     
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Showing 1 of 1 matches  
```
You can [download the APLcart user command from GitHub](https://raw.githubusercontent.com/abrudz/aplcart/master/APLcart.dyalog).

The `]Get` tool is a general way to bring code or data into the workspace from your file system or the internet. You can [download the Get tool from GitHub](https://github.com/abrudz/get).