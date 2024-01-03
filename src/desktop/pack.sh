#!/usr/bin/sh

flet pack main.py

rm -rf apps

mkdir -p apps

mv ./dist/main ./apps/main.$( date +%Y%m%d%H%M%S )
