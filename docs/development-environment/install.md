# Installation
Dyalog provides installation packages for popular operating systems which can be [downloaded for free](https://www.dyalog.com/download-zone.htm).

## Microsoft Windows
This is a quick overview of the installation process. Full installation instructions are in the file `setup_readme.htm` included in the install package `windows_64_<version>_unicode.zip` which can be downloaded [from the Dyalog website](https://www.dyalog.com/download-zone.htm).

For more information about installed components, registry entries and configuration etc. see the [Dyalog for Microsoft Windows Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf).

1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and **download** the installation package **windows_64_&lt;version&gt;_unicode.zip**.

2. Unzip the installation package and double click on **setup.exe**.

3. Restart the installer with **administrator privileges**.

	![Restart the installer with administrator privileges](/img/admin_restart.png)

4. Choose your APL keyboard.

	The default APL keyboard uses <kbd>Ctrl</kbd> as the APL shifting key. It does not prevent copy and paste shortcuts, but some prefer to use a different method.

	If you do not want to use the <kbd>Ctrl</kbd> key as your APL shifting key, untick **☑ Install the Dyalog APL IME for 64 bit Windows** and head over to the section on [typing APL](#typing-apl-symbols) for alternatives.

	!!!Info
		Once Dyalog is installed, you can use <kbd>⊞ Win</kbd> + <kbd>Spacebar</kbd> to cycle between available keyboard layouts.
		
		![Choose keyboard layouts on Windows](/img/win_languages_dyalog_ime.png)

5. Click on **Default Install**.

6. **Reboot** your PC.

	Dyalog should now be available in your **Start** menu.

## macOS
This is a quick overview of the installation process. For more information, see the [Dyalog for macOS Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf).

### Download and Install Dyalog
1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and download the installation package for macOS.

2. Double click on the **mac_64_&lt;version&gt;_unicode.pkg** file.

3. Follow the instructions in the **Dyalog Installer** window.

4. Close the Dyalog Installer window.

	Dyalog should now be installed in your **Applications** folder.

!!!Info
	Dyalog for macOS comes with the [Remote Integrated Development Environment](https://github.com/Dyalog/ride). The [Dyalog for macOS Installation and Configuration Guide] contains some of the same information as the [RIDE User Guide](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf) but with some parts specific to macOS.

### Choose your APL keyboard.
Keyboard layouts and fonts for macOS are described [on the dfns website](https://dfns.dyalog.com/n_kbmac.htm).

> TODO grab from existing fonts and keyboards page?
> Or maybe this is only relevant for Windows? But a link from here?

## Linux
This is a quick overview of the installation process. For more information, see the [Dyalog for UNIX Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20UNIX%20Installation%20and%20Configuration%20Guide.pdf).

!!! Note
	Dyalog for Linux comes with a text-based TTY interface. We recommend [installing the RIDE](#install-the-ride) graphical interface as well.

|Distribution|Installation package|
|---|---|
|Debian/Ubuntu|64-bit .deb|
|Fedora/openSUSE|64-bit .rpm|

### Download and Install Dyalog
Installation **.rpm** (Fedora/openSUSE) and **.deb** (Debian/Ubuntu) files are provided [from the Dyalog website](https://www.dyalog.com/download-zone.htm).

Use your distribution's package manager to install Dyalog.

Usually, you can install from the terminal:

```sh
sudo rpm -i linux_64_<version>_unicode.x86_64.rpm
```

```sh
sudo dpkg -i linux_64_<version>_unicode.x86_64.deb
```

### Choose your APL keyboard
With the increasing prevalence of Wayland, there are some known issues with typing on recent versions of Fedora and Ubuntu.

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

## Raspberry Pi
First you will need to set your Raspberry Pi up to connect to our public repository, This will allow you to keep your APL installation up to date with new releases.

The following are the supported Operating System codenames for 32-bit Dyalog APL:

- Raspbian (Debian)
	- buster or later (ARMHF) - Hardware Float: this is required for Dyalog 18.0 and later
	- jessie or later (ARMHF) - Hardware Float: this is required for Dyalog 17.1

!!!Note
	We do not support ARMEL (Software Float) as we consider the performance of software float to be unacceptable on the Raspberry Pi.

	Dyalog APL will not run on 64-bit Raspbian O/S.

```shell
wget -O - http://packages.dyalog.com/dyalog-apt-key.gpg.key | sudo apt-key add -
CODENAME=$(lsb_release -sc)
echo "deb http://packages.dyalog.com ${CODENAME} main" | sudo tee /etc/apt/sources.list.d/dyalog.list
```

!!!Note
	If you update the operating system on your Pi, then you should re-run these last two commands so that `/etc/apt/sources.list.d/dyalog.list` accurately reflects the codename of the version of the distribution that you are running. 

See [packages.dyalog.com](https://packages.dyalog.com/) for more information and about previous versions of Dyalog and RIDE.

## Chromebook
ChromeOS is not officially supported by Dyalog, but some users have reported success installing the **.deb** installation package on Intel Chromebooks. There is [a forum post](https://forums.dyalog.com/viewtopic.php?f=20&p=7352) with more information.

