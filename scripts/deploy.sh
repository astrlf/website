#! /usr/bin/env bash

set -e

git pull origin main
echo "git pull done"

pnpm install
echo "pnpm install done"

pnpm run build
echo "pnpm run build done"

pm2 reload website
echo "pm2 reload website done"

echo "deploy success"
