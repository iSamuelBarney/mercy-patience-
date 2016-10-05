//integer
let data = (123 + 5) - 2
//data === 126

//float(floating point)
let data = 1.11 - .3
//data === 0.81

//string
let data = 'this is all text you 123 + 2'
//data === 'this is all text you 123 + 2'

//string with variables
let someVar = 'all text you'
let data = 'this is $(someVar) 123 + 2'
//data === 'this is all text you 123 + 2'

//array
let data = [1,'some string',5]
//data === [1,'some string',5]

//object 
let getProp = aVar => aVar + 1
let data = {
    propertyName: 'string value',
    anotherProp: 777,
    getProp
}
//data.propertyName === 'string value'

//function
let data = (arg) => {
    return arg + 3
}
//data(2) === 5

OR

function data(argument) {
    return argument + 2
}
//data(3) === 5
