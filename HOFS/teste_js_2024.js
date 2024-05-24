const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => {
  return (num * 2)/2;
});
console.log(doubled);
let newDoubled = doubled.filter((el) => el >=5);
newDoubled.push(4, 9, 8)
console.log(newDoubled);
