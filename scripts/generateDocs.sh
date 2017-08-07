#!/bin/sh
rm -r docs/*
mkdir -p docs/static/dist
mkdir -p docs/bootstrap
mkdir -p docs/prism
cp test/browser/app.css docs/static/
cp test/browser/dist/app.* docs/static/dist/
cp -r node_modules/bootstrap/dist/* docs/bootstrap/
cp -r node_modules/prismjs/themes/* docs/prism/
# Rewrite urls
cat test/browser/index.html | sed 's/href=\"\//href=\"\/inferno-bootstrap-docs\//' | sed 's/src=\"\//src=\"\/inferno-bootstrap-docs\//' >> docs/index.html