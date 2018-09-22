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

// function sumDigPow(a, b) {
//   // Your code here
//   var sum = [];
  
//   for (i = a; i < b; i++) {
//     var x = i.toString().split('').map(e => {
//       return parseInt(e);
//     });
//     var calc = 0;
//     x.forEach((el, i) => {
//       calc += (Math.pow(el, i + 1));
//     })
//     y = x.join('');
//     if (i === calc) {
//       sum.push(calc)
//     }        
//       }
//       return sum;
//     }

// sumDigPow(1, 10);

// Find The Parity Outlier

x = [2, 4, 0, 100, 4, 11, 2602, 36]
x.forEach(e => {
  isEven = e % 2 === 0;
  isOdd = Math.abs(e % 2) === 1;
}
console.log(isEven, isOdd);