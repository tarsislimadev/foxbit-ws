#!/usr/bin/sh

flet pack app.py

mkdir -p apps

mv ./dist/app ./apps/app.$( date +%Y%m%d%H%M%S )
