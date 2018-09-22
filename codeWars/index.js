// function findNextSquare(sq) {
//     // Return the next square if sq if a perfect square, -1 otherwise
//     let num;
//     if (Number.isInteger(Math.sqrt(sq))) {
//       num = Math.sqrt(sq) + 1;
//       num *= num;
//       return num;
//     } else {
//     return -1;
//     }
//   };

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

//  

var sum = [];
var a = 89
var b = a.toString().split('').map(e => {
  return parseInt(e);
});

console.log(b);

var calc = 0;
for (i = 0; i < b.length; i++) {
  calc += Math.pow(b[i], i + 1);
  if (a===calc) {
    sum.push(calc);
  }
}


console.log(calc);
console.log(sum);