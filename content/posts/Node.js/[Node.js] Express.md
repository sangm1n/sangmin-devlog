---
title: '[Node.js] Express framework'
date: '2020-08-21T15:01:42.169Z'
template: 'post'
draft: false
slug: 'nodejs_express'
category: 'Node.js'
tags:
  - 'Node.js'
description: 'Node.js - Express 프레임워크 정리'
---

## Express

- Node.js web application framework

```{.javascript}
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
```

- app.set('port', 포트) : 서버가 실행될 포트 선정
  - app.set(키, 값)으로 저장한 데이터를 app.get(키)로 가져올 수 있음
- app.get(주소, 라우터) : 주소에 대한 GET 요청이 올 때의 동작
  - req : 요청에 대한 정보가 들어 있는 객체
  - res : 응답에 관한 정보가 들어 있는 객체

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
