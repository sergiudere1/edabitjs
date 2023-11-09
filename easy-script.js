//1
function addUp(num) {
  let nr = 0;
  for (i = 1; i <= num; i++) nr += i;
  return nr;
}

//2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    let comparison = "";
    if (this.age > other.age) {
      comparison = `younger than`;
    } else if (this.age < other.age) {
      comparison = `older than`;
    } else {
      comparison = `the same age as`;
    }
    return `${other.name} is ${comparison} me.`;
  }
}
p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

//3
function giveMeSomething(a) {
  return `something ${a}`;
}

//4
function minMax(arr) {
  let minMaxArr = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  minMaxArr.push(min);
  minMaxArr.push(max);
  return minMaxArr;
}
//5
// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
}

//6
// Given a number, return the total sum of that number multiplied by every number between 1 and 10.
// Examples
// multiSum(1) ➞ 55
// // 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
// multiSum(6) ➞ 330
// // 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330
// multiSum(10) ➞ 550
// multiSum(8) ➞ 440
// multiSum(2) ➞ 110
let sum = 0;
function multiSumX(num, ten = 10) {
  if (ten === 0) {
    return sum;
  } else {
    sum = sum + num * ten;
    return multiSumX(num, ten - 1);
  }
}
