/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    var res = []
    var first = words[0]
    var arr = words
    var char = ""
     for (let i =0; i< first.length; i++){
            char = first[i]
            var flag = true;
            for (let j = 0;j<arr.length;j++){
                let x = arr[j].indexOf(char)
                if (x === -1){
                    flag = false;
                    break;
                }
         }
            if (flag){
                res.push(char)
                for (let k = 0; k< arr.length;k++){
            arr[k]=arr[k].replace(char,"")     
                }
            }
   
     }
    return res
};