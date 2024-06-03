/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let j = 0;
    for(let i=0;i<t.length;i++){
        let flag = false;

        while(j<s.length)
        {
            
           if(s[j] === t[i]){
            flag = true;
            j++;
            break
           }


            j++;
        }
        if (!flag){
            return t.length - i;
        }


    }
    return 0;
    
};