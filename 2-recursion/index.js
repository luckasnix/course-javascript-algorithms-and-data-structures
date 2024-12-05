const countDownRecursively = (num) => {
  if (num > 0) {
    console.log(num);
    num--;
    countDownRecursively(num);
  }
};

const factorialRecursively = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorialRecursively(num - 1);
};

const collectOddValues1 = (receivedNumbers) => {
  const odds = [];
  const pushOdd = (allNumbers) => {
    if (allNumbers.length > 0) {
      const firstNumber = allNumbers[0];
      if (firstNumber % 2 === 1) {
        odds.push(firstNumber);
      }
      pushOdd(allNumbers.slice(1));
    }
  };

  pushOdd(receivedNumbers);

  return odds;
};

const collectOddValues2 = (receivedNumbers) => {
  let odds = [];
  if (receivedNumbers.length === 0) {
    return odds;
  }
  let firstNumber = receivedNumbers[0];
  if (firstNumber % 2 === 1) {
    odds.push(firstNumber);
  }
  odds = odds.concat(collectOddValues2(receivedNumbers.slice(1)));
  return odds;
};
