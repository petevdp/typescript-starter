#!/bin/sh
node --enable-source-maps --inspect-brk index.js | ./node_modules/.bin/pino-pretty
