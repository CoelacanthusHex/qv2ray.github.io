(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{403:function(e,a,t){"use strict";t.r(a);var s=t(17),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manually-build-qv2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-build-qv2ray"}},[e._v("#")]),e._v(" Manually Build Qv2ray")]),e._v(" "),t("p",[e._v("You "),t("em",[e._v("can")]),e._v(" build Qv2ray manually, on the platform which our release is not currently supported (yet).")]),e._v(" "),t("h2",{attrs:{id:"_0-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-dependencies"}},[e._v("#")]),e._v(" 0. Dependencies")]),e._v(" "),t("p",[e._v("Please make sure you have already met all the dependency requirements.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Qt version "),t("code",[e._v(">= 5.11")])])]),e._v(" "),t("li",[t("p",[e._v("Qt 5.13, 5.14 is recommended")])]),e._v(" "),t("li",[t("p",[e._v("gRPC & protobuf")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("To build Qv2ray under Windows, both "),t("code",[e._v("gRPC")]),e._v(" and "),t("code",[e._v("protobuf")]),e._v(" are required.")])]),e._v(" "),t("li",[t("p",[e._v("To build Qv2ray under Linux or macOS, only "),t("code",[e._v("protobuf")]),e._v(" is necessary where "),t("code",[e._v("gRPC")]),e._v(" can be replaced by a self-made library called "),t("code",[e._v("libqvb")])]),e._v(" "),t("p",[t("strong",[e._v("Packagers’ Note: Do NOT use "),t("code",[e._v("gRPC 1.26")]),e._v(", it has a bug preventing Qv2ray to start.")])])])])]),e._v(" "),t("li",[t("p",[e._v("OpenSSL")])]),e._v(" "),t("li",[t("p",[e._v("The build may "),t("strong",[e._v("not")]),e._v(" fail if you don't have it since it's a "),t("strong",[t("u",[e._v("runtime dependency")])]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("A compiler with "),t("code",[e._v("std-c++17")]),e._v(" "),t("em",[e._v("nested namespace")]),e._v(", "),t("em",[e._v("tuple expansion")]),e._v(" and "),t("em",[e._v("inline variable")]),e._v(" support.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("gcc7")]),e._v(" is known to be supported and good to go.")]),e._v(" "),t("li",[e._v("At least version 14.2 of MSVC is required.")])])])]),e._v(" "),t("h2",{attrs:{id:"_1-obtaining-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-obtaining-source-code"}},[e._v("#")]),e._v(" 1. Obtaining Source Code")]),e._v(" "),t("p",[e._v("There are various approaches to obtain the source code of Qv2ray. You can get it from:")]),e._v(" "),t("ul",[t("li",[e._v("Git: "),t("code",[e._v("git clone https://github.com/Qv2ray/Qv2ray.git")])]),e._v(" "),t("li",[e._v("Directly download the source code of a branch ("),t("strong",[e._v("it’s not suggested for the lack of git submodule metadata.")]),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"_2-build-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-instructions"}},[e._v("#")]),e._v(" 2. Build instructions")]),e._v(" "),t("p",[e._v("Assume you have Qt installed and currently configured the "),t("code",[e._v("$PATH")]),e._v(" which can execute at least "),t("code",[e._v("qmake --version")]),e._v(" within the Terminal/Shell/Command Prompt and you have used the SCM to download the source code, the directory is called "),t("code",[e._v("Qv2ray")])]),e._v(" "),t("p",[e._v("If not, you need to set up a development environment:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Debian/Ubuntu/RaspberryPiOS: Install packages using apt:")]),e._v(" "),t("p",[t("code",[e._v("apt install qtbase5-dev qttools5-dev build-essential cmake git pkg-config libssl-dev")])])])]),e._v(" "),t("h3",{attrs:{id:"_2-0-before-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-before-build"}},[e._v("#")]),e._v(" 2.0 Before Build")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Arch Linux: Install packages using pacman: "),t("code",[e._v("pacman -S grpc protobuf")])])]),e._v(" "),t("li",[t("p",[e._v("Debian/Ubuntu/RaspberryPiOS: Install packages using apt: "),t("code",[e._v("apt install libprotobuf-dev libgrpc++-dev")])])]),e._v(" "),t("li",[t("p",[e._v("macOS: Install packages through homebrew: "),t("code",[e._v("brew install grpc protobuf")])])]),e._v(" "),t("li",[t("p",[e._v("For Windows:")]),e._v(" "),t("ul",[t("li",[e._v("Download "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC dependency package - x64"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC dependency package - x86"),t("OutboundLink")],1),e._v(" from the "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray-deps"),t("OutboundLink")],1),e._v(" repo release and extract to the "),t("code",[e._v("libs/x**-windows/")]),e._v(" directory, where "),t("code",[e._v("**")]),e._v(" can be "),t("code",[e._v("86")]),e._v(" or "),t("code",[e._v("64")]),e._v(".")]),e._v(" "),t("li",[e._v("Alternative method: Use "),t("code",[e._v("vcpkg install grpc")]),e._v(" to manually build "),t("code",[e._v("gRPC")]),e._v(" on Windows using "),t("strong",[e._v("MSVC")]),e._v(", this usually takes long so it’s not encouraged.")])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Make sure you have "),t("code",[e._v("grpc_cpp_plugin")]),e._v(" and "),t("code",[e._v("protoc")]),e._v(", which will be used by cmake in the next step")])]),e._v(" "),t("h3",{attrs:{id:"_2-1-build-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-build-scripts"}},[e._v("#")]),e._v(" 2.1 Build Scripts")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Qv2ray\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To fetch and checkout all submodules.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" build "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Call cmake")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# There are many options available, for details, you may want the cmake-gui tool.")]),e._v("\ncmake "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(" -DCMAKE_BUILD_TYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Release\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Or "cmake .. -DCMAKE_INSTALL_PREFIX=" + your installation path.')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Or "cmake .. -DCMAKE_BUILD_TYPE=Release" if you want to ship a release build.')]),e._v("\n\ncmake --build "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You may want to append `--parallel N` to speed up the build.")]),e._v("\n")])])]),t("ul",[t("li",[t("strong",[e._v("You are not able to run "),t("code",[e._v("qv2ray.exe")]),e._v(" or open the "),t("code",[e._v("qv2ray.app")]),e._v(" package on Windows and macOS after these steps, if you want to do so. See below.")])])]),e._v(" "),t("h2",{attrs:{id:"_3-deployments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-deployments"}},[e._v("#")]),e._v(" 3. Deployments")]),e._v(" "),t("p",[e._v("There are a few more works to do before packaging Qv2ray or start using it, please run following command.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("cmake --install "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Note there\'s a dot after "--install "')]),e._v("\n")])])]),t("p",[e._v("This will automatically (Windows/macOS) copy all dependencies to the directory which you have specified using "),t("code",[e._v("CMAKE_INSTALL_PREFIX")]),e._v(" in the previous step. You need to regenerate cmake cache file if you want to change that directory.")])])}),[],!1,null,null,null);a.default=o.exports}}]);