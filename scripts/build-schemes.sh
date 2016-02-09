#!/usr/bin/env sh





wget -O master.zip https://github.com/mbadolato/iTerm2-Color-Schemes/archive/master.zip

unzip -o master.zip -d iterm2
cp -R iterm2/iTerm2-Color-Schemes-master/xrdb/* palettes/
rm -rf master.zip iterm2
