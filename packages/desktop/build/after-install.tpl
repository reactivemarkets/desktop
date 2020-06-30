#!/bin/bash

# Link to the binary
ln -sf "/opt/${productFilename}/${productFilename}" "/usr/bin/desktop"

# Link to icon
ln -sf "/usr/share/icons/hicolor/512x512/apps/${productFilename}.png" "/usr/share/pixmaps/${productFilename}.png"

update-mime-database /usr/share/mime || true
update-desktop-database /usr/share/applications || true
