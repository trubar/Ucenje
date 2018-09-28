// function findNextSquare(sq) {
//     // Return the next square if sq if a perfect square, -1 otherwise
//     let num;
//     if (Number.iseeger(Math.sqrt(sq))) {
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
//       return parsee(e);
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

// // Find The Parity Outlier
// function findOutliner(integers) {

//   // x = [2, 4, 0, 100, 4, 11, 2602, 36]
//   // x = [160, 3, 1719, 19, 11, 13, -21]
//   x = integers
//   let isEven = [];
//   let isOdd = [];
//   x.forEach(e => {
//     if (e % 2 === 0) {
//       isEven.push(x.indexOf(e));
//     } else {
//       isOdd.push(x.indexOf(e));
//     }
//   });
//   if (isEven.length === 1) {
//     return (x[isEven]);
//   } else if (isOdd.length === 1) {
//     return (x[isOdd]);
//   }
// }
// findOutliner([2, 4, 0, 100, 4, 11, 2602, 36]);

// Number of people in the bus

//busStops = (([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
// on = 0;
// off = 0;
// sum = 0;
// function number (busStops) {
//     // Good Luck!
//     busStops.forEach((el) => {
//         on += el[0];
//         off += el[1];
//     });
//     sum = on - off;
// }

// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);
// console.log(sum);

// sumAll([1, 4]);

// function sumAll(arr) {
//     let sum = 0;
//     if (arr[0] < arr[1]) {
//         arr.forEach(el => {
            
//         });
//         } else if (arr[1] < arr[0]) {
//             for (i = arr[1]; i <= arr[0]; i++) {
//                 sum += i;
//                 console.log(sum)
//         }
// }

// return sum;
// }

let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],['loop', 'shift', 6, 7, 1000, 'method']
    [
      [
        ['concat', false, true, 'spread', 'array']
      ],
      [
        [
          ['mutate', 1327.98, 'splice', 'slice', 'push']
            
              ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]]
    // change code above this line
  ];
  console.log(myNestedArray);


  let nestedArray = [
                    ['deep'],
                    [['deeper'], ['deeper']],
                    [[['deepest'], ['deepest']],[[['deepest-est?']]]]
                    ];