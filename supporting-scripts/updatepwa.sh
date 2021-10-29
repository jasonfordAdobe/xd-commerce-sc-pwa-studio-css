#!/bin/bash

PACKAGEJSON=package.json

if [ -f "$PACKAGEJSON" ]; then
    yarn add @fooman/venia-ui-override-resolver;
    mkdir src/overrides;
    mkdir src/overrides/venia-ui;
    cp node_modules/@magento/venia-ui/lib/tokens.module.css src/overrides/venia-ui/;
else
    echo "Couldn't find a package.json..... are you sure you're in the right folder?" 1>&2
    exit 1
fi
