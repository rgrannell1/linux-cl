
montage "$(find images -name *.png -printf '%p\0' | sort)" -mode concatenate -background '#FFFFFF' assembled.png

