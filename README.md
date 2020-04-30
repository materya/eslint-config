# Materya ESLint Config

An opinionated ESLint config for Materya projects

## How to use

### Install

```
npm i eslint-plugin-materya
```

### peer dependencies

```
npx install-peerdeps -d -o eslint-config-materya
```

### Configure ESLint

In your eslint config file (`.eslintrc`, `.eslintrc.js`, `.eslintrc.yml`, ...)

```js
module.exports = {
  extends: [
    'materya',            // Base set of rules
    'materya/pulumi',     // Extended rules for pulumi modules
    'materya/typescript', // Extended rules for Typescript
  ],
  ...
}

```

## Rules

> WIP
