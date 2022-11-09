// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: "G", "o", "l", "f" " ", "2", "0", "2", "2"
// b) Verify and explain: The accessor .split("") divides each word in the string into individual characters. Using .split(" ") with a space in between the two quotations returns the same string or array. However, we could use .split("o"), it would return [ 'G', 'lf 2022' ]. Essentially, the "o" removes this character and splits the two array into two words where the "o" was ommitted.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: UNDEFINED BECUASE EVERY FUNCTION NEEDS A RETURN 
// b) Verify and explain: Every function needs a return, so this function will not run successfully. Instead it will log 'undefined' because the variable has been created, but has not been given a value. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The variable 'multipliedByTwo' will log all of the numbers in its array multiplied by two becuase we used the .map() in the higher order function. .Map() iterates throughout the entire array, which means it executes a command for every value or element in an array. In this case we are muliplying every number in the array by 2, so the output is 8, 10, 12, 14, 16. The .map() returns an array of the same length, unlike the .filter().

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Unlike the .map(), .filter() iterates through the array but returns an array at different lengths. The .filter() is searching to return the values that meet the condition inside the .filter() parameter.  

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: This returns JavaScript, without it being in a string, like I have depicted above. The reason it returns JavaScript is because you are calling on the object first, the the languages inside of the object, then asking for the 0 index of languages, which is the first value/element in the array: JavaScript. This would not log "JavaScript" with the quotations because the values have to be inside of strings in the array, but that does not mean the strings will appear in the log.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George, Function 
// b) Verify and explain: Ah, I see why it logs {student: 'George', cohort: 'Foxtrot', year: 2022 }. I originally thought it would log George, Function becuase I have run in to this exact error when I haven't invoked the function. However, if I would have taken a second longer before guessing I think the class reads more clearly. We defined George (name) and that was the only variable we could input. Our output was predefined as the other variables were already set to log without any additional information. 
  // If I logged
  // const learnStudent1 = new Learn("Tabi")
  // console.log(learnStudent1)
  // We would receive {student: 'Tabi', cohort: 'Foxtrot', year: 2022 }
