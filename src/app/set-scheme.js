
"use strict"





const fs                   = require('fs')
const childProcess         = require('child_process')

const constants            = require('../commons/constants')
const parseSchemes         = require('../app/parse-schemes')
const convertToLinuxScheme = require('../app/convert-to-linux-scheme')




const setScheme = args => {

	if (args['--version']) {
		console.log(constants.package.version)
	}

	const schemes = parseSchemes(constants.paths.palettes)
	const mapping = schemes.map(scheme => {
		return `${scheme.fpath}|--${scheme.schemeName}`
	})
	.join('\n')

	fs.writeFileSync('file-mapping.txt', mapping)

	if (args['--random']) {

		const availableSchemes = Object.keys(constants.options)
		const chosenScheme     = availableSchemes[Math.floor(Math.random( ) * availableSchemes.length)]
		args[chosenScheme]     = true

	}

	const selected       = Object.keys(args).filter(option => {
		return constants.options.hasOwnProperty(option) && args[option]
	})[0]

	const scheme         = schemes.filter(scheme => {
		return `--${scheme.schemeName}` === selected
	})[0]

	const script = convertToLinuxScheme(scheme)
	console.log(script)

}





module.exports = setScheme
