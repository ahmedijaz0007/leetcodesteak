/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var arr = []
    var count = 0
 for (index of s){
    let x = arr.indexOf(index)
     if (x !== -1){
         arr.splice(x,1)
         count +=2
     }
     else{
        arr.push(index)
     }
 }
 
 if(arr.length >0){
     count++
 }
 return count;
 };