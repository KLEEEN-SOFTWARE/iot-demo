#!/usr/bin/env bash
set -e

npm run build:api:prod

echo "Copy  Kleeen API Middleware files into the lambda directory"
rm -rf amplify/backend/function/kleeenAPIMiddleware/src
mv dist/apps/api amplify/backend/function/kleeenAPIMiddleware/src
mv amplify/backend/function/kleeenAPIMiddleware/src/main.js amplify/backend/function/kleeenAPIMiddleware/src/index.js
mv amplify/backend/function/kleeenAPIMiddleware/src/main.js.map amplify/backend/function/kleeenAPIMiddleware/src/index.js.map
