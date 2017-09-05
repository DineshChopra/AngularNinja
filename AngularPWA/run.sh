#!/bin/bash
PATH = $PATH:$(npm bin)
set -x

#production build
ng build --prod

#Generate a SW manifest from our app
ngu-sw-manifest --module src/app/app.module.ts

# Copy prebuilt worker into our site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

#Serve
cd dist
http-server