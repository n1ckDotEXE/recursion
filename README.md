# Recursive Problems
There are 5 problems....

(taken from Colt Steele's Data Algorithms class and from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion)

1) Write a recursive function that does a count down, e.g., from some positive number, x, the function will print the numbers counting down until the number 1.

example:

input 5

output: 

5

4

3

2

1

 

2)  Sum all numbers.  Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

3) Calculate factorial  (factorial is for non-negative integers only)

Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

 4) Product of an array

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

In this function you will change the array, making it smaller as your progress.

Sample:

var six = productOfArray([1,2,3]) // 6

var sixty = productOfArray([1,2,3,10]) // 60

Write a function called productOfArray which takes in an array of numbers and returns the product of them all
Sample:
var six = productOfArray([1,2,3]) // 6var sixty = productOfArray([1,2,3,10]) // 60

5) Searching a JSON object recursively

Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

Will this function test for values inside an array??  

hint: you can use a for loop to cycle through the keys ---  for (let key in dict) 

hint: you can test if something is an object: typeof dict[key] === 'object' . (note if you do this for an array, it returns 'object',  Array.isArray(array) returns true or false! - try it out!)

Sample:

var nestedObject = { data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            },
            morestuff: {
                thing: {
                    moreStuff2: {
                        magicNumber: 445,
                        something: 'foobar'
                    }
                }
            },
            evenmore: {
                thing: {
                    moreStuff2: {
                        magicNumber: [9,6,7,5000],
                        something: 'foobar'
                    }
                }
            },
        }
    }
}
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false