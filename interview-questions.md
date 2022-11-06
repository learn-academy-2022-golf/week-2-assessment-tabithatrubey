# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an an argument is that a parameter holds the values a function calls on when initially created, and an argument is the value called on outside of the function to invoke it throughout a program. 

Researched answer:I typically confuse parameters and arguments. However, parameters are the values inside the function, and the argument is the value determined for the function when it is time to log the function. For example, if we started a function like: 
const myAge = (number) => {
    return `You are ${number}
}
console.log(myAge(77))
the parameter would be number and the argument would be 77. You can use arguments to make functions more complex and manipulate the data inside functions to create different results. Parameters are placeholders for data, whereas arguments are the actual data passed into the function. Arguments seem more dynamic than parameters.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() predefined parameters are value, index, and array. The value is required, whereas as the index and array are optional.

Researched answer: .map()'s predefined paramters are current value, index, and array. The current value is the only one that is always required for .map(). The order of these parameters must be continuously maintained, which is why the value is always required. .map MUST take at least one argument, which the first is always value, but they can hold at maximum three arguments. 

3. What is the difference between map and filter?

Your answer: Map and filter are both great for iteration purposes, however, map iterates through an array and returns an array of the same length, while filer iterates through an array but only returns the conditions it filters for. 

Researched answer: One of the biggest differences between map and filter is their execution. Map executes a command for each value in an array and returns an array of the same length. However, filter considers each item in an array, but only extracts the data that meets the specified condition. While they both return a new array, map's length remains the same as the original array, but filter produces a subset of the original array. Filter can also extract different types of data in the original array, while map only modifies and returns the same data type from the original array. 

4. What is iteration?

Your answer: Iteration is executing a command through a predefined array until a condition is met. The last portion, until a condition is met, is crucial to remember so you don't have a function stopping at a condition much longer or farther than the intended one. Iteration can do something for each value in an array. For example, iteration could take an array of numbers and return the array with all values multiplied by three. 

Researched answer: Iteration occurs when we make a decision about every value in an array. Iteration is highlighted in for loops and higher-order functions with .forEach, .map, and .filter. Iteration is dynamic. Iteration can manipulate data and return an array of the same length, or extract only the specified data required to meet the function's conditions. Iteration is extremely useful when a programmer wants to evaluate every element/value in an array or execute a repetetive command.

5. What is the difference between a class and an object?

Your answer: The difference between a class and an object is a class is a blueprint of an object and an object determines the behavior of data. Classes are static as they have the same exact skeleton for each class, while an object can be dynamic via functions inside the object, called methods.

Researched answer: A class is a function that contains data and behavior. An object is an instance of a class. Classes hold properties and act as a shell or blueprint for an object. Classes have certain keywords required to create and access data from within a class. For example, the constructor creates the object inside the class, "this" is used to refer to an object inside the class, and "new" is used when creating a new object (if class = Coffee, then const lattee = new Coffee; latte would now have access to the properties inside of Coffee). A class is written in PascalCase, whereas, objects are written in camelCase. Objects are considered the crossroads between data and behavior because they can hold functions internally, called methods. Objects contain key:value pairs, where key is the data type of symbol and value can be any valid JavaScript data type. An example of this would look like: const person = [name: "Tabi", phone: "9499031938"]; key would be name and phone and value would be "Tabi" and "9499031938". 

6. STRETCH: What is hoisting in JavaScript? 

Your answer: Hoisting in JavaScript is attaching another command onto an invoked fucntion when it is logged.

Researched answer: Hoisting allows a programmer to enable a function before it is recorded in their code. Hoisitng happens when the function declaration or variables are transfered to the top of a programmer's scope before the fucntion is invoked.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story describes what the user wants and the expected outcome. The user story allows the developers individuality in their approach on how to achieve the user's expected outcome. We have started to see these in our React series. 

2. Spread operator: The spread syntax is depicted by (...). The spread operator takes an array or string and expands it in the spot where an argument or no argument at all is anticipated. The spread operator itemizes the object properties and adds the key:value pairs to the new object.

3. React: React is a JavaScript library. React was created by Facebook with the intent to allow developers to construct user interfaces for websites and apps in a quick manner, globally. Everything in React is compromised of components, hence why it is called component-based. Developers combine all their components (small parts) to make one greater application or webpage. React uses JS, CSS, and HTML to offer the most customizable platform for users to interact with. React is also scalable and reusable, which enhances efficiency.  

4. React props: React props are React properties. Props transfer information from one React component to another. React props allow developers to construct consistent interfaces across React components. React props are accessed via React children in the component hierarchy. 

5. DOM events: The Document Object Model events enable JavaScript to provide event handlers for elements in an HTML document. DOM events  typically operate in conjunction with functions, which creates functionality, like a user clicking on a button. Some DOM events also include MouseEvent, KeyboardEvent, and TouchEvent. 