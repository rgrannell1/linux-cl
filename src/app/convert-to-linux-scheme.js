
"use strict"




const constants = require('../commons/constants')





const convertToLinuxScheme = scheme => {

	var lines = [ ]

	const colours = scheme.colours

	Object.keys(colours).forEach(code => {

		const colourCode = parseInt(code, 10).toString(16).toUpperCase( )
		const hexCode    = colours[code].replace('#', '').toUpperCase( )

		lines.push(`echo -en "\\e]P${colourCode}${hexCode}"`)

	})

	return lines.concat('clear').join('\n')

}





module.exports = convertToLinuxScheme
