const solution = (arr) => {
  const minLen = 2;
  const maxLen = 10;

  if (arr.length < minLen) {
    throw new Error(`arr.length should be more that ${minLen}`);
  }

  if (arr.length > maxLen) {
    throw new Error(`arr.length should be less that ${maxLen}`);
  }

  if (!Array.isArray(arr)) {
    throw new Error('arr should be array');
  }

  const sum = arr.reduce((acc, curr, index) => acc + curr, 0);

  if (sum % 2 !== 0) {
    return false;
  }

  const sumArray = [];
  const numberOfCombinations = 2 ** arr.length;
  for (let idx = 0; idx < numberOfCombinations; idx += 1) {
    let subSetSum = 0;
    for (let setElementIndex = 0; setElementIndex < arr.length; setElementIndex += 1) {
      if (idx & (1 << setElementIndex)) {
        subSetSum += arr[setElementIndex];
      }
    }
    sumArray.push(subSetSum);
  }

  return sumArray.indexOf(sum / 2) > -1;
};

console.log('----------------------------------------------');

console.time('assert # 1');
console.log(solution([1, 2, 3, 4, 6, 7, 8, 9]));
console.timeEnd('assert # 1');

console.log('----------------------------------------------');

console.time('assert # 2');
console.log(solution([10, 7, 8, 20, 15]));
console.timeEnd('assert # 2');

console.log('----------------------------------------------');

console.time('assert # 3');
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.timeEnd('assert # 3');

console.log('----------------------------------------------');
