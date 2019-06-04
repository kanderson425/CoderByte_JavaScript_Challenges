//LongestWord
function LongestWord(sen) { 
    let senArr = sen.split(' ');
    let longestWordCount = 0;
    let longestWord = ''
    for (var i = 0; i < senArr.length; i++) {
        if(/^[a-zA-Z]+$/.test(senArr[i])) {
             if(senArr[i].length > longestWordCount) {
                 longestWordCount = senArr[i].length;
                 longestWord = senArr[i];
             } 
        } else {
            senArr[i].length = 0;
        }
    }
    return longestWord;
 
 }
 
 //First Factorial
 function FirstFactorial(num) { 
     if (num == 0) {
         return 1;
     } else {
          return num * FirstFactorial(num - 1);
     }
 }
 
 //First Reverse
function FirstReverse(str) { 
let strArr = str.split('');
// code goes here  
let reverseStr = strArr.reverse().join('');
return reverseStr;
}

//Letter Changes
function LetterChanges(str) { 
let newStr = '';
for (var i = 0; i < str.length; i++) {
if(96 < str.charCodeAt(i)  && str.charCodeAt(i) < 123) {
  newStr += String.fromCharCode(str.charCodeAt(i) + 1);
} else {
    newStr += str[i];
}
}
let newStrVowel = '';
for (var i = 0; i < newStr.length; i++) {
if (newStr[i] === "a" || newStr[i] === "e" || newStr[i] === "i" || newStr[i] === "o" || newStr[i] === "u") {
    // console.log(newStr[i]);
    newStrVowel += newStr[i].toUpperCase();
} else {
    newStrVowel += newStr[i];
}
}
return newStrVowel;
}

//Simple Adding
function SimpleAdding(num) { 
if (num === 0) {
return 0;
}
else {
return num + SimpleAdding(num - 1);
}
}

//Letter Capitalize
function LetterCapitalize(str) {
let newArr = [];
strArray = str.split(' ');
for(let word of strArray) {
word = word.charAt(0).toUpperCase() + word.substr(1);
newArr.push(word);
}
return newArr.join(' ');
}

//Simple Symbols
function SimpleSymbols(str) { 

if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
return false;
}
else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
return false;
}
else {
return true; 
}

}

//Check Nums
function CheckNums(num1,num2) { 
if (num1 == num2) {
return -1;
} else if (num2 > num1) {
return true;
} else {
return false;
}
}

//Time Convert
function TimeConvert(num) { 
let hour = Math.floor(num / 60)
let minutes = num - (hour * 60);
return hour + ":" + minutes;

}

//AlphabetSoup
function AlphabetSoup(str) { 
let strArr = str.split('');
let sortedStrArr = strArr.sort();
return sortedStrArr.join('');

}

//Kaprekars Constant
function KaprekarsConstant(num) {
const KAP = 6174;
var count = 0;
while (true) {
var num = evaluator(num)
if (num === true) {
    return count;
}
}

function evaluator(num) {
count++
var minNumArr = num.toString().split('').sort();
var maxNumArr = minNumArr.slice(0).reverse();
var littleNum = parseInt(minNumArr.join(''), 10);
var bigNum = parseInt(maxNumArr.join(''), 10);
while (bigNum < 1000) {
    bigNum = bigNum * 10;
}

return bigNum - littleNum === KAP ? true : bigNum - littleNum;
}
}

KaprekarsConstant(3524);

function addition(num) {
return num + 1;
}

addition(9);

function farmProblem(chickens, cows, pigs) {
return (chickens * 2) + (cows * 4) + (pigs * 4);
}

farmProblem(2,3,5);

function multiply(a, b){
return a * b;
}

function disemvowel(str) {
  return str.replace(/[aeiouAEOIU]/g, "");
  
}

  function duplicateCount(text) {
  	let freq = {};
    for (var i = 0; i < text.length; i++) {
    	let character = text.toLowerCase().charAt(i);
    	if (freq[character]) {
    		freq[character]++;
    	} else {
				freq[character] = 1;
			}
    }
		var count = 0;
    for (const [key, value] of Object.entries(freq)) {
/*     console.log(key, value); */
    if (value > 1) {
    	count ++;
    }
    }
    return count;
  }
  function disemvowel(str) {
    return str.replace(/[aeiouAEOIU]/g, "");
    
  }

  function DNAStrand(dna) {
    let dnaArray = dna.split('');
    newArray = [];
   dnaArray.forEach(function(letter) {
     if(letter == 'A') {
       newArray.push('T');
     } else if(letter == 'T') {
       newArray.push('A');
     } else if(letter == 'C') {
       newArray.push('G');
     } else if(letter == 'G') {
       newArray.push('C');
     }
   })
   return newArray.join('');
  }
  
  function duplicateCount(text) {
  	let freq = {};
    for (var i = 0; i < text.length; i++) {
    	let character = text.toLowerCase().charAt(i);
    	if (freq[character]) {
    		freq[character]++;
    	} else {
				freq[character] = 1;
			}
    }
		var count = 0;
    for (const [key, value] of Object.entries(freq)) {
/*     console.log(key, value); */
    if (value > 1) {
    	count ++;
    }
    }
    return count;
  }

  function toWeirdCase(string){
    var res = [];
    var k = 0;
    
    for (var i=0; i<string.length; i++){
       res.push( k%2==0 ? string[i].toUpperCase(): string[i].toLowerCase() );
       k++;
       if (string[i] == ' ') k=0;
    }
    return res.join("");
  }

  function pascalsTriangle(n) {
    var arr = [];
    for (var row = 0; row < n; row++) {
      arr[row] = [];
      for (var col = 0; col < row + 1; col++) {
        if (col ===0 | col === row) {
          arr[row][col] = 1;
        } else {
          arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
        }
      }
    }
    var flatArr = arr.reduce(function(a, b) {
      return a.concat(b);
    });
    return flatArr;
  }

  //Count characters in your string
  function count (string) {  
    var strObj = {};
    var strArr = string.split('');
    strArr.map(function(element) {
      if(strObj.hasOwnProperty(element)) {
        strObj[element] = strObj[element] + 1;
      } else {
        strObj[element] = 1;
        }
      });
     return strObj;
  }

  //Break Camel Case Strings - from CodeWars
  function solution(string) {
    let endStrArr = string.match(/[A-Z][a-z]+/g).join(' ');
    let begStrArr = string.match(/[a-z]+/g)[0];
    let sepString = begStrArr + " " + endStrArr;
    return sepString;
  }