---
title: "[Python] String manipulation"
date: "2020-07-25T17:01:42.169Z"
template: "post"
draft: false
slug: "python_string"
category: "Python"
tags:
  - "Python"
description: "파이썬 문자열 조작 정리"
---

## 슬라이싱 (Slicing)

<center><i>"파이썬이 제공하는 기능 중 가장 빠른 속도"</i></center>

- '안녕하세요' 문자열 슬라이싱

```{.python}
S = '안녕하세요'

S[1:4] == '녕하세'
S[1:-2] == '녕하'
S[1:] == '녕하세요'
S[:] == '안녕하세요'      # 사본 리턴 (참조가 아닌 값 복사)
S[1:100] == '안녕하세요'
S[-1] == '요'
S[-4] == '녕'
S[:-3] == '안녕'
S[-3:] == '하세요'
S[::1] == '안녕하세요'
S[::-1] == '요세하녕안'   # 뒤집기
S[::2] == '안하요'
```

## 정규식

- ^ : not

```{.python}
# 영숫자(alphanumeric)만 필터링
s = re.sub('[^a-z0-9]', '', s)

# 단어 문자가 아닌 모든 문자 공백으로 치환
s = re.sub('[^\w]', ' ', s)
```

## 여러 가지 정렬 방법

- sorted() : 정렬 결과 리턴

```{.python}
a = [2, 4, 1, 9, 7]
sorted(a)

b = 'zbdaf'
"".join(sorted(b))

# key 옵션
c = ['ccc', 'aaaa', 'd', 'bb']
sorted(c, key=len)    # 길이 순서로 정렬

# lambda 이용
a = ['cde', 'cfc', 'abc']
sorted(a, key=lambda x: (x[0], [-1]))
# 첫 문자열과 마지막 문자열 순으로 정렬
```

- sort() : 제자리 정렬(In-place Sort), 리턴값 없음

```{.python}
# 맞는 구문
a.sort()

# 잘못된 구문
b = a.sort()
```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
