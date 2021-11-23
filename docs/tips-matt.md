# Tips
These tips have been suggested by users as useful for newcomers. To suggest a tip or tell us something you wish you'd known when you first started, send an email to [tips@dyalog.com](mailto:tips@dyalog.com) for consideration for inclusion on this page.

## Getting Help
Place the cursor on a symbol or other built-in and press <kbd>F1</kbd> to go straight to the help page for it.

The `]Help` user command will take you to the online documentation.

## Editing
Try the `F1` tip above for `)ED` to learn how to quickly create new items of various types.

Use <kbd>Shift</kbd>+<kbd>Enter</kbd> to edit a name.

`)ED "file:///path/file.ext"` lets you edit plain-text files, and upon closing, APL will ask you how to use the content.

You can load APL functions/operators/objects from plain-text files with `2⎕FIX'file:///path/file.ext'`

## Saving Your Work
... and picking up from where you left off.

If you enter `)OFF` then your session log is saved before APL closes, so you can simply scroll up when you're ready to continue.

If you enter `)CONTINUE` then your workspace is saved with a temporary name and you can get it back with `)LOAD CONTINUE`

## Debugging and Meta Information
Use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to trace into a function and execute it one line at a time.

Use <kbd>Shift</kbd>+<kbd>Enter</kbd> with the cursor on white space to edit a suspended function.

Get all the technical details of the last error or event with `⎕JSON⍠'Compact'0⊢⎕DMX` .

## Shortcuts
Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Backspace</kbd> and <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> to scroll backward and forwards in your input history. They can also be used as Undo and Redo in the editor.

Many built-in functionalities have neither menu items, nor keyboard shortcuts assigned by default. Go to&emsp;Options&thinsp;▸&thinsp;Configure&thinsp;▸&thinsp;Keyboard Shortcuts&emsp;in the IDE or click the keyboard icon (<img alt="mini keyboard logo" src="img/kbdmini.svg" width="15px">) in the RIDE to set up keyboard shortcuts.

In the Windows IDE, you can use the copy and paste buttons on the Object (not Edit!) tool bar to copy and paste tables as matrices, documents as vectors of character vectors, and images as bitmap objects.

User commands (e.g. `]Help`) and system commands (e.g. `)SAVE`) are case-insensitive.

## Display Forms
Turn boxing on to make the display of nested arrays more clear:
```APL
      ]Box on
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
      ]Box -trains=tree
Was -trains=box
      +⌿÷≢
  ┌─┼─┐
  ⌿ ÷ ≢
┌─┘    
+      
```
With the `fns` modifier, nested arrays will have boxed display even if they are printed to the session from within functions.
```APL
      PrintShape←{⍴⎕←⍵}
      PrintShape ⍳1 3
 1 1  1 2  1 3 
1 3
      ]Box -fns=on
Was -fns=off
      PrintShape ⍳1 3
┌───┬───┬───┐
│1 1│1 2│1 3│
└───┴───┴───┘
1 3
```
With the `style` modifier you can get a more verbose view including hints for axes and data types.
```APL
      ]Box -style=max
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
See all the options with `]Box -??`

`]Rows on -fold=3` will let you scroll horizontally and trim large outputs so they don't flood your screen vertically.

The above settings can be made permanent by saving your session:&emsp;Session&thinsp;▸&thinsp;Save&emsp;in the Microsoft Windows IDE or `2⎕NQ⎕SE'FileWrite'`

## Quick Utilities
`]Map` displays the content and structure of your workspace.

`]Plot data` will draw simple graphs of your data. See `]Plot -??` for details.

`]Open filename` opens a file in its default application.

`]CD dir` lets you change directory from inside APL.

In general, help for user commands can be found with `]Command -?`

Use `⎕SE.Dyalog.Utils.repObj myArray` to generate an expression for (almost) any given array.

Use the workspace explorer to see a tree view of your workspace. In the Windows IDE go to&emsp;Tools&thinsp;▸&thinsp;Explorer&hellip;&emsp;and in the RIDE go to&emsp;View&thinsp;▸&thinsp;Show Workspace Explorer.

## More Tips
APL has a thriving and enthusiastic community of users who are very happy to answer questions:

- Chat in [the APL Orchard](https://apl.wiki/APL_Orchard), a very active chat room
- Ask a question on [Stack Overflow](https://stackoverflow.com/questions/ask?tags=apl) or the [r/apljk](https://www.reddit.com/r/apljk/) subreddit
- Post in the [Dyalog Forums](https://forums.dyalog.com/)
- Dyalog social media: Twitter, Facebook, LinkedIn

Visit  to chat with friendly APLers and get more tips. 