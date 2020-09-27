let i = 0;

function whileLoop(n) {
  let countdown = 100
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'
}
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 

function doWhileLoop(n) {
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < n);
}  