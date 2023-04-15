// Functions - https://ed.devmountain.com/materials/f39/lectures/functions/


// Data Type Conversion
console.log('Data Type Conversion ---------------')

const myVar = 5
const myVarTwo = Boolean(5)
console.log(myVarTwo)

const someVar = ''
const someVarTwo = Boolean(someVar)
console.log(someVarTwo)

const bool = true
const boolTwo = Number(true)
console.log(boolTwo)

// We can use a + as shorthand for Number.

const string = '42ft'
const withNumber = +(string)
const withParseInt = parseInt(string)
console.log(withNumber)
console.log(withParseInt)

const evenNumber = 22
const stringNumber = String(evenNumber)
console.log(stringNumber)

const myBool = false
const phrase = 'That is ' + myBool
console.log(phrase)

const oddNumber = 3
const stringThree = 3 + ''
console.log(stringThree)

// String Methods
console.log('String Methods ---------------')

const myString = 'devmountain'

console.log(myString.includes('ou'))
console.log(myString.startsWith('v'))
console.log(myString.endsWith('n'))

let lowerString = 'lowercase letters'
lowerString.toUpperCase()
console.log(lowerString)

lowerString = lowerString.toUpperCase()
console.log(lowerString)

let upperString = lowerString.toUpperCase()
console.log(upperString)

const whitespace = '   code  '
const newWhitespace = whitespace.trim()
console.log(newWhitespace)

const crazyString = 'tHiS is A StrINg'
const upperCrazy = crazyString.toUpperCase()
const lowerCrazy =crazyString.toLowerCase()
console.log(upperCrazy)
console.log(lowerCrazy)

const shortStory = 'Once upon a time, there was a dragon. He was awesome. The end.'
const noFirstE = shortStory.replace('e', 'x')
console.log(noFirstE)
const noLetterE = shortStory.replaceAll('e', 'x')
console.log(noLetterE)

const statement = 'It is your birthday.'
const splitStr = statement.split(' ')
console.log(splitStr)
const splitOnLetter = statement.split('t')
console.log(splitOnLetter)

const reJoin = splitStr.join()
console.log(reJoin)
const noComma = reJoin.replaceAll(',', ' ')
console.log(noComma)

const jsStatement = 'JS rocks'

const splitStr2 = jsStatement.split('')
console.log(splitStr2)

const arrayOfWords = ['North', 'South', 'East', 'West']
const joinWithCommas = arrayOfWords.join()
console.log(joinWithCommas)
const joinWithNoCommas = arrayOfWords.join('')
console.log(joinWithNoCommas)
const joinWithSpaces = arrayOfWords.join(' ')
console.log(joinWithSpaces)
const joinWithPlus = arrayOfWords.join(' + ')
console.log(joinWithPlus)

// The What & Why of Functions
console.log('The What & Why of Functions ---------------')

