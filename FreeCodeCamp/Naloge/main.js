// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let big = 0;
//   words.forEach(element => {
//     if(element.length > big){
//       big = element.length
//     }
//   });
//   return big;
// }

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");


// // Druga naloga
// const array1 = [1, 8, 35, 4, 6];
// console.log(array1.sort((a, b) => a - b));


// function largestOfFour(arr) {
//   // You can do this!
//   let res = [];
//   arr.forEach(el => el.sort((a, b) => a - b));
//   arr.forEach(el => res.push(el[3]))
//   return res;
// }

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// // Tretja naloga

// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor

//   if (str.substring(str.length - target.length, str.length) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "n"));

// // Četrta naloga

// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   let string = '';
//   if (num < 0) {
//     return str = '';
//   } else {
//     for (let i = 0; i < num; i++) {
//       string = string + str;
//     }
//     return string;
//   }
// }

// console.log(repeatStringNumTimes("*", 8));

// // Peta naloga

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   let newString;
//   if(str.length > num) {
//     newString = str.slice(0,num) + '...';
//     return newString;
//   } else {
//     newString = str.slice(0,num);
//     return newString;
//   }
// }

// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

// // Šesta naloga

// function findElement(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)){
//       console.log(num);
//     }
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });

// // Sedma naloga

// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   if(typeof(bool) === 'boolean'){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(booWho(45));

// // Osma naloga

// function titleCase(str) {
//   let newStr = str.toLowerCase().split(' ').map(word => {
//     return word[0].toUpperCase() + word.substring(1);
//   }).join(' ');
//   console.log(newStr);
// }

// titleCase("sHoRt AnD sToUt");

/**
 *  9. Deveta naloga
 */ 

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   arr2c = arr2.slice();
//   arr1.forEach(el => {
//     arr2c.splice(n,0,el);
//     n++;
//   })
//   return arr2c;
// }

// frankenSplice([1, 2], ["a", "b"], 1);

/**
 *  10. Deseta naloga
 */ 

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   return arr.filter(x=>x);
// }

// console.log(bouncer([1, null, NaN, 2, undefined]));

/**
 *  11. Enajsta naloga
 */ 

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   arr.sort((a,b) => a - b);

//   for(let i = 0; i < arr.length; i++){
//     if (arr[i] >= num){
//       console.log(i);
//     }
//   }
// return arr.length;
// }

// getIndexToIns([40, 60], 50);

/**
 *  12 Dvanajsta naloga
 */


// function mutation(arr) {
//   let first = arr[0].toLowerCase();
//   let second = arr[1].toLowerCase();

//   for(let i = 0; i < second.length; i++){
//     if(first.indexOf(second[i]) < 0){
//       return false;
//     }
//   }
//   return true;
// }

// mutation(["Alien", "line"]);

// Lahko pa tudi tako:

// function mutation(arr) {
//   return arr[1].toLowerCase()
//     .split('')
//     .every(function(letter) {
//       return arr[0].toLowerCase()
//         .indexOf(letter) != -1;
//     });
// }

/**
 *  13. Naloga
 */ 

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let newArrs = [];
//   for (let i = 0; i < arr.length; i=i+size) {
//     newArrs.push(arr.slice(i, i + size))
//     // console.log(i, size);
//   }
//   return newArrs
//   //console.log(newArrs);
// }

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);