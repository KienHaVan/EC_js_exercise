/**
 * 7. 	I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
	Write a function with 1 input parameter, an return a new object like this:
	{'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of 'face', 'zalo', 'gmail' in the array

Example: 		const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
			const myFunc = (inputArr) => {
				//write somthing here
			}
			console.log(myFunc(myArr)) // {'face': 2, 'zalo': 3, 'gmail':1}
 */

function ex7(arr) {
  const freq = {};
  for (let value of arr) {
    freq[value] = (freq[value] || 0) + 1;
  }
  return freq;
}
console.log(ex7(['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']));
