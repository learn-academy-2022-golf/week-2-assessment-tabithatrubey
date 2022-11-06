// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("mult3", () => {
    it ("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const expectedOutput1 = [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        const expectedOutput2 = [72, 81, 90, 99, 108]
        expect(mult3(numbersArray1)).toEqual(expectedOutput1)
        expect(mult3(numbersArray2)).toEqual(expectedOutput2)
    })
    })

    // ReferenceError: mult3 is not defined

    // Psuedo Code 
    // Create a function called "mult3"
    // One parameter - array
    // Since we want to return the array with the SAME length and make a decision about each element/value inside the original array, we will use .map
    // Return the array with all of its values multiplied by 3

    const mult3 = (arr) => {
        return arr.map(value => value * 3)
    }
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// First, we start with Test Driven Development (TDD) to write our function in plain text to run it through Jest, a JS testing framework. Anticpated results: fail, pass, as part of the red-green-refactor.
describe("evenlyDivisible", () => {
    it ("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        const objectOutput1 = "15 is divisible by three"
        const object2 = { number: 0 }
        const objectOutput2 = "0 is divisible by three"
        const object3 = { number: -7 }
        const objectOutput3 = "-7 is not divisible by three"
        expect(evenlyDivisible(object1)).toEqual(objectOutput1)
        expect(evenlyDivisible(object2)).toEqual(objectOutput2)
        expect(evenlyDivisible(object3)).toEqual(objectOutput3)
    })
})
// Reference Error: evenlyDivisible is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// note to self -check all syntax before running test, PAY ATTENTION TO THE DETAILS! 

// Psuedo Code:
// Create a function called evenlyDivisible 
// Has one parameter - number
// Use a conditional statement to determine if the number is evenly divisible by three or not
// If the number is divisible by three
//     return number is divisble by three
// If the number is not evenly divisible by three
//     return number is not divisible by three 


const evenlyDivisible = (number) => {
    if (number % 3 === 0)
    {return `${number} is evenly divisible by three`}
    else if (number % 3 != 0) {
        return `${number} is not evenly divisible by three`
        }
    }
//     console.log(evenlyDivisible(15))
// I am very stuck on this one. My test keeps failing, but I opened a new window and ran the code and it works prefectly. This is the error code: 
// evenlyDivisible › takes an object as an argument and decides if the number inside it is evenly divisible by three or not

// expect(received).toEqual(expected) // deep equality

// Expected: "15 is divisible by three"
// Received: "[object Object] is not evenly divisible by three"

//   37 |         const object3 = { number: -7 }
//   38 |         const objectOutput3 = "-7 is not divisible by three"
// > 39 |         expect(evenlyDivisible(object1)).toEqual(objectOutput1)
//      |                                          ^
//   40 |         expect(evenlyDivisible(object2)).toEqual(objectOutput2)
//   41 |         expect(evenlyDivisible(object3)).toEqual(objectOutput3)
//   42 |     })


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total



// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("onlyCapitals", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        const randomOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(onlyCapitals(randomNouns1)).toEqual(randomOutput1)
        expect(onlyCapitals(randomNouns2)).toEqual(randomOutput2)
    })
})

// ReferenceError: onlyCapitals is not defined
// Test Suites: 1 failed, 1 total
// Tests: 2 failed, 2 total

// b) Psuedo Code:
// Create a function called onlyCapitals
// Takes in one paramater -an array
// The function will return ALL the word capitalized 
    //use .map() to iterate over the array and then .toUpperCase to make each word capitalized in each string.
    // Use a conditional statement to check if the typeof value strictly equals a string so .toUpperCase can successfully run, since it does not work on arrays
 //If the value is a string, return the 0 index of the string (the first letter in the string) since we want to capitalize the first letter, not the entire word. Use string interpolation so the first letter is returned, as well.
//  Then, attach .toUpperCase to capitalize the 0 index
// Then, attach .slice(1) with string interpolation to return the remainder of the word in a string to make it a complete word.   

const onlyCapitals = (array) => {
    return array.map(value => {
        if (typeof value === "string") {
            return `${value[0].toUpperCase()}${value.slice(1)}`
        } else {
            return "This is not valid"
        }
    })
}
// onlyCapitals(["streetlamp", "potato", "teeth", "conclusion", "nephew"]) === ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// My test that was supposed to serve as the green portion in the RGR kept failing because I had .slice[0], instead of .slice(0) since I thought I would use [] for index notation.





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const output1 = 1
        const vowelTester2 = "academy"
        const output2 = 0
        const vowelTester3 = "challenges"
        const output3 = 2
        expect(firstVowel(vowelTester1)).toEqual(output1)
        expect(firstVowel(vowelTester2)).toEqual(output2)
        expect(firstVowel(vowelTester3)).toEqual(output3)
    })
    
})
// // ReferenceError: firstVowel is not defined
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 1 passed, 3 total

// // Psuedo Code
// Create a function called fistVowel
// Takes in one parameter - string
// Use a conditional statement to evaluate if the data type is a string
// If the data type is a string
    // Return indexof fist vowel



const firstVowel = (arr) => {
    return arr.search(/[a,e,i,o,u,A,E,I,O,U]/g)
    }
//  firstVowel › takes in a string and logs the index of the first vowel

// expect(received).toEqual(expected) // deep equality

// Expected: 1
// Received: undefined

//   175 |         const vowelTester3 = "challenges"
//   176 |         const output3 = 2
// > 177 |         expect(firstVowel(vowelTester1)).toEqual(output1)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 passed, 4 total

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 3 passed, 4 total

// I struggled with this one the longest, but glorious YouTube saved me. I initially was using the .filter() method to search for the value that was set at a vowel by using logical and (value === "a" && value === "e"). I had arr.split() to split the array into individual characters, then tacked on .filter to search for the vowels. I think this could have been a start, a disorganized one, but I wasn't sure how to find the FIRST vowel's index. I used .indexof but would yield undefined results. I looked up .filter() to see if I was using it imporperly and I got an article on the differences between .search and .filter, so I YouTube'd .search, which ultimately helped me with this problem and allow the test to pass green. 
// We use the .search method instead of the .filter because .search specifically looks for the first match of the index in its condition. This makes much more sense as I felt like I was hitting a wall and didn't know where I could go when using .filter() becuase it would have returned results for ALL vowels. I used a,e,i,o,u,A,E,I,O,U in the event an uppercase vowel existed, even though it wasn't relevant for this speciic question. The syntax is /[ ]/g, in which the first / and last / indicate the start and stop similar to for loops, and g represents global so the search is looking for all occurrences not just the first. Therefore, g isn't actually necessary in this equation (I tested without the g and yieled the same results). Essentially the equation could have looked like this and passed, as well 
// const firstVowel = (arr) => {
    // return arr.search(/[a,e,i,o,u]/)
    // }