let nestedObject =  [9,6,7,5000]
let dict = {data: {
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
// console.log(nestedObject)



function contains(dict, valueToMatch) {

    //this solution uses a 'helper function' - setFoundOne
    //this is so I could set a variable (foundone) and hold that value 
    //through all the iterations

  let foundone = false;
  setFoundOne(dict, valueToMatch);
  return foundone;

   function setFoundOne(dict, valueToMatch) {

        for (let key in dict) {

        //if the result is another dictionary, call the function again

        //typeof is a built in function.  its kind of wierd b/c the syntax 
        //doesnot use ()


        if (typeof dict[key] === 'object') {

            setFoundOne(dict[key], valueToMatch)
        }

        if (dict[key] === valueToMatch) {

            foundone = true ;
            return;   //this also breaks out if it finds a match

        }
      }
    }

    return foundone;

}

console.log(contains(nestedObject,5000))
console.log(contains(dict,5000))