# <p align="center">Frontend Web Development Roadmap</p>

## Phase One: Learning

<details>
<summary>Basic</summary>

## 1. Get familiar with an editor (Visual Studio Code Recommended)

## Setting Up Visual Studio Code

  Getting up and running with Visual Studio Code is quick and easy. It is a small download so you can install in a matter of minutes.

### Installation on Windows

  1. Download the [Visual Studio Code Installer](https://code.visualstudio.com/docs?dv=win) for windows.
  2. Once it is downloaded, run the installer `VSCodeUserSetup-{version}.exe`. This will only take a minute.  
  3. By default, VS Code is installed under `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`.

  Make sure to restart your console after the installation as setup will add Visual Studio Code to your `%PATH%`, so from the console you can type 'code .' to open VS Code on that folder. 
  This is so that the `%PATH%` environmental variable can take effect.
  **Alternatively you can also download a [Zip Archive](https://code.visualstudio.com/docs/?dv=winzip), extract it and run the code from there.**

### Installation on macOS

  1. [Download Visual Studio Code](https://code.visualstudio.com/docs?dv=osx) for macOS.
  2. Open the browser's download list and locate the downloaded app or archive.
  3. If archive, extract the archive contents. Use double-click for some browsers or select the 'magnifying glass' icon with Safari.
  4. Drag `Visual Studio Code.app` to the **Applications** folder, making it available in the macOS Launchpad.
  5. Open VS Code from the **Applications** folder, by double clicking the icon.
  6. Add VS Code to your Dock by right-clicking on the icon, located in the Dock, to bring up the context menu and choosing **Options, Keep in Dock**.

  **Launching from the command line**.

  -Launch VS Code.
  -Open the Command Palette `Cmd+Shift+P` and type 'shell command' to find the **Shell Command: Install 'code' command in PATH** command.
  ![shell-command-image](/shell-command.png)
  -Restart the terminal for the new `$PATH` value to take effect. You'll be able to type 'code .' in any folder to start editing files in that folder.

  **Note:** If you still have the old `code` alias in your `.bash_profile `(or equivalent) from an early VS Code version, remove it and replace it by executing the `Shell Command: Install 'code' command in PATH` command. 

### Installation on Linux

  See the [Download Visual Studio](https://code.visualstudio.com/download) Code page for a complete list of available installation options.

#### Debian and Ubuntu based distributions
  
  The easiest way to install Visual Studio Code for Debian/Ubuntu based distributions is to download and install the [.deb package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868), either through the graphical software center if it's available, or through the command line with:
  
  ```
    sudo apt install ./<file>.deb

    # If you're on an older Linux distribution, you will need to run this instead:
    # sudo dpkg -i <file>.deb
    # sudo apt-get install -f # Install dependencies
  ```

  Note that other binaries are also available on the [VS Code download page](https://code.visualstudio.com/download).

  Installing the .deb package will prompt to install the apt repository and signing key to enable auto-updating using the system's package manager. To automatically install the apt repository and signing key, such as on a non-interactive terminal, run the following command first:

  ``` 
    echo "code code/add-microsoft-repo boolean true" | sudo debconf-set-selections
  ```

  The apt repository and key can also be installed manually with the following script:

  ```
    sudo apt-get install wget gpg
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
    sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
    echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
    rm -f packages.microsoft.gpg

  ```

  Then update the package cache and install the package using:
  ```
    sudo apt install apt-transport-https
    sudo apt update
    sudo apt install code # or code-insiders

  ```

  **For other distributions, [check out this page](https://code.visualstudio.com/docs/setup/linux) for more info.**


**2. HTML5**
  - HTML Structure
  - Tags & Elements

**3. CSS3**
  - Basic Styling
  - Learn about adding colors and typography 
  - Learn how Class and IDs work with HTML tags
  - Learn about Pseudo Classes

**4. JavaScript**
  - JS Output
  - JS Statements
  - JS Logical Conditions 
  - JS Syntax
  - JS Comments
  - JS Variables, Let & Const
  - JS Operators (+, -, x, ÷)
  - JS Data Types
</details>
<details>
<summary>Intermediate</summary>

**1. HTML**
- HTML Forms
- HTML Canvas
- SVG
- Adding Media (Video, Audio, Embeds)

**2. CSS**
- Styling Forms
- Attributes Selectors
- Measurement Units (px, rem, em, %, vh, vw)
- Layout
- CSS Variables
- Using Web Fonts
- Responsiveness

**3. JavaScript**
- JS Loops
- JS Objects
- JS Classes
- JS Events
- JS Functions
- JS Strings and Numbers (Methods)
- JS Arrays
- JS Dates
- Math
- JS Scope
- JS Hoisting
- DOM Manipulation Basics

**4. Git & GitHub**
- Creating/Initialising a Repo
- Commits
- Push & Pull
- Pull/merge Requests
- Branches

</details>
<details>
<summary>Advanced</summary>

**1. Javascript**
- Arrow Functions
- Destructuring
- Spread and Rest Operators
- Promises and Async/Await
- Modules (import/export)

**2. React.js Basics**
- JSX
- Components
- Props and State
- Hooks: e.g useEffect, useState
- Events in React
- Simple Routing with React Router

</details>

## Phase Two: Building

<details>
<summary>Basic</summary>

- Simple Recipe App
- Dog Photo App
- Pricing component for a physical product
</details>
<details>
<summary>Intermediate</summary>

- Clone a popular website 
- Weather App
- Tip Calculator
- Random fun facts website
</details>
<details>
<summary>Advanced</summary>

- [IP Address Tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
- [Multi-step form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ)

### Challenge Yourself Further
** Work on the following projects to enhance your React skills. These projects can also be implemented using HTML, CSS, and JavaScript, providing ample opportunities to practice and improve.**

- [Space tourism multi-page website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)
- [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
- [Rock, Paper, Scissors game](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)

** To get started, visit [frontend mentor](https://www.frontendmentor.io/home), create an account and dive into these projects.**
</details>


# <p align="center"> Resource materials to aid your journey </p>

## HTML & CSS
  - [W3schools](https://www.w3schools.com/html/)
  - [FreeCodeCamp - Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
  - [CSS-Tricks - "HTML & CSS – The VERY Basics]( https://css-tricks.com/video-screencasts/58-html-css-the-very-basics/)
  - [HTML Handbook](https://flaviocopes.com/page/html-handbook)
  - [CSS Handbook](https://flaviocopes.com/page/css-handbook)

### If you have lose change you can consider getting this 🙃🙃
  [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/)

## JAVASCRIPT
  - [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [W3schools](https://www.w3schools.com/js/default.asp)
  - [NetNinja JS Playlist](https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
  - [Jonas Schmedtmann]()

### If you have lose change you can consider getting this 🙃🙃
  [The Complete JavaScript Course 2024: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)



<!-- content credits to Fueler, FCC, TheOdinProject and WebDevSimplified -->
