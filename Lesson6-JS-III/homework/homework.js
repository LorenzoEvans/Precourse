// Do not change any of the function names

/* 

Remember the .length property. It counts the items in the array.

This number will be one digit higher than the index value.



Access individual array items with bracket notation.

Access the last item in an array by declaring a variable and initializing
it by assigning it the value of the length of the array, and then subtract one.



*/




function returnFirst(arr) {
  // return the first item from the array

return arr[0] ;
  
}

function returnLast(arr) {
  // return the last item of the array

  const arrIndex = arr.length ;

  return arr[arrIndex-1] ; 
}

function getArrayLength(arr) {
  // return the length of the array

  return arr.length ;

}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  
  return arr.map(a => a + 1) ;

}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array

  arr.push(item);

  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift


  arr.unshift(item);

  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  
  return words.join(' ') ;



}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

return arr.includes(item) ;


}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  
  // let index = numbers.length - 1 ;

  return numbers.reduce((total, amount) => total + amount);
}
  





function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
   
  let index = testScores.length ;
  
  let sum = testScores.reduce((total, amount) => total + amount) ;

  let avg = sum / index ;
  
  return avg ;

  /* const scoreSet = averageTestScore.length ;

  const scoreLength = averageTestScore[scoreSet -1] ;

for (let i = 0; i < scoreLength; i++) {

 let avgNum =+ averageTestScore[i] ;

 let avgScore = avgNum / averageTestScore.length ;

 return avgScore ;

} */

}
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

return Math.max(...numbers) ;
}

function multiplyArguments(argument) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

  // let argVal = argVal + argument ;

  // if (multiplyArguments.length !== 0) {

  //   return argument *= argument ;
  // }

  // else if (multiplyArguments.length) {

  //   return false;
  // } 

  //   else {
  //     return argVal ;
  //   }

 
      if (arguments.length === 0) {

    return 0;
  
  }
 
     else if (arguments.length === 1) {

      return argument ;
    }
  
  
  let sum = 1 ;
    
    for (let i = 0; i < arguments.length; i++) {

      sum *= arguments[i] ;
 
     

    }
      return sum ;
     



    //   let sum = 1 ;

    //   let placeHolder = arguments[i] ;

    //   let temp = arguments[i] * sum ;

    //   let vals = placeHolder * sum ;

    //   return temp || vals ;
    // }
    

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};