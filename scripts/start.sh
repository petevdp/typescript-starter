#!/bin/sh
node --enable-source-maps index.js | ./node_modules/.bin/pino-pretty
