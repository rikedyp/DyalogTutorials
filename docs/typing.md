# Typing APL Symbols

!!!Warning "EARLY DRAFT"

The following are brief instructions for setting up APL keyboards on supported platforms. More detailed information is available in [chapter 2 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#typing-apl-glyphs).

## The Dyalog APL keyboard layout

Dyalog APL's standard US English layout is as follows:
<pre class="language-APL" id="kbd-en-US">
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬─────────┐
│~ ⌺ │! ⌶ │@ ⍫ │# ⍒ │$ ⍋ │% ⌽ │^ ⍉ │& ⊖ │* ⍟ │( ⍱ │) ⍲ │_ ! │+ ⌹ │Backspace│
│` ⋄ │1 ¨ │2 ¯ │3 < │4 ≤ │5 = │6 ≥ │7 > │8 ≠ │9 ∨ │0 ∧ │- × │= ÷ │         │
├────┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬──────┤
│Tab    │Q   │W   │E ⍷ │R   │T ⍨ │Y   │U   │I ⍸ │O ⍥ │P ⍣ │{ ⍞ │} ⍬ │| ⊣   │
│       │q ? │w ⍵ │e ∊ │r ⍴ │t ~ │y ↑ │u ↓ │i ⍳ │o ○ │p * │[ ← │] → │\ ⊢   │
├───────┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴┬───┴──────┤
│Caps    │A   │S   │D   │F   │G   │H   │J ⍤ │K ⌸ │L ⌷ │: ≡ │" ≢ │Enter     │
│Lock    │a ⍺ │s ⌈ │d ⌊ │f _ │g ∇ │h ∆ │j ∘ │k ' │l ⎕ │; ⍎ │' ⍕ │          │
├────────┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┴──────────┤
│Shift      │Z ⊆ │X   │C   │V   │B   │N   │M   │< ⍪ │> ⍙ │? ⍠ │Shift       │
│           │z ⊂ │x ⊃ │c ∩ │v ∪ │b ⊥ │n ⊤ │m | │, ⍝ │. ⍀ │/ ⌿ │            │
└───────────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────────────┘
</pre>
Several international keyboard layouts exist with charts available from [the dfns website](https://dfns.dyalog.com/n_keyboards.htm).

## Microsoft Windows
If you select "Install the Dyalog APL IME for 64 bit Windows" during [installation](./install.md#microsoft-windows), you will have an additional keyboard input method with the ability to type APL symbols by holding the <kbd>Ctrl</kbd> key. 

In Windows 10, you can use <kbd>⊞ Win</kbd>+<kbd>Space</kbd> to choose between available keyboard layouts.

!!!Note "Note (May 2022)"
	If you are using Microsoft Windows 11, then you might find that the standard Dyalog IME does not work with UWP (Universal Windows Platform) applications such as Notepad. We are working on both immediate and long-term solutions to meet our customers' wide range of needs.

By default, Dyalog's Input Method Editor (IME) uses <kbd>Ctrl</kbd> to enter APL symbols. 

If you would like an alternative input method, such as using the <kbd>AltGr</kbd> shifting key or backtick <kbd>\`</kbd> prefix similar to [tryapl](https://tryapl.org), see [section 2.2.5 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#typing-apl-glyphs).

## Linux (including Raspberry Pi) and macOS
See [the APL Wiki page about Typing Glyphs on Linux](https://aplwiki.com/wiki/Typing_glyphs_on_Linux).

## macOS
!!!Note
	When installing Dyalog for macOS, the font and keyboard mappings are automatically installed and enabled for use in a Dyalog Session – the following allows use of Dyalog glyphs both outside and inside a Dyalog Session (for example, in email).

To enable these keyboard key mappings on macOS, the appropriate DyalogAlt.keylayout and DyalogAlt.icns files for your locale must be downloaded and installed in the /Library/Keyboard Layouts directory. To download a zip file containing these files, click on the relevant flag (if the country you require is not shown, then please <a title="contact us" href="mailto:support@dyalog.com?subject=OS%20X%20DyalogAlt.keylayout%20support">e-mail us</a> and we'll see whether we can create the relevant files for you):

### <kbd>alt</kbd> shifting key:
While <kbd>alt</kbd> is held, pressing another key may produce an APL glyph. For example, <kbd>alt + a</kbd> makes `⍺`.

[:flag_dk: Danish](https://www.dyalog.com/uploads/files/download.php?file=DyalogAltDK.zip)  
[:flag_fi: Finnish](https://www.dyalog.com/uploads/files/download.php?file=DyalogAltFI.zip)  
[:flag_it: Italian](https://www.dyalog.com/uploads/files/download.php?file=DyalogAltIT.zip)

### Prefix keys
Press the specified key followed by another key to produce an APL glyph. For example, <kbd>§</kbd> then <kbd>a</kbd> makes `⍺` on DyalogSection layouts.
See [the APL Wiki section about Typing Glyphs on macOS](https://aplwiki.com/wiki/Typing_glyphs#macOS).

Keyboard layouts and fonts for macOS are described [on the dfns website](https://dfns.dyalog.com/n_kbmac.htm).

## Troubleshooting
### Cannot type APL symbols in RIDE on Linux
RIDE is not yet compatible with the APL keyboard system on Wayland. However, it has its own mechanism for typing APL symbols using the prefix method.

One workaround is to start GNOME in X11 mode instead of Wayland.

The XCompose-based prefix keyboard will work in RIDE on Wayland.
### Cannot type APL symbols in VSCode on Linux
