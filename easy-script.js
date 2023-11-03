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
		let comparison = '';
		if(this.age > other.age) {
			comparison = `younger than`
		} else if(this.age < other.age) {
			comparison = `older than`
		}else {
			comparison = `the same age as`
		}
		return `${other.name} is ${comparison} me.`
	}
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

//3 
function giveMeSomething(a) {
	return `something ${a}`
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