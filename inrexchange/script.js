let pricesInUSD = {
    "item1": 10.50,
    "item2": 25.00,
    "item3": 5.75,
    "item4": 17.99
  };
  
  let exchangeRate = 80; // 1 USD = 80 INR
  
  let pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, price]) => [item, price * exchangeRate])
  );
  
  console.log(pricesInINR);
  