const json = '{x: "10", y: "20"}';
const coords: { x: string; y: string } = JSON.parse(json);
console.log(coords);

//when we declare a variable on 1 line and initialize later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//when variable type cannot be inferred correctly
let nums = [-1, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < nums.length; index++) {
  if (nums[index] > 0) {
    numberAboveZero = nums[index];
  }
}
