// 문제 1: let과 const의 차이점 이해하기
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// -> 3 3 3 0 1 2 / var은 함수 스코프고 let은 블록 스코프이기 때문

// 문제 2: 화살표 함수와 this 바인딩
const person = {
  name: 'Alice',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet();
// -> Hello, undefined! / 화살표 함수는 스코프가 정적으로 렉시컬 스코프에 따라서 결정되기 때문

// 문제 3: 템플릿 리터럴로 문자열 조합하기
const day = 'Monday';
const weather = 'sunny';

console.log(`Today is ${day} and the weather is ${weather}`);

// 문제 4: 객체 디스트럭처링 활용하기
const user = {
  name2: 'Bob',
  age: 25,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

const {name2, age} = user;
const {address: {city}} = user;

console.log(name2);
console.log(age);
console.log(city);

// 문제 5: 스프레드 연산자로 배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1,...arr2];

console.log(arr3);

// 문제 6: 클래스 상속과 메서드 오버라이딩
class Animal {
  speak() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const dog = new Dog();

dog.speak();

// 문제 7: 제너레이터를 이용한 이터러블 객체 생성
async function* numGenerator(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

(async () => {
  for await (const num of numGenerator()){
    console.log(num);
  }
})();

// 문제 8: 심볼을 이용한 객체의 비공개 프로퍼티
const sym1 = Symbol('id');

const user2 = {
  name3: '홍길동',
  [sym1] : 123
};

console.log(Object.keys(user2));

// 문제 9: 프록시를 이용한 속성 값 유효성 검사
const target = {
  message : 1234
};

const handler = {
  get: function (obj, property){
    if (typeof obj[property] !== 'number'){
      return "not a number";
    } else{
      return "number"
    }
  }
};

const proxy = new Proxy(target,handler);

console.log(proxy.message);

// 문제 10: Promise와 async/await 비교
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// 문제 11: Array.prototype.includes() 활용
const numbers = [1, 3, 5, 7, 9];

console.log(numbers.includes(7));

// 문제 12: 객체의 Rest/Spread 프로퍼티
const person2 = { name4: 'Eve', age: 28, city: 'Paris' };
const {name4, ...details} = person2;
console.log(details);

// 문제 13: Object.fromEntries()를 사용한 객체 생성
const entries = [
  ['fruit', 'apple'],
  ['color', 'red'],
];

const obj = Object.fromEntries(entries);

console.log(obj);

// 문제 14: Null 병합 연산자 (??) 사용하기
let value = null ?? 'default';

console.log(value);

// 문제 15: 옵셔널 체이닝 (?.) 활용
const order = {
  id: 1,
  // customer: { name: 'Frank' },
};

console.log(order?.customer?.name);

// 문제 16: 동적 임포트를 이용한 모듈 로딩
// math.js
export function add(a, b) {
  return a + b;
}

import('./math.js')
  .then((module) => console.log(module))
  .catch((err) => console.log(err));


// 문제 17: String.prototype.replaceAll() 사용하기
const fruit = 'banana';
const newFruit = fruit.replaceAll('a', 'o');

console.log(newFruit);

// 문제 18: Promise.any()를 이용한 빠른 응답 받기
const p1 = new Promise((resolve) => setTimeout(resolve, 300, '첫 번째'));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, '두 번째'));
const p3 = new Promise((resolve) => setTimeout(resolve, 100, '세 번째'));

Promise.any([p1,p2,p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

  // 문제 19: 클래스 필드 선언과 초기화
  class Car {
    brand = "bmw";
    color = 'red';
    constructor(brand, color){
      this.brand = brand;
      this.color = color;
    }
  }

  // 문제 20: Array.prototype.at() 메서드 활용
  const letters = ['x', 'y', 'z'];

  console.log(letters.at(-1));