#!/usr/bin/env node

"use strict"




const constants = require('../commons/constants')





const schemeOptions = Object.keys(constants.options).join('|')
const optionDocs    = ''





const docs = `
Name:
	linux-cl - Command line bindings for changing Linux terminal colour schemes.
Usage:
	linux-cl (${schemeOptions})
	linux-cl (-h | --help | --version)

Options:
	-h, --help    Display this documentation
${optionDocs}
`





const docopt    = require('docopt').docopt
const setScheme = require('../app/set-scheme')





setScheme(docopt(docs))
