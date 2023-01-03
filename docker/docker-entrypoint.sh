#!/bin/bash
set -e

export NG_CLI_ANALYTICS=ci

npm install --save-dev @types/node

npm install -g nodemon

npm install

npm start