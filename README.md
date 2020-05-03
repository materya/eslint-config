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

Extends from this config in your eslint local config file.

Example in `.eslintrc`:

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

### Dependencies

This set of rules extends a few standards:

* [AirBNB Javascript guidelines](https://github.com/airbnb/javascript)
* [ESLint Standard Style](https://github.com/standard/eslint-config-standard)
* [ESLint Import Plugin](https://github.com/benmosher/eslint-plugin-import)

### Custom rules

> WIP
