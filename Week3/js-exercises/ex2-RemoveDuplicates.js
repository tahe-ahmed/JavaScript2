/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(array){
   let uniqueArray = array.filter((item, index ) => {
            // console.log(array.indexOf(item), index);
            return array.indexOf(item) === index;
        })
      
      return uniqueArray;
  }
  
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
  
removeDuplicates(letters);

console.log(removeDuplicates(letters));
//   console.log(letters);
// console.log(letters);
if (letters == ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!");
