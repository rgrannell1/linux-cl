
"use strict"





const fs      = require('fs')
const path    = require('path')

const commons = require('../commons/commons')





const constants = {
	paths: {
		palettes: path.resolve(path.join(__dirname, '../..', 'palettes/'))
	},
	options: {

	},
	regex: {

		// get foobar from [[foobar]]
		nameLine:     /\[\[	([^\[]+)\]\]/,

		// get foo, bar from '   foo = bar'
		keyValuePair: /[\s\t]{4}([^\s\t=]+)[\s\t]*=[\s\t]*(.+)/

	}
}




fs
.readdirSync(constants.paths.palettes)
.forEach(fpath => {

	const names = {
		file:   fpath,
		scheme: commons.normaliseName(fpath.replace(/[.]config$/, ''))
	}

	names.scheme = names.scheme.charAt(0).toLowerCase( ) + names.scheme.slice(1)
	names.option = `--${names.scheme}`

	constants.options[names.option] = {
		fileName:   names.file,
		schemeName: names.scheme
	}

})





module.exports = constants
