---
title: '[Data Structure] Hash table'
date: '2020-07-30T15:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_hash'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Linear'
description: '선형 자료구조 - 해시 테이블 정리'
---

## 해시 테이블 (Hash Table)

<center><i>"키를 값에 매핑할 수 있는 구조"</i></center>

- 대부분 연산의 시간 복잡도 O(1)
- 데이터 양에 관계 없이 빠른 성능 기대

## 해시 (Hash)

<center><i>"해시 함수 : 임의 크기 데이터를 고정 크기 값으로 매핑"</i></center>

- 해시 함수 통과 시 2바이트의 고정 크기 값으로 매핑
  - ABC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> &nbsp;&nbsp; A1
  - 1324BC -> &nbsp;&nbsp; CB
  - AF32B &nbsp; -> &nbsp;&nbsp; D5
- 해싱(Hashing)
  - 해시 테이블을 인덱싱하기 위해 해시 함수를 사용하는 것
  - 정보를 빠르게 저장하고 검색하기 위해 사용
- 성능 좋은 해시 함수들의 특징

  - 해시 함수 값 충돌의 최소화
  - 쉽고 빠른 연산
  - 해시 테이블 전체에 해시 값 균일하게 분포
  - 사용할 키의 모든 정보를 이용하여 해싱
  - 해시 테이블 사용 효율이 높을 것

### 충돌 처리

- 개별 체이닝(seperate chaning)

  - 충돌 발생 시 연결 리스트로 연결
  - 가장 전통적인 해시 테이블 방식

- 오픈 어드레싱(open addresing)
  - 충돌 발생 시 빈 공간을 찾아나서는 방식
  - 무한정 저장할 수 있는 개별 체이닝과 달리 한정적
  - 파이썬의 해시 테이블인 딕셔너리에서 사용

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
