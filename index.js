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