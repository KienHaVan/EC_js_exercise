/**
 * 4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
 */

//using set
function ex4_1(arr) {
  return [...new Set(arr)];
}

//not using set
function ex4_2(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

ex4_1([1, 2, 3, 1, 2, 3, 4, 5, 6, 4]);
ex4_2([1, 2, 3, 1, 2, 3, 4, 5, 6, 4]);
