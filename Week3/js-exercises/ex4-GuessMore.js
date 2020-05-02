/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // output 9
// as (x) is a varibale scoped globally and it passed to the f1 function by value not by
// by reference . Also (val) scope is in the function block only

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // output {x:10}
// as (y) is an object and it's passed by reference so the (y.x) is changed 