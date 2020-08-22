---
title: '[Node.js] Middleware'
date: '2020-08-21T16:01:42.169Z'
template: 'post'
draft: false
slug: 'nodejs_middleware'
category: 'Node.js'
tags:
  - 'Node.js'
description: 'Node.js - 자주 사용하는 미들웨어 정리'
---

## 미들웨어 (Middleware)

<center><i>"Express의 핵심"</i></center>

- 요청과 응답의 중간(middle)에 위치
- 위에서부터 아래로 순서대로 실행되며 요청과 응답 사이에 특별한 기능 추가 가능
- 미들웨어가 실행되는 경우
  - app.use(미들웨어) : 모든 요청에서 미들웨어 실행
  - app.use('/abc', 미들웨어) : abc로 시작하는 요청에서 실행
  - app.post('/abc', 미들웨어) : abc로 시작하는 POST 요청에서 실행

## morgan

- 요청과 응답에 대한 정보를 콘솔에 기록
- 개발 환경에서는 dev, 배포 환경에서는 combined 이용
- app.use(morgan('dev'));
  - [HTTP method][주소] [HTTP 상태 코드][응답 속도] - [응답 바이트]
  - GET / 500 7.409ms - 39

## static

- 정적인 파일들을 제공하는 라우터 역할
- 서버의 폴더 경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악 불가
  - 보안에 큰 도움
- app.use('요청 경로', express.static('실제 경로'));

## body-parser

- 요청의 본문에 있는 데이터를 해석해 req.body 객체로 만들어줌
- app.use(express.json());
- app.use(urlencoded({ extended: false }));
  - false : querystring 모듈을 사용하여 쿼리스트링 해석
  - true : qs 모듈(npm 패키지)을 사용하여 쿼리스트링 해석

## cookie-parser

- 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만들어줌
- app.use(cookieParser(비밀키));
  - 비밀키를 통해 만들어낸 서명을 쿠키 값 뒤에 붙임
  - name=sangmin.sign
  - 서명된 쿠키는 req.signedCookies 객체에 들어 있음

## express-session

- 세션 관리용 미들웨어
- 세션은 사용자별로 req.session 객체 안에 유지

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
