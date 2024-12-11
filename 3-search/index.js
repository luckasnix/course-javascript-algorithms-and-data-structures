const linearSearch = (list, value) => {
  for (let i = 0; i < list.length; i++) {
    if (value === list[i]) {
      return i;
    }
  }

  return -1;
};

console.log('------ Linear Search ------');
console.log('Expect: 2');
console.log(`Received: ${linearSearch(['abacate', 'limão', 'maçã', 'uva', 'laranja'], 'maçã')}`);
console.log('Expect: 4');
console.log(`Received: ${linearSearch(['abacate', 'limão', 'maçã', 'uva', 'laranja'], 'laranja')}`);
console.log('Expect: -1');
console.log(`Received: ${linearSearch(['abacate', 'limão', 'maçã', 'uva', 'laranja'], 'pera')}`);

const binarySearch = (numberList, numberValue) => {
  const findIndex = (leftPointer, rightPointer) => {
    if (leftPointer > rightPointer) {
      return -1;
    }
    const floarMiddle = (rightPointer + leftPointer) / 2;
    const middlePointer = Math.floor(floarMiddle);
    if (numberList[middlePointer] === numberValue) {
      return middlePointer;
    }
    if (numberList[middlePointer] > numberValue) {
      return findIndex(leftPointer, middlePointer - 1);
    } else {
      return findIndex(middlePointer + 1, rightPointer);
    }
  };

  return findIndex(0, numberList.length - 1);
};

console.log('------ Binary Search ------');
console.log('Expect: 3');
console.log(`Received: ${binarySearch([1, 4, 5, 7, 10, 12, 15, 23, 26, 31, 42], 7)}`);
console.log('Expect: 10');
console.log(`Received: ${binarySearch([1, 4, 5, 7, 10, 12, 15, 23, 26, 31, 42], 42)}`);
console.log('Expect: 7');
console.log(`Received: ${binarySearch([1, 4, 5, 7, 10, 12, 15, 23, 26, 31, 42], 23)}`);
console.log('Expect: -1');
console.log(`Received: ${binarySearch([1, 4, 5, 7, 10, 12, 15, 23, 26, 31, 42], 9)}`);

const countSubstringMatches = (str, substr) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (substr === str.substring(i, i + substr.length)) {
      counter++;
    }
  }

  return counter;
};

console.log('------ Substring Matches Counting ------');
console.log('Expect: 2');
console.log(`Received: ${countSubstringMatches('abracadabra', 'bra')}`);
console.log('Expect: 0');
console.log(`Received: ${countSubstringMatches('algoritmo', 'var')}`);
