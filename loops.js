let i = 0;

function forLoop( array ) {
  for (let i = 0; i < 25; i++) {
    if ( i === 1 ) {
      array.push(`I kicked 1 big butt!`);
    } else {
      array.push(`I kicked ${i} big butts!`);
    }  
  }
  return array;
}

function whileLoop(n) {
  let countdown = 100
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'
}
 

function doWhileLoop(n) {
    var i = 0;
    
    function incrementVariable() {
    i = i + 1;
    return i;
        }
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < n);
}  