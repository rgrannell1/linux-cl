
"use strict"




const constants = require('../commons/constants')

/*

	echo -en "\e]P0232323" #black
	echo -en "\e]P82B2B2B" #darkgrey
	echo -en "\e]P1D75F5F" #darkred
	echo -en "\e]P9E33636" #red
	echo -en "\e]P287AF5F" #darkgreen
	echo -en "\e]PA98E34D" #green
	echo -en "\e]P3D7AF87" #brown
	echo -en "\e]PBFFD75F" #yellow
	echo -en "\e]P48787AF" #darkblue
	echo -en "\e]PC7373C9" #blue
	echo -en "\e]P5BD53A5" #darkmagenta
	echo -en "\e]PDD633B2" #magenta
	echo -en "\e]P65FAFAF" #darkcyan
	echo -en "\e]PE44C9C9" #cyan
	echo -en "\e]P7E5E5E5" #lightgrey
	echo -en "\e]PFFFFFFF" #white
	clear #for background artifacting

*/





const convertToLinuxScheme = scheme => {

	var lines = [ ]

	Object.keys(scheme).forEach(code => {

		const colourCode = parseInt(code, 10).toString(16).toUpperCase( )
		const hexCode    = scheme[code].replace('#', '')

		lines.push(`echo -en "\\e]P${colourCode}${hexCode}"`)

	})

	return lines.concat('clear').join('\n')

}





module.exports = convertToLinuxScheme
