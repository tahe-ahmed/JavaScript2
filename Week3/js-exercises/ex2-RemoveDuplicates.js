/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(array){
  for (let i = array.length; i > 0; i--) {
      if (array.indexOf(array[i]) !== i) {
        array.splice(i, 1);
      }
    }
    return array;
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);
// console.log(removeDuplicates(letters));
console.log(letters);
if (letters == ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!");