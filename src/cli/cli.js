#!/usr/bin/env node

"use strict"




const constants = require('../commons/constants')





const schemeOptions = ''
const optionDocs    = ''





const docs = `
Name:
	linux-cl - Command line bindings for changing Linux terminal colour schemes.
Usage:
	linux-cl $(${schemeOptions})
	linux-cl (-h | --help | --version)

Options:
	-h, --help    Display this documentation
${optionDocs}
`





const docopt               = require('docopt').docopt
const parseSchemas         = require('../app/parse-schemas')
const convertToLinuxScheme = require('../app/convert-to-linux-scheme')





const schemas = parseSchemas('palettes')

console.log(
	schemas.map(convertToLinuxScheme)
)
