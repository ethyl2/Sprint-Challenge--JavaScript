# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. **Describe the biggest difference between `.forEach` & `.map`.**

**`.map()`** returns a new array, containing the results of executing the callback function body on each of the array’s elements, while **`.forEach()`** executes whatever is inside the callback function body on each of the array's elements, and doesn’t return anything.


2. **What is the difference between a function and a method?**

**“Function”** is a more general term, while **“method”** is subcategory of “function”. A method is a function that is a property of an object.

3. **What is closure?**

Closure is the combination of a function and the lexical environment in which it was declared; the function has access to a collection of all of the variables in scope at the time it was created.

When JavaScript sees a function inside of another function, it keeps the variables of the outer function in memory and doesn't destroy them once the outer function is executed. Closure gives the inner function access to those variables in the outer scope.

Closure allows an inner function to access variables in an outer scope, but outer functions don’t have access to variables inside inner functions. In order to execute a function, the function will look for a variable it needs in its function body, but if it can’t find it, it will reach out to the scope outside the function to find it, and it will keep going further if necessary to find it. (If it can’t find it at the end of its search, the variable will be undefined.)

4. **Describe the four rules of the 'this' keyword.**

    1. In **global** scope, `this` refers to the window Object, unless in strict mode, then `this` is undefined.

    2. **Implicit binding**: `this` refers to the object to the left of the dot, when a method is called on an object.  myObject.showThis(); ← here, `this` refers to myObject.

    3. **Explicit binding**: `this` is explicitly defined when you use `.bind()`, `.call()`, or `.apply()`. `this` refers to the object passed as an argument. 
    
    Example: mySampleFunction.call(myObj); ← here, `this` refers to myObj. mySampleFunction is invoked in the context of myObj. We're explicitly (using call()) specifying what `this` is referencing.

    4. **New binding**: Whenever a constructor function is used, `this` refers to the specific instance object that is created and returned by the constructor function. 

5. **Why do we need super() in an extended class?**

`super()` lets the child class access and use the attributes and methods of the parent class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
