let i = 0;

function whileLoop(n) {
  
}
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
let i = 0;

function doWhileLoop(n) {
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < n);
}  