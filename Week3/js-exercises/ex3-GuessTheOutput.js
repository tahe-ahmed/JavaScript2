/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

// will alert 12 as reassigning (a) inside the fucntion (x) .Since no keyword before (a) mentioned 
// it became a globle varible so whenever the alert function called after call (x) it will print 12