console.log("hello")

// declaring variables
// you do it with let, not var (its the modern way)
// you can also do it with const, same as let, but its just a constant

let name = 'Beray'
let lastName = 'Syu'
console.log((name + ' ' + lastName))

// const is the default choice
const number = 5
console.log(number)

// primitive types
let nameA = 'Name' // string
let num = 5 // number
let isNumber = true // boolean

// defining objects
let person = {
    name: "beray",
    age: 21
}

console.log(person.name)

// arrays - its dynamic
let selectedColors = ['blue', 'green']
selectedColors[2] = 'yellow'

console.log(selectedColors)

selectedColors[3] = 1 // dynamic

// creating functions
function greet(name, lastName){
    console.log("Hello " + name + ' ' + lastName)
}

greet("bero", 'syu')

function square(number){
    return number * number
}

console.log(square(2))