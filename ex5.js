/**
 * 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
			const arr2 = [3, 5, 9, 10, 88];
			=> [3,5,9]
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

function ex5(arr1, arr2) {
  return arr1.filter(
    (item, index) => arr2.includes(item) && arr1.indexOf(item) === index
  );
}
console.log(ex5(arr1, arr2));
