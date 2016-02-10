
function example {

	echo '{"name":"guake-color-palettes","description":"command-line wrapper for varamenous guake colour palette generator.","bin":{"guake-cl":"src/cli/cli.js"},"homepage":"https://github.com/rgrannell1/guake-color-palettes#readme"}' | jq .

}




while read pair
do

	file=$(echo "$pair"   | cut -d '|' -f 1)
	option=$(echo "$pair" | cut -d '|' -f 2)

	outpath=$(basename "$file" | sed 's/[.]xrdb/.png/')

	# thank you, terrible bash security!! (this is why '--' exists!)
	guake-cl "$option" | bash

	clear
	echo "$option"
	printf "\n\n"

	example

	sleep 1.5

	sudo fbgrab images/"$outpath"
	sudo convert -crop 300x200+0+0 images/"$outpath" images/"$outpath"

done < file-mapping.txt
