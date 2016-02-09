
"use strict"





const exec                 = require('child_process').exec

const constants            = require('../commons/constants')
const parseSchemes         = require('../app/parse-schemes')
const convertToLinuxScheme = require('../app/convert-to-linux-scheme')




const setScheme = args => {

	const schemes        = parseSchemes(constants.paths.palettes)
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
