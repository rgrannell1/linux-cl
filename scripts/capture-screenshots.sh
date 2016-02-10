
function example {

	echo '{"name":"guake-color-palettes","description":"command-line wrapper for varamenous guake colour palette generator.","bin":{"guake-cl":"src/cli/cli.js"},"homepage":"https://github.com/rgrannell1/guake-color-palettes#readme"}' | jq .

}





OIFS="$IFS"
IFS=$'\n'

for file in $( ls palettes )
do

	option=--$(echo "$file" | sed 's/^linux-//' | sed 's/[.]sh//' )
	outpath=$(echo $file | sed 's/[.]sh/.png/')

	# thank you, terrible bash security!! (this is why '--' exists!)
	guake-cl $option #| bash

	#clear
	echo "$option"
	printf "\n\n"

	example

	sleep 1.5
	gnome-screenshot --file=images/$outpath
	convert -crop 300x200+0+30 images/$outpath images/$outpath


done

IFS="$OIFS"
