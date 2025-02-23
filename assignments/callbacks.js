// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum', 'yo-yo', 'paper'];



  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });


//

  function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
  }

  function getLength(arr, cb) {
    return cb(arr.length);
  }

  getLength(items, function(length) {
    console.log(length)
  });


//

  function last(arr, cb) {
    // last passes the last item of the array into the callback.
  }

  function last(arr, cb) {
    return cb(arr[arr.length-1]);
  }

  last(items, function(anything){
    console.log(anything)
  });


//

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function sumNums(x, y, cb) {
  return cb(x, y);
}

sumNums(1, 4, function(a,b){
  console.log(a+b)
});

//

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(10,3,function(total){
  console.log(total)
});


//

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function contains(item, list, cb) {
  return cb(list.includes(item))
}

contains('Gum',items, function(bool){
  console.log(bool)
});



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

function removeDuplicates(array, cb) {
  const newArray = [];
  for (let i=0; i < array.length; i++){
    if(newArray.includes(array[i]) === false){
      newArray.push(array[i])
    }
  }

  return cb(newArray)
}

removeDuplicates(items,function(bananna){
  console.log(bananna)
});