## CONTENTS OF THIS FILE

- INTRODUCTION
- REQUIREMENTS
- RECOMMENDED TOOLS
- INSTALLATION
- INSTALLATION
- GETTING STARTED
- PACKING

---

## INTRODUCTION

Ready to go boilerplate for electron app with typescript, react, mui, pg, playwright

---

## REQUIREMENTS

Development on Windows

- [Nodejs](https://nodejs.org/en/download/) >= 16.x
- [Nodejs](https://github.com/npm/cli)
- [postgressql](https://www.postgresql.org/download/windows/) 

Development on Windows with WSL (Ubuntu)

- [Nodejs](https://nodejs.org/en/download/) >= 16.x
- [Nodejs](https://github.com/npm/cli)
- [postgressql](https://www.postgresql.org/download/linux/ubuntu/)
- [Xming](https://sourceforge.net/projects/xming/) as displayer

---

## RECOMMENDED TOOLS

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

## INSTALLATION

Windows:

- Install Nodejs

- Install posgressql
- add environment variables PATH for user and system to postgres lib and bin

```
Example:
 C:\Program Files\PostgreSQL\14\lib\
 C:\Program Files\PostgreSQL\14\bin\
```

Wsl:

- Install Nodejs

- Install posgressql
- Install Xmming on Windows

```
Set up display:

Run it > check 'Multiple Windows' > next > next > check 'disable access control' > next > Finish
```

---

## GETTING STARTED

1. Download repo:

```
git clone https://github.com/reaz1995/electron-typescript-react-playwright-pg-boilerplate.git myapp
```

2. Navigate to the project root

```
cd myapp
```

3. install dependencies

```
npm install
OR
yarn install
```

4. Run in development mode

```
npm run dev
OR
yarn dev
```

// ON WSL, BEFORE RUNNING THEP ROJECT SET UP DISPLAY

Run it every new instance of terminal or include in profile of bash

```
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0
```

To exit running App use shortcut:

```
Ctrl + W
```

---

## PACKING

Run below command to build your app

```
npm run package
```

Builder will create your app for Windows, Linux, mac.

To build app on Linux/wsl for Windows install WineHQ and Mono
https://www.electron.build/multi-platform-build.html#to-build-app-for-windows-on-linux
