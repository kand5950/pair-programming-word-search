const transpose = function(letters) {
  const newArray = [];
  for (let col = 0; col < letters[0].length; col++) {
    newArray.push([]);
    for (let row = 0; row < letters.length; row++) {
      newArray[col].push(letters[row][col]);
       
    }
     
  }
  return newArray;
};
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  if (findWord(letters, word)) {
    return true;
  } if (findWord(transpose(letters), word)) {
    return true;
  }
  return false;
};
const findWord = (letters, word) => {
  const joined = letters.map(ls => ls.join(''));
  for (l of joined) {
    if (l.includes(word))
      return true;
    
  }
};
   
module.exports = wordSearch;