
"use strict"





const path      = require('path')
const fs        = require('fs')

const constants = require('../commons/constants')
const commons   = require('../commons/commons')





const parseScheme= content => {

	const parsed = { }
	const lines  = content.split('\n')

	const ansiiCodeRegexp = /Ansi_([0-9]+)_Color/
	const hexRegex        = /#[0-9a-f]{6}/

	lines.forEach(line => {

		const colourNumber = line.match(ansiiCodeRegexp)
		const hexCode      = line.match(hexRegex)

		if (colourNumber && hexCode) {
			parsed[colourNumber[1]] = hexCode[0]
		}

	})

	return parsed

}





const parseSchemes = fpath => {

	const fpaths = Object.keys(constants.options).map(option => {

		const names = constants.options[option]
		return path.resolve(path.join(fpath, names.fileName))

	})

	return fpaths.map(fpath => {

		try {

			fs.accessSync(fpath)
			return parseScheme(fs.readFileSync(fpath).toString( ))

		} catch (err) {

			throw err

		}

	})

}





module.exports = parseSchemes
