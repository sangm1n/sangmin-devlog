---
title: "[Node.js] Node"
date: "2020-08-14T18:01:42.169Z"
template: "post"
draft: false
slug: "nodejs_start"
category: "Node.js"
tags:
  - "Node.js"
description: "Node.js - 개념 정리"
---

## What is Node.js ?

<center><i>"Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임"</i></center>

- 서버 (Server)

  - 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 또는 프로그램

- 클라이언트 (Client)

  - 요청을 보내는 주체 (브라우저, 프로그램, 모바일 앱 등)

- 런타임 (Runtime)

  - 특정 언어로 만든 프로그램들을 실행할 수 있는 환경
  - 쉽게 말해 노드 = 자바스크립트 실행기

![image](https://user-images.githubusercontent.com/46131688/90219973-382e7d00-de42-11ea-8a6f-77d7fc214c96.png)

## libuv library

- 이벤트 기반 (event-driven)

  - 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식
  - 이벤트 발생 시 이벤트 리스너에 등록해둔 콜백 함수 호출

- 논 블로킹 I/O

  - 이전 작업이 완료될 때까지 대기하지 않고 다음 작업 수행
  - 같은 작업을 더 짧은 시간에 처리 가능
  - setTimeout(CALLBACK, 0)

- 싱글 스레드

  - 스레드가 하나뿐인 것
  - 자바스크립트 코드가 동시에 실행될 수 없는 이유

#### 프로세스 vs 스레드

- 프로세스 (process)

  - 운영체제에서 할당하는 작업의 단위
  - 프로세스 간 자원 공유 X

- 스레드 (thread)
  - 프로세스 내에서 실행되는 흐름의 단위
  - 프로세스는 스레드를 여러 개 생성해 작업을 동시에 처리
  - 자원 공유 가능

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
