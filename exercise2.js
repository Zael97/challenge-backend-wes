const array = [1, 2, 3, 5, 6, 8, 9];

const newArray = array.map(n=>n**2).sort((a,b)=>a-b);

console.log(newArray);