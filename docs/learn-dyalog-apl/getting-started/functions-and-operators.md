# Creating Functions and Operators
With your cursor highlighting a name, press <kbd>Shift</kbd>+<kbd>Enter</kbd> to open the editor.

While editing, you can use the forward-slash `/` on the [numpad](https://en.wikipedia.org/wiki/Numeric_keypad) to automatically format your code.

## Tradfns
Traditional functions and operators, called "tradfns" (trad-funs with a short "u" sound) and "tradops", have a header which follows a similar syntax to how they are called.
```APL
 result←{left}Tradfn right   ⍝ Optional left argument denoted by {}
 :If 0=⎕NC'left'
     result←right
 :Else
     result←left right
 :EndIf
```

## Dfns
Dfns and dops use `⍺` to refer to their left argument, and `⍵` to refer to their right argument. Dops use `⍺⍺` to refer to their left operand, and `⍵⍵` to refer to their right operand.
```APL
Dfn ← {
   ⍺ ← 'default'   ⍝ Assign ⍺ to create a default left argument
   ⍺ ⍵
}
```

## Tacit
Tacit [trains](https://apl.wiki/Tacit_programming#Trains) and [derived functions](https://apl.wiki/Tacit_programming#Derived_functions) do not explicitly refer to their arguments. However, they can still be assigned to names and used just like any other functions.
```APL
      Mean ← +⌿÷≢
```