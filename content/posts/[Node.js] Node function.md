---
title: "[Node.js] Node function"
date: "2020-08-14T20:01:42.169Z"
template: "post"
draft: false
slug: "nodejs_function"
category: "Node.js"
tags:
  - "Node.js"
description: "Node.js - 노드 기능 정리"
---

## REPL

- 노드의 콘솔
  - R : Read (읽고)
  - E : Eval (해석하고)
  - P : Print (결과물을 반환하고)
  - L : Loop (종료할 때까지 반복)

## 모듈 (Module)

- 노드는 코드를 모듈로 만들 수 있음
- 모듈 : 특정한 기능을 하는 함수나 변수들의 집합
  - 재사용 가능, 관리 용이

```{.javascript}
const BRING = require('PATH');

module.exports = GIVE;
```

## 내장 객체

- global

  - 브라우저의 window와 같은 전역 객체

- console

  - 디버깅 용도
  - console.time(LABEL) / console.timeEnd(LABEL) : 시간 측정
  - console.error(ERROR) : 콘솔에 에러 표시
  - console.table(ARRAY) : 객체의 속성들이 테이블 형식으로 표현
  - console.dir(OBJ, OPTION) : 객체를 콘솔에 표시
  - console.trace(LABEL) : 에러가 어디서 발생했는지 추적

- timer

  - setTimeout(CALLBACK, MILLISEC) : 밀리초 이후 콜백 함수 실행
  - setInterval(CALLBACK, MILLISEC) : 밀리초마다 콜백 함수 실행
  - setImmediate(CALLBACK) : 콜백 함수 즉시 실행

  - clearTimeout(ID) : setTimeout 취소
  - clearInterval(ID) : setInterval 취소
  - clearImmediate(ID) : setImmediate 취소

- process
  - 현재 실행되고 있는 노드 프로세스에 대한 정보
  - process.nextTick(CALLBACK) : 가장 먼저 처리
  - 마이크로태스크 : process.nextTick, Promise

## 파일 시스템

- 동기와 비동기, 블로킹과 논 블로킹
  - 동기 / 비동기 : 백그라운드 작업 완료 여부
  - 블로킹 / 논 블로킹 : 함수가 바로 return 되는지 여부

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
