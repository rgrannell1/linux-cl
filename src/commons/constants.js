
"use strict"





const fs   = require('fs')
const path = require('path')




const constants = {
	paths: {

	},
	options: {

	},
	regex: {

		// get foobar from [[foobar]]
		nameLine:     /\[\[([^\[]+)\]\]/,

		// get foo, bar from '   foo = bar'
		keyValuePair: /[\s\t]{4}([^\s\t=]+)[\s\t]*=[\s\t]*(.+)/

	}
}




module.exports = constants
