# Materya ESLint Config

An opinionated ESLint config for Materya projects

It turns out we can't have several configs in one ESLint configuration package.
So this is actually a plugin (but does not provide any new rules, just a
set of configs).

## How to use

### Install

```
npm i @materya/eslint-plugin
```

### Configure ESLint

In your eslint config file (`.eslintrc`, `.eslintrc.js`, `.eslintrc.yml`, ...)

```js
module.exports = {
  extends: [
    'plugin:materya/common',     // Base set of rules
    'plugin:materya/pulumi',     // Extended rules for pulumi modules
    'plugin:materya/typescript', // Extended rules for Typescript
  ],
  ...
}

```

## Rules

> WIP
