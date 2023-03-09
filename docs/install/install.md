# Installation
Dyalog provides installation packages for supported operating systems which can be [downloaded for free](https://www.dyalog.com/download-zone.htm).

## Microsoft Windows
This is a quick overview of the installation process. Full installation instructions are in the file `setup_readme.htm` included in the install package `windows_64_<version>_unicode.zip` which can be downloaded [from the Dyalog website](https://www.dyalog.com/download-zone.htm).

For more information about installed components, registry entries and configuration etc. see the [Dyalog for Microsoft Windows Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf).

1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and **download** the installation package **windows_64_&lt;version&gt;_unicode.zip**.

2. Unzip the installation package and double click on **setup.exe**.

3. Restart the installer with **administrator privileges**.

	![Restart the installer with administrator privileges](/img/admin_restart.png)

4. Choose your APL keyboard.

	The default APL keyboard uses <kbd>Ctrl</kbd> as the APL shifting key. It does not prevent copy and paste shortcuts, but some prefer to use a different method.

	!!!Note "Note (May 2022)"
		If you are using Microsoft Windows 11, then you might find that the standard Dyalog IME does not work with UWP (Universal Windows Platform) applications such as Notepad. We are working on both immediate and long-term solutions to meet our customers' wide range of needs. Some user-created alternatives are listed on [the APL Wiki page about Typing APL glyphs](https://aplwiki.com/wiki/Typing_glyphs#Windows).

	If you do not want to use the <kbd>Ctrl</kbd> key as your APL shifting key, untick **☑ Install the Dyalog APL IME for 64 bit Windows** and head over to the section on [typing APL](#typing-apl-symbols) for alternatives.

	!!!Info
		Once Dyalog is installed, you can use <kbd>⊞ Win</kbd> + <kbd>Spacebar</kbd> to cycle between available keyboard layouts.
		
		![Choose keyboard layouts on Windows](/img/win_languages_dyalog_ime.png)

5. Click on **Default Install**.

6. **Reboot** your PC.

	Dyalog should now be available in your **Start** menu.

## macOS
This is a quick overview of the installation process. For more information, see the [Dyalog for macOS Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf).

1. Go to the [download page](https://www.dyalog.com/download-zone.htm) and download the installation package for macOS.

2. Double click on the **mac_64_&lt;version&gt;_unicode.pkg** file.

3. Follow the instructions in the **Dyalog Installer** window.

4. Close the Dyalog Installer window.

	Dyalog should now be installed in your **Applications** folder.

5. Follow the instructions to [install the APL font and keyboard for macOS](https://www.dyalog.com/apl-font-keyboard.htm).

!!!Info
	Dyalog for macOS comes with the [Remote Integrated Development Environment](https://github.com/Dyalog/ride). The [Dyalog for macOS Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf) contains some of the same information as the [RIDE User Guide](https://docs.dyalog.com/latest/RIDE%20User%20Guide.pdf) but with some parts specific to macOS.

## Linux
This is a quick overview of the installation process. For more information, see the [Dyalog for UNIX Installation and Configuration Guide](https://docs.dyalog.com/latest/Dyalog%20for%20UNIX%20Installation%20and%20Configuration%20Guide.pdf).

!!! Note
	Dyalog for Linux comes with a text-based TTY interface, which is started when you type `dyalog` into the terminal. We recommend installing the RIDE graphical interface as well, as mentioned below.

1. Download and Install Dyalog
	Installation **.rpm** (Fedora/openSUSE) and **.deb** (Debian/Ubuntu) files are provided [from the Dyalog website](https://www.dyalog.com/download-zone.htm).

	Use your distribution's package manager to install Dyalog.

	Usually, you can install from the terminal:

	```sh
	sudo rpm -i linux_64_<version>_unicode.x86_64.rpm
	```

	```sh
	sudo dpkg -i linux_64_<version>_unicode.x86_64.deb
	```

1. Choose your APL keyboard

	APL keyboard layouts come with most Linux distributions by default, but must be enabled. Follow the [instructions on the APL Wiki](https://aplwiki.com/wiki/Typing_glyphs_on_Linux) for your  desktop environment.

	If you are using the latest versions of Ubuntu or Fedora, it is likely that you have the GNOME Wayland desktop environment.

	!!!Note "Note (June 2022)"
		There is a known issue with using the standard Linux input method with RIDE on Wayland. Click [this link to see the issue status :fontawesome-brands-github:](https://github.com/Dyalog/ride/issues/879).

1. Install the RIDE

	While Dyalog does come with a text-based terminal interface, it is recommended to use the [Remote IDE](https://github.com/Dyalog/ride). Download the [latest release](https://github.com/Dyalog/ride/releases/latest) from GitHub and install it in the same way as above.

1. Start Dyalog

	See [section 2.1.1 of Mastering Dyalog APL](https://mastering.dyalog.com/Getting-Started.html#the-ride-working-environment) for advice about using Dyalog with the RIDE.

	To use the text-based TTY interface, simply type `dyalog` into a terminal session and press <kbd>Enter</kbd>.

	To quit Dyalog in either case, type `)OFF` and press <kbd>Enter</kbd>.

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

