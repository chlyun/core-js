/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.
//                                   동물
// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 객체의 프로토타입 [[Prototype]]  => __proto__

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    // setter
    this.stomach.push(food);
  },
  get eat() {
    // getter
    return this.stomach;
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger,
};

// animal.setEat('고기')

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

// const a1 = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

Tiger.bark = function (sound) {
  return sound;
};

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger
// Tiger.prototype = a1

const 금강산호랑이 = new Tiger('금순이');

const 시베리아호랑이 = Tiger('시순이');

/* 함수의 메서드 (함수의 능력) */

// call  , , ,
// apply  [ , , ]

// bind

// throttle, debounce

const arr = [1, 2, 3, 4];

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

// sum.call(this) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

// const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함

// first.addEventListener('click',b)

const user = {
  sayHi() {
    function sayBye(a, b, c) {
      console.log(this);
    }
    sayBye.call(this, 1, 2, 3);
  },
};

/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {
  legs = 4;
  tail = true;

  constructor(name) {
    this.name = name;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');

class Tiger extends Animal {
  static options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  static bark(sound) {
    return sound + '🐯';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');

class Array extends Object {
  constructor() {}

  forEach(callback, arg) {}

  reduce() {}
  map() {}

  static isArray() {}

  static from() {}
}

new Array();

// Model   (데이터)
// View    (랜더링)
// Control (이벤트)

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

const button2 = new Todo({
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2',
});
