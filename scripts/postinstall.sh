#!/bin/sh

PKG=eslint-config-materya

npm info "${PKG}@latest" peerDependencies --json \
  | command sed 's/[\{\},]//g ; s/: /@/g' \
  | xargs npm i -D "${PKG}@latest"
