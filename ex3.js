/**
 * 3. Find pairs of elements whose sum is equal to a given number
Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
 */

function ex3(arr, sum) {
  const result = [];
  function func(arr, sum) {
    const target = sum - arr[0];
    if (arr.length === 0) return;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push([arr[0], arr[i]]);
        func(arr.slice(1, i).concat(arr.slice(i + 1)), sum);
      }
    }
  }
  func(arr, sum);
  return result;
}
ex3([1, 7, 9, 2, 5, 3, 8], 10);
