---
title: '[Python] Itertools'
date: '2020-09-16T17:01:42.169Z'
template: 'post'
draft: false
slug: 'python_itertools'
category: 'Python'
tags:
  - 'Python'
description: '파이썬 Itertools 모듈 정리'
---

## Itertools

<center><i>"효율적인 반복을 위한 함수"</i></center>

## 조합 반복자

- product()

  - 중첩된 for loop에 해당하는 곱집합(cartesian product)

  ```{.python}
  import itertools

  itertools.product('abcd', repeat=2)
  # result : aa ab ac ad ba bb bc bd ca cb cc cd da db dc dd

  itertools.product('abc', 'def')
  # result : ad, ae, af, bd, be, bf, cd, ce, cf
  ```

- permutations()

  - 두 번째 인자 길이만큼의 tuple, 가능한 모든 순서, 반복 X

  ```{.python}
  import itertools

  itertools.permutations('abcd', 2)
  # result : ab ac ad ba bc bd ca cb cd da db dc
  ```

- combinations()

  - 두 번째 인자 길이만큼의 tuple, 정렬된 순서, 반복 X

  ```{.python}
  import itertools

  itertools.combinations('abcd', 2)
  # result : ab ac ad bc bd cd
  ```

- combinations \_with \_replacement()

  - 두 번째 인자 길이만큼의 tuple, 정렬된 순서, 반복 O

  ```{.python}
  import itertools

  itertools.combinations_with_replacement('abcd', 2)
  # result : aa ab ac ad bb bc bd cc cd dd
  ```
