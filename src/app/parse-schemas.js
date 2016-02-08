
"use strict"





const path      = require('path')
const fs        = require('fs')

const constants = require('../commons/constants')
const commons   = require('../commons/commons')





const parseScheme= content => {

	const parsed = { }
	const lines  = content.split('\n')

	lines.forEach(line => {

		if (line.charAt(0) === '[') {

			parsed.name = commons.normaliseName(line.replace(/\[|\]/g, ''))

		} else if (/=/.test(line)) {

			const parts = line.split('=')

			const key   = parts[0].trim( )
			const val   = parts[1].trim( ).replace(/["']/g, '').split(':').filter(code => {
				return code.charAt(0) === '#'
			})

			parsed[key] = val

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
