function nonAvailableChange(coins) {
  coins.sort((a,b) => a - b);
  let currentValue = 0;
  for (let coin of coins) {
      if (coin > currentValue + 1) return currentValue + 1;
      
      currentValue += coin;
  }
  
  return currentValue + 1;
}