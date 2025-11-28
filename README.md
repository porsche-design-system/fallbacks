# Fallbacks by Porsche Design System

Designed and developed by the [Porsche Design System](https://designsystem.porsche.com/) team, this repository contains
partials which can be used to integrate fallback scripts for browser
support and cookies.

## Status

[![Contribution](https://github.com/porsche-design-system/fallbacks/actions/workflows/contribution.yml/badge.svg)](https://github.com/porsche-design-system/fallbacks/actions/workflows/contribution.yml)

## Getting started

### Tools

#### Volta

We recommend using [Volta](https://volta.sh) to manage the correct Node.js and npm version.

```bash
# On most Unix systems including macOS, you can install with a single command:
curl https://get.volta.sh | bash
```

#### Node.js and npm

```bash
# Download and install Node.js:
volta install node@22

# Verify the Node.js version:
node -v

# Verify npm version:
npm -v
```

Volta should automatically pick up the correct Node.js version defined in `./package.json`.

#### Docker

Using Docker is optional but recommended for test automation, as it ensures consistent results across different
machines. This is particularly important for visual regression testing.

1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
2. Download Docker app locally on your machine and login
3. Start Docker

---

### Installation

#### node_modules

Install all required npm packages:

```bash
npm install
```

---

### Setup

The following instructions assume that [WebStorm](https://www.jetbrains.com/webstorm) is used as the IDE.
For other IDEs, please consult their respective documentation.

#### Prettier (Formatter)

1. Go to WebStorm `Preferences`
2. In `Preferences` go to `Languages and Frameworks` -> `Javascript` -> `Prettier`
3. Activate `Automatic Prettier configuration`
4. Change `Run for files` to `**/*.{md,mdx}`
5. Click checkbox `Run on save` and apply

**Note:** If you have to exclude code fom being prettified, see
[Prettier configuration](https://prettier.io/docs/en/ignore.html#javascript)

#### Biome (Formatter + Linter)

1. Go to WebStorm `Preferences`
2. Click on the Plugins tab and search for `biome`
3. Install Biome
4. In `Preferences` go to `Languages and Frameworks` -> `Biome`
5. Activate `Automatic Biome configuration`
6. Change `Supported extensions` to
   `.astro,.css,.gql,.graphql,.js,.mjs,.cjs,.jsx,.json,.jsonc,.svelte,.html,.ts,.mts,.cts,.tsx,.vue`
7. Click checkbox `Run format on save`, `Run safe fixes on save`, `Sort import on save` and apply

**Note:** If you have to exclude code fom being formatted or linted, see
[Biome configuration](https://biomejs.dev/linter/#ignore-code)

---

### Commands

All available commands for developing, building and testing are listed in the **scripts** section of the
`./package.json` file in the project root. You can execute them from the project root directory:

#### Development

- `npm run start:assets`

#### Build

- `npm run build:assets`
- `npm run build:partials`

#### Tests

- `test:unit:assets` 
- `test:vrt:assets` 
- `test:smoke:unit:assets`
- `test:partials` 