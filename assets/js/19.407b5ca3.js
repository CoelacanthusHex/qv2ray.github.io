(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{397:function(e,a,t){"use strict";t.r(a);var s=t(17),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"step-2-configuring-v2ray-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configuring-v2ray-core"}},[e._v("#")]),e._v(" Step 2: Configuring V2Ray Core")]),e._v(" "),t("p",[e._v("After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.")]),e._v(" "),t("h2",{attrs:{id:"download-v2ray-core-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-v2ray-core-files"}},[e._v("#")]),e._v(" Download V2Ray Core Files")]),e._v(" "),t("p",[e._v("Due to political reasons, Qv2ray itself "),t("strong",[e._v("does not")]),e._v(" include a distribution of V2Ray executable files, namely the "),t("code",[e._v("v2ray-core")]),e._v(", and most of the time required for users is to download them.")]),e._v(" "),t("p",[t("strong",[e._v("Check out "),t("a",{attrs:{href:"https://www.v2fly.org/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V2Fly Installation Guide"),t("OutboundLink")],1),e._v(" for more details.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Core Management: Manual vs Automatic")]),e._v(" "),t("p",[e._v("If you are using a distribution with V2Ray core and assets packages, it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, installing only one package "),t("code",[e._v("v2ray")]),e._v(" is enough. For other distributions, please read below.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("For Windows 10 ARM64 users")]),e._v(" "),t("p",[e._v("From V2Ray Core 4.27, the V2Ray project team has provided an ARM32 (armv7)-based kernel for Windows 10. It is recommended that Windows 10 ARM64 users use this version of the kernel to obtain better performance.")])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Sharpen Your Eyes")]),e._v(" "),t("p",[e._v("Do not download "),t("code",[e._v("v2ray-linux-arm64.zip")]),e._v(" if you are running Qv2ray on "),t("code",[e._v("x86_64")]),e._v(" ("),t("code",[e._v("amd64")]),e._v(") platform.\nTo make it clear, "),t("code",[e._v("arm64")]),e._v(" is completely different from "),t("code",[e._v("amd64")]),e._v(". Make sure you don't do like this.")])]),e._v(" "),t("h3",{attrs:{id:"download-v2ray-core-via-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-v2ray-core-via-package-manager"}},[e._v("#")]),e._v(" Download V2RAy Core via package manager")]),e._v(" "),t("h4",{attrs:{id:"homebrew-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-macos"}},[e._v("#")]),e._v(" Homebrew（macOS）")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" v2ray\n")])])]),t("p",[e._v("When installing with Homebrew, V2Ray's executable location is "),t("code",[e._v("/usr/local/bin/v2ray")]),e._v(", assets location is "),t("code",[e._v("/usr/local/share/v2ray")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"scoop-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoop-windows"}},[e._v("#")]),e._v(" Scoop (Windows)")]),e._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("scoop install v2ray\n")])])]),t("p",[e._v("When installing with Scoop, V2Ray's executable location is "),t("code",[e._v("<User Directory>\\scoop\\apps\\v2ray\\current\\v2ray.exe")]),e._v(", assets location is "),t("code",[e._v("<User Directory>\\scoop\\apps\\v2ray\\current")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"chocolatey-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chocolatey-windows"}},[e._v("#")]),e._v(" Chocolatey (Windows)")]),e._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("choco install v2ray\n")])])]),t("p",[e._v("The software will be installed on "),t("code",[e._v("X:\\tools\\v2ray")]),e._v(" ("),t("em",[t("strong",[e._v("X")])]),e._v(" is your system disk drive).")]),e._v(" "),t("h4",{attrs:{id:"debian-ubuntu-and-other-debian-based-derivatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu-and-other-debian-based-derivatives"}},[e._v("#")]),e._v(" Debian, Ubuntu and other Debian-based derivatives.")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://apt.v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://apt.v2fly.org"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"arch-linux-and-its-derivatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-and-its-derivatives"}},[e._v("#")]),e._v(" Arch Linux and its derivatives")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -S v2ray\n")])])]),t("p",[e._v("The binary will be installed to "),t("code",[e._v("/usr/bin/v2ray")]),e._v(", the resource file is located at "),t("code",[e._v("/usr/share/v2ray/")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"v2ray-official-installation-script-using-the-linux-distribution-of-systemd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-official-installation-script-using-the-linux-distribution-of-systemd"}},[e._v("#")]),e._v(" V2Ray official installation script (using the Linux distribution of Systemd).")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/v2fly/fhs-install-v2ray",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/v2fly/fhs-install-v2ray"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Although this script is designed to install V2Ray as a server, it can be used as a client without any problems. For use in Qv2ray, it is recommended to turn off its server services.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl disable v2ray --now\n")])])]),t("h3",{attrs:{id:"manual-download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-download"}},[e._v("#")]),e._v(" Manual Download")]),e._v(" "),t("p",[t("strong",[e._v("Official Download Link：")]),e._v(" "),t("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/v2fly/v2ray-core/releases"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into "),t("code",[e._v("$QV2RAY_CONFIG_PATH/vcore")]),e._v(", where "),t("code",[e._v("$QV2RAY_CONFIG_PATH")]),e._v(" is the directory where Qv2ray store it’s data.")]),e._v(" "),t("p",[e._v("The directory "),t("code",[e._v("vcore")]),e._v(" could be in one of these locations:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("./config/")]),e._v(" ("),t("code",[e._v("config")]),e._v(" subdirectory aside Qv2ray executable, which is recommended for Windows Users)")]),e._v(" "),t("li",[t("code",[e._v("~/.qv2ray/")]),e._v(" (in a dedicated directory of your home folder)")]),e._v(" "),t("li",[t("code",[e._v("~/.config/qv2ray/")]),e._v(" (standard XDG configuration path)")])]),e._v(" "),t("p",[e._v("Afterwards, please make sure that these files exists directly in your "),t("code",[e._v("vcore")]),e._v(" directory:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("v2ray")]),e._v(" / "),t("code",[e._v("v2ray.exe")]),e._v(": core executable file")]),e._v(" "),t("li",[t("code",[e._v("v2ctl")]),e._v(" / "),t("code",[e._v("v2ctl.exe")]),e._v(": core controlling program")]),e._v(" "),t("li",[t("code",[e._v("geoip.dat")]),e._v(": IP rules database")]),e._v(" "),t("li",[t("code",[e._v("geosite.dat")]),e._v(": domain rules database")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Special Hint for Linux / macOS Users")]),e._v(" "),t("p",[e._v("You should always grant "),t("strong",[e._v("executable permission")]),e._v(" to "),t("code",[e._v("v2ray")]),e._v(" and "),t("code",[e._v("v2ctl")]),e._v(".\nThis is usually done by executing "),t("code",[e._v("chmod +x")]),e._v(" on these files.")]),e._v(" "),t("p",[e._v("On macOS, if you use Homebrew to install v2ray-core, you can ignore this tip.")])]),e._v(" "),t("h2",{attrs:{id:"configure-v2ray-core-in-qv2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-v2ray-core-in-qv2ray"}},[e._v("#")]),e._v(" Configure V2Ray Core in Qv2ray")]),e._v(" "),t("p",[e._v("Open Qv2ray and go to Preference Window. In "),t("strong",[t("a",{attrs:{href:"qv2ray://open/preference/kernel"}},[e._v("Core Settings")])]),e._v(", configure the following options:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Core Executable Path")]),e._v(": Set this to where your V2Ray executable exists. This can be the full path of your "),t("code",[e._v("v2ray.exe")]),e._v(" on Windows, or that "),t("code",[e._v("v2ray")]),e._v(" executable file on Linux / macOS.")]),e._v(" "),t("li",[t("strong",[e._v("V2Ray Assets Directory")]),e._v(": Set this to where "),t("code",[e._v("geoip.dat")]),e._v(" and "),t("code",[e._v("geosite.dat")]),e._v(" are located.")])]),e._v(" "),t("p",[e._v("After configuring, you can click on "),t("strong",[e._v("Check V2Ray Core Settings")]),e._v(" button to validate your V2Ray core settings. Repeat trying until you get the check passed.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("No Matryoshka!")]),e._v(" "),t("p",[e._v("Never ever point "),t("strong",[e._v("Core Executable Path")]),e._v(" to "),t("strong",[e._v("Qv2ray Executable")]),e._v("!\nThis will not cause a fork bomb since Qv2ray is single-instanced.\nDo note that V2Ray Core Executable is like "),t("code",[e._v("v2ray")]),e._v(" , "),t("code",[e._v("v2ray.exe")]),e._v(" or "),t("code",[e._v("wv2ray.exe")]),e._v(", instead of "),t("code",[e._v("qv2ray")]),e._v(" or "),t("code",[e._v("qv2ray.exe")]),e._v(", "),t("code",[e._v("v2rayN.exe")]),e._v("!")])])])}),[],!1,null,null,null);a.default=o.exports}}]);