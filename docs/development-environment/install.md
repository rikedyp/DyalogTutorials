# Installation
Dyalog provides installation packages for popular operating systems which can be [downloaded for free](https://www.dyalog.com/download-zone.htm).

## Microsoft Windows
This is a quick overview of the installation process. For more information about installed components, registry entries and configuration etc., see the [Dyalog for Microsoft Windows Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf).

### Download Dyalog and Begin Installation
1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and **download** the installation package **windows_64_&lt;version&gt;_unicode.zip**.

2. Unzip the installation package and double click on **setup.exe**.

3. Restart the installer with **administrator privileges**.

	![Restart the installer with administrator privileges](/img/admin_restart.png)

### Choose your APL keyboard.
**Untick** the **Dyalog APL IME for 64 bit Windows** checkbox unless you want the default Dyalog keyboard layout.

By default, Dyalog's Input Method Editor (IME) uses <kbd>Ctrl</kbd> to enter APL symbols. It does not prevent copy and paste shortcuts, but some prefer to use a different method. 

If you would like an alternative input method (such as using the <kbd>AltGr</kbd> key, backtick <kbd>\`</kbd> prefix or composition input (<kbd>=</kbd> <kbd>/</kbd> <kbd>Tab</kbd> gives `≠` on [tryapl](https://tryapl.org)), see [section 2.2.5 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#typing-apl-glyphs).

!!!Note
	Once Dyalog is installed, you use <kbd>⊞ Win</kbd> + <kbd>Spacebar</kbd> to cycle between available keyboard layouts.
	
	![Choose keyboard layouts on Windows](/img/win_languages_dyalog_ime.png)

### Finish Installation

1. Click on **Default Install**.

2. **Reboot** your PC.

## macOS
This is a quick overview of the installation process. For more information, see the [Dyalog for macOS Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf).

### Download and Install Dyalog
1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and download the installation package for macOS.

2. Double click on the **mac_64_&lt;version&gt;_unicode.pkg** file.

3. Follow the instructions in the **Dyalog Installer** window.

4. Close the Dyalog Installer window.

	Dyalog should now be installed in your **Applications** folder.

### Choose your APL keyboard.
Keyboard layouts and fonts for macOS are described [on the dfns website](https://dfns.dyalog.com/n_kbmac.htm).

## Linux
This is a quick overview of the installation process. For more information, see the [Dyalog for UNIX Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20UNIX%20Installation%20and%20Configuration%20Guide.pdf).

### Download and Install Dyalog

Installation **.rpm** and **.deb** files are provided [from the Dyalog website](https://www.dyalog.com/download-zone.htm).

Use your distribution's package manager to install Dyalog.

Usually, you can install from the terminal:

```sh
sudo rpm -i linux_64_<version>_unicode.x86_64.rpm
```

```sh
sudo dpkg -i linux_64_<version>_unicode.x86_64.deb
```

### Choose your APL keyboard

By default, Dyalog uses the Meta ("Windows" <kbd>⊞ Win</kbd>) key for entering APL symbols on Linux.

Dyalog will override [XKB](https://www.x.org/wiki/XKB/) configuration at startup by default. You can prevent this with a startup option.

    dyalog -nokbd

APL keyboard layouts come with most Linux distributions by default, but must be enabled. Follow the [instructions on the APL Wiki](https://aplwiki.com/wiki/Typing_glyphs_on_Linux) for your desktop environment.

### Install the RIDE

While Dyalog does come with a bare-bones terminal interface, it is recommended to use the [Remote IDE](https://github.com/Dyalog/ride). Download the [latest release](https://github.com/Dyalog/ride/releases/latest) from GitHub and install it as above.

### Create an APL session startup script

By default, users must "start" an APL session from the main RIDE configuration window as described in [section 2.1.1 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#the-ride-working-environment).

The following script can be used to launch RIDE and immediately connect to a new Dyalog instance.

    #!/usr/bin/env sh
    env RIDE_CONNECT=localhost:4502 ride &
    dyalog +s -q RIDE_INIT=SERVE:*:4502

To prevent Dyalog taking over the keyboard layout at startup, add `-nokbd` to the 3rd line in the script.

## Dyalog installation directory
The main Dyalog installation directory is returned by the expression:

```APL
      ⎕←2 ⎕NQ # 'GetEnvironment' 'DYALOG'
C:\Program Files\Dyalog\Dyalog APL-64 18.2 Unicode
```