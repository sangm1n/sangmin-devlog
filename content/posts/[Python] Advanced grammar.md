---
title: "[Python] Advanced grammar"
date: "2020-07-24T16:01:42.169Z"
template: "post"
draft: false
slug: "python_"
category: "Python"
tags:
  - "Python"
description: "파이썬 개발 역량을 높여줄 고급 문법 정리"
---

## 인덴트 (Indent)

<center><i>공백 4칸 들여쓰기</i></center>

- 코드 첫 번째 줄에 파라미터 있는 경우

```{.python}
foo = long_function_name(var_one, var_two,
                         var_three, var_four)
```

- 첫 번째 줄에 파라미터가 없는 경우

```{.python}
def long_function_name(
      var_one, var_two,
      var_three, var_four):
  print(var_one)
```

## 네이밍 컨벤션 (Naming Convention)

<center><i>Snake case vs Camel case</i></center>

```{.python}
# Python : Snake case
snake_case: int = 1

# Java : Camel case
camelCase: int = 1
```

## 타입 힌트 (Type Hind)

<center><i>동적 타이핑 언어지만 타입 힌트 지원</i></center>

```{.python}
# 타입 힌트 사용 X
def fn(a):
    ...

# 타입 힌트 사용 O
def fn(a: int) -> bool:
    ...
```

타입 힌트 사용 시 fn() 함수의 파라미터 a는 정수형이고 리턴 값으로 True나 False를 리턴할 것이라는 점을 명확히 알 수 있다.

## 리스트 컴프리헨션 (List Comprehension)

<center><i>기존 리스트를 기반으로 새로운 리스트 만들기</i></center>

```{.python}
# 홀수인 경우 2를 곱해 출력
[n * 2 for n in range(1, 11) if n % 2 == 1]
```

## 제너레이터 (Generator)

<center><i>루프의 반복 동작 제어</i></center>

- yield 구문 사용
- 중간값을 리턴한 다음 함수는 종료되지 않고 계속 실행

```{.python}
def get_natural_number():
    n = 0
    while True:
        n += 1
        yield n
```

- next()로 다음 값 추출

```{.python}
g = get_natural_number()
for _ in range(0, 100):
    print(next(g))
```

## range

<center><i>range()는 range 클래스 리턴</i></center>

```{.python}
# 숫자 100만 개 생성
a = [n for n in range(1000000)]
b = range(1000000)
```

- 메모리 점유율 : a > b
  - a : 이미 생성된 값이 담겨 있다.
  - b : 생성해야 한다는 조건만 존재한다.

## enumerate

<center><i>순서가 있는 자료형을 enumerate 객체로 리턴</i></center>

- 인덱스를 자동으로 부여

```{.python}
# a = ['a1', 'b2', 'c3'] 리스트의 인덱스와 값을 함께 출력
for i in range(len(a)):
    print(i, a[i])

# enumerate 이용
for i, v in enumerate(a):
    print(i, v)
```

## // 나눗셈 연산자

<center><i>몫을 구하는 연산자</i></center>

- divmod() : 몫과 나머지 동시에 구하기

```{.python}
divmod(5, 3)
```

## print

<center><i>코딩테스트 시 출력이 아닌 디버깅 용도</i></center>

```{.python}
# A1 B2
print('A1', 'B2')

# A1,B2
print('A1', 'B2', setp=',')

# aa bb (줄바꿈 무시)
print('aa', end=' ')
print('bb')

# 리스트 출력
a = ['A', 'B']
print(' '.join(a))

# f-string(formated string literal)
idx = 1
fruit = 'Apple'
print(f'{idx + 1}: {fruit}')
```

## pass

<center><i>pass = null operation</i></center>

- 아무것도 하지 않는 기능
  - 인덴트 오류 같은 불필요한 오류 방지

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
