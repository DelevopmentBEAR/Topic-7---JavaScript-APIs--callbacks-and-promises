// Review from last week

let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach(function(animal, index){
    console.log(index, animal)
})

console.log('----------') // Seperation for clarity

// Another way to print
animals.forEach((animal, index) => {
    console.log(animal, index)
})

console.log('----------') // Seperation for clarity

// All on one line if need be
animals.forEach((animal, index) => console.log(animal, index))

console.log('----------') // Seperation for clarity

// Only need data, no need for index
animals.forEach(function(animal) {
    console.log(animal)
})

console.log('----------') // Seperation for clarity

// Again, one line if need be
animals.forEach((animal) => console.log(animal))

console.log('----------') // Seperation for clarity

// Again, one line if need be, but without () on first animal
animals.forEach( animal => console.log(animal))

// Otherwise, all of these options work! Choose whatever works for you!
console.log('----------') // Seperation for clarity