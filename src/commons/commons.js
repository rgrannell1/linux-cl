
"use strict"





const commons = { }





commons.normaliseName = name => {

	var chars            = ''

	var lastLowerCase    = false
	var lastWhitespace   = false

	var whitespaceRegexp = /\s/

	for (let ith = 0; ith < name.length; ++ith) {

		var char = name.charAt(ith)

		if (ith === 0) {

			chars += char.toLowerCase( )

		} else {

			var appended

			if (whitespaceRegexp.test(char) || char === '_') {

				appended = '-'

			} else if (lastLowerCase && char !== char.toLowerCase( )) {

				// if the last char was lowerser case, and the current isn't, add a dash if there isn't one already.

				appended = chars.slice(-1)[0] === '-'
					? char.toLowerCase( )
					: `-${char.toLowerCase( )}`

			} else {

				appended = char.toLowerCase( )

			}

			chars += appended

		}

		lastLowerCase  = ['-', '_'].indexOf(char) === -1 && char === char.toLowerCase( )
		lastWhitespace = whitespaceRegexp.test(char)

	}

	return chars

}





module.exports = commons
