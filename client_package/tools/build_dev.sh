#!/bin/sh

rm -rf ../example/node_modules/client_package
cp -a ../../client_package/. ../example/node_modules/client_package
rm -rf ../example/node_modules/client_package/example
