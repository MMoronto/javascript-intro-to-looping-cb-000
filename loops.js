let i = 0;

function forLoop( array ) {
  for (let i = 0; i < array.length; i++) {
    if ( i < 2 ) {
      array.push(`I kicked ${i} big butt!`);
    } else
      array.push(`I kicked ${i} big butts!`);
  }
  return array
}

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