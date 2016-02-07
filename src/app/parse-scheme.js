
"use strict"




const constants = require('../commons/constants')





const parseScheme = content => {

	const parsed = { }
	const lines  = content.split('\n')

	lines.forEach(line => {

		line.test(constants.regex.nameLine)

	})

}





module.exports = parseScheme
