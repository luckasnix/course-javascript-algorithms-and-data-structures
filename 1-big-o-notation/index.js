const firstSumNaturalsNumbers = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
};

const secondSumNaturalsNumbers = (number) => {
  return number * (number + 1) / 2;
};

const time1 = performance.now();

const firstResult = firstSumNaturalsNumbers(1000000);

const time2 = performance.now();

const secondResult = secondSumNaturalsNumbers(1000000);

const time3 = performance.now();

console.log('------ First Solution ------');
console.log(`Result: ${firstResult}`);
console.log(`Time: ${time2 - time1}ms`);
console.log('Complexity: O(n)');

console.log('------ Second Solution ------');
console.log(`Result: ${secondResult}`);
console.log(`Time: ${time3 - time2}ms`);
console.log('Complexity: O(1)');
