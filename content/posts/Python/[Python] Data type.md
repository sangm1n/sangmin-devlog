---
title: '[Python] Data type'
date: '2020-07-23T14:10:42.169Z'
template: 'post'
draft: false
slug: 'python_datatype'
category: 'Python'
tags:
  - 'Python'
description: '파이썬이 제공하는 자료형과 각 자료형 특징 정리'
---

## 숫자

<center><i>"object > int > bool"</i></center>

- 정수형
  - int : 숫자 정수형
  - bool : 엄밀히 따지면 논리형 자료형이지만 내부적으로 1(True)과 0(False)로 처리되는 int의 서브 클래스
- 실수
  - float

## 매핑 (Mapping)

- 딕셔너리 : 키와 자료형으로 구성된 복합 자료형

```{.python}
a = {'a': 'A', 'b': 'B', 'c': 'C'}
```

## 집합

- set : 중복된 값을 갖지 않는 자료형

```{.python}
# 빈 집합
a = set()

# 값이 포함된 집합
a = {1, 2, 3}
```

## 시퀀스 (Sequence)

<center><i>"특정 대상의 순서 있는 나열"</i></center>

- 불변(Immutable)
  - str : 문자열을 이루는 자료형
  - tuple : 리스트와 비슷 (차이는 불변 여부)
  - bytes
- 가변(Mutable)
  - list : 다양한 값들을 배열 형태의 순서 있는 나열로 구성

## 객체

<center><i>"파이썬은 모든 것이 객체다."</i></center>

파이썬에서 변수 할당 = 해당 객체에 대한 참조

- 불변 객체

```{.python}
10
a = 10
b = a
```

## 비교 연산자

<center><i>"is와 ==는 엄연히 다르다."</i></center>

- is : id() 값을 비교하는 함수
- == : 값을 비교하는 연산자

```{.python}
a = [1, 2, 3]

# True
a == copy.deepcopy(a)

# False
a is copy.deepcopy(a)
```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
