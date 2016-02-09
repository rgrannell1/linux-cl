
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

	},
	colourCodes: {
		black:       'P0',
		darkgrey:    'P8',
		darkred:     'P1',
		red:         'P9',
		darkgreen:   'P2',
		green:       'PA',
		brown:       'P3',
		yellow:      'PB',
		darkblue:    'P4',
		blue:        'PC',
		darkmagenta: 'P5',
		magenta:     'PD',
		darkcyan:    'P6',
		cyan:        'PE',
		lightgrey:   'P7',
		white:       'PF'
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
