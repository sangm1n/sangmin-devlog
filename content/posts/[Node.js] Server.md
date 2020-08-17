---
title: '[Node.js] http 모듈과 서버'
date: '2020-08-15T20:01:42.169Z'
template: 'post'
draft: false
slug: 'nodejs_server'
category: 'Node.js'
tags:
  - 'Node.js'
description: 'Node.js - http 모듈로 서버 만들기'
---

## 요청과 응답

- 클라이언트에서 서버로 요청(request)을 보내고
- 서버에서는 요청을 처리한 뒤 클라이언트에 응답(response)

```{.javascript}
const http = require('http');

http.createServer((req, res) => {
      // 어떻게 응답할지
})
  .listen(PORT_NUMBER, () => {
      // 서버 연결
  });
```

## HTTP 상태 코드

- 2XX : 성공을 알리는 상태 코드
  - 200 : 성공
- 3XX : 리다이렉션(다른 페이지로 이동)을 알리는 상태 코드
  - 301 : 영구 이동
  - 302 : 임시 이동
- 4XX : 요청 오류
  - 400 : 잘못된 요청
  - 404 : 찾을 수 없음
- 5XX : 서버 오류
  - 500 : 내부 서버 오류

## REST

<center><i>"REpresentational State Transfer"</i></center>

- 서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방법 (약속)
- HTTP 요청 메소드
  - GET : 서버 자원을 가져오고자 할 때 사용
  - POST : 서버에 자원을 새로 등록하고자 할 때 사용
  - PUT : 서버 자원을 요청에 들어 있는 자원으로 치환하고자 할 때 사용
  - PATCH : 서버 자원의 일부만 수정하고자 할 때 사용
  - DELETE : 서버 자원을 삭제하고자 할 때 사용
  - OPTIONS : 요청을 하기 전에 통신 옵션을 설명하기 위해 사용
- 'RESTful하다' = REST를 따르는 서버

## 쿠키와 세션

- 쿠키 (Cookie)
  - 유효 기간 존재
  - 'key-value' 쌍으로 존재
- 세션 (Session)
  - 서버에 사용자 정보 저장
  - 클라이언트와는 세션 아이디로만 소통

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
