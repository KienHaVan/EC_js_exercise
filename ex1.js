/**
 1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

Example: 	array1 = [1,2,3,4,5,6];
			array2 = [3,4,8,9,12];
			=> [3,4]
 */

function sameElement(arr1, arr2) {
  const result = [];
  const obj1 = {};
  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }
  for (let value of arr2) {
    if (obj1[value]) {
      result.push(value);
    }
  }
  return result;
}

sameElement([1, 2, 3], [3, 4, 5]);
