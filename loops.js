let i = 0;
 
function doWhileLoop(n) {
  i = i + 1;
  return i;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
} while (doWhileLoop() < 5);