# scriptoned-base

The `scriptoned` project is a Discord automation application.

- `scriptoned-base` is the modified version of bare fork of original scriptoned repository to
  provide the normalized code of the scriptoned project. Also, this repository will apply the
  every core code updates from original repository. If you want clean code base without any
  additional commands including not basic feature, you can use this repository instead.

<!-- Badges -->
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

## Table of Contents

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Directories](#Directories)
- [License](#License)

----

# Requirements

To develop and run this project, you need to install some software working hard behind this project. The project is based on following software:

- [Node.JS](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Yarn](https://yarnpkg.com/)
- GCC/G++ compilers such as [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2017) or `build-essential`

# Installation

1. Fork or download this Git repository.
  - `git clone <repository url>`
2. Install the dependencies via Yarn.
  - `yarn`
3. Fill or edit the missing(or invalid) values of [`preferences.js`](/preferences.js)
  - The token put on `client.token` is not valid value.
4. Start the project:
  - as `normal` state: `yarn start`
  - as `sharding` state: `yarn shard`
  - as `debug` state: `yarn debug`
  - as `debug sharding` state: `yarn debug-shard`

# Directories

Also, following list includes important files.

- [bin](/bin): Where start up files with options are located.
- [commands](/commands): Where the command modules are located.
  - [refs.js](/commands/refs.js): Specific categories which need to be exposed.
- [etc](/etc): ETC.
  - [sql](/etc/sql): Where the SQL queries are stored. (static)
- [handlers](/handlers): Where the Discord.js event handlers are located.
- [structures](/structures): Modules and important logics.
  - [database](/structures/database): Exports Knex.js client.
  - [message](/structures/message): Where the modules required in `message` handler.
  - [permission](/structures/permission): Logics related to user permission.
- [translations](/translations): Where the translations are stored.

# License

This repository is accepting the MIT license.

```text
MIT License

Copyright 2019 Seia-Soto and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
