---
title: '[Node.js] What is npm ?'
date: '2020-08-16T18:01:42.169Z'
template: 'post'
draft: false
slug: 'nodejs_npm'
category: 'Node.js'
tags:
  - 'Node.js'
description: 'Node.js - npm (node package manager) 정리'
---

## npm (Node Package Manager)

- 자바스크립트 프로그램 패키지 모음

## package.json으로 패키지 관리

- 노드 프로젝트 시작 전 반드시 폴더 내부에 package.json 만들고 시작
- npm은 package.json을 만드는 명령어 제공

```{.javascript}
npm init

// example
{
  "name": "npm_test",
  "version": "0.0.1",
  "description": "node package manager test !",
  "main": "index.js",
  "scripts": {
    "test": "echo"
  },
  "author": "sangmin",
  "license": "ISC"
}
```

## 패키지 버전

- SemVer(Semantic Versioning) 방식

  - 버전을 구성하는 세 자리가 모두 의미를 갖고 있음

- ex) 1.0.7

  - 1 (major version) : 하위 호환이 되지 않는 변경 사항
  - 0 (minor version) : 하위 호환이 되는 변경 사항
  - 7 (patch version) : 간단한 버그 수정

- 새 버전 배포 후에는 내용 수정 금지
- 버전 앞에 붙는 문자
  - ^ : minor version까지만 설치
  - ~ : patch version까지만 설치
  - @latest : 안정된 최신 버전 패키지 설치
  - @next : 가장 최근 배포판 설치 (안정 X)

## 기타 npm 명령어

- npm outdated : 업데이트할 수 있는 패키지 확인
- npm update [패키지명] : 업데이트
- npm uninstall [패키지명] / npm rm [패키지명] : 삭제
- npm search [검색어] : npm 패키지 검색
- npm info [패키지명] : 패키지의 세부 정보 파악
- npm adduser : npm 로그인
- npm whoami : 로그인 한 사용자가 누구인지 알림

<hr>

> <center><i>참고 : 「Node.js 교과서」</i></center>
