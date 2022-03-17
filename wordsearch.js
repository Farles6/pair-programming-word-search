const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        
    }
        let arr = [];
        for (let i = 0; i < letters[0].length; i++){
          arr.push([]);
      }
      for (let a = 0; a < letters.length; a++){
        for (let b = 0; b < letters[a].length; b++){
          arr[b][a] = letters[a][b];
        }
        
        const verticalJoin = arr.map(as => as.join(''))
        for (x of verticalJoin) {
            if (x.includes(word)) return true
      }
    }
    return false;
    };

   
module.exports = wordSearch