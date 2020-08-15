---
title: "[Node.js] ES2015+ (ES6)"
date: "2020-08-14T19:01:42.169Z"
template: "post"
draft: false
slug: "nodejs_javascript"
category: "Node.js"
tags:
  - "Node.js"
description: "ES2015+ (ES6) 훑기"
---

## var / const / let

```{.javascript}
if (true) {
    var x = 3;
}
console.log(x);     // 3

if (true) {
    const y = 3;
}
console.log(y);     // Uncaught ReferenceError: y is not defined
```

- var : 함수 스코프를 가지므로 if문의 블록과 관계없이 접근 가능
- const / let : 블록 스코프를 가지므로 블록 밖에서 접근 불가

#### const vs let

- const : 한 번 값을 할당하면 다른 값 할당 불가 (상수)
- let : 다른 값 할당 가능

## 템플릿 문자열

- 백틱(`)으로 감싸기

```{.javascript}
const num1 = 1;
const num2 = 2;
const result = 3;
const string = `${num1} 더하기 ${num2}는 '${result}'`;
console.log(string);
```

## 객체 리터럴

```{.javascript}
var es = 'ES';
var sayNode = function() {
    console.log('Node');
}
var oldObject = {
    sayJS: function() {
          console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic';

const newObject = {
  sayJS() {
      console.log('JS');
  },
  sayNode,
  [es+6]: 'Fantastic',
};
```

- 코드의 중복을 피할 수 있어 편리
- 객체의 속성명 동적으로 생성 가능

## 화살표 함수 (arrow function)

```{.javascript}
function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;
```

- add1 = add2 = add3 = add4
- not1 = not2

## 구조분해 할당

```{.javascript}
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array
```

- 객체와 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있음

## 프로미스

- 실행은 바로 하되 결과를 나중에 받는 객체
- 결과는 실행이 완료된 후 then이나 catch 메서드를 통해 받음

## async / await

- 프로미스를 사용한 코드를 한 번 더 줄여줌

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
