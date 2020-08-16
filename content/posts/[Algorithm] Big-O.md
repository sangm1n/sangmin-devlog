---
title: '[Algorithm] Big-O'
date: '2020-07-23T18:01:42.169Z'
template: 'post'
draft: false
slug: 'algorithm_big_o'
category: 'Algorithm'
tags:
  - 'Algorithm'
description: 'Big-O 개념 및 계산 복잡도 정리'
---

## 계산 복잡도

<center><i>"알고리즘은 Space-Time Tradeoff"</i></center>

- 시간 복잡도 (Time Complexity)

  - 알고리즘을 수행하는 데 걸리는 시간을 설명하는 계산 복잡도
  - 이를 표기하는 대표적인 방법이 Big-O

- 공간 복잡도 (Space Complexity)
  - 알고리즘의 메모리 사용량을 설명하는 계산 복잡도

## 빅오 (O, Big-O)

<center><i>"점근적 실행 시간을 표기할 때 가장 널리 쓰이는 표기법"</i></center>

- O(1) : 입력값이 아무리 커도 실행 시간이 일정한 최고의 알고리즘
  - 해시 테이블의 조회 및 삽입
- O(log n) : 여기서부터 실행 시간은 입력값에 영향 받음
  - 이진 검색
- O(n) : 선형 시간 알고리즘으로 수행하는 데 걸리는 시간이 입력값에 비례
  - 정렬되지 않은 리스트에서의 최댓값, 최솟값
- O(nlog n) : 대부분의 효율 좋은 정렬 알고리즘
- O(n<sup>2</sup>) : 버블 정렬과 같은 비효율적인 정렬 알고리즘
- O(2<sup>n</sup>) : 피보나치 수를 재귀로 계산하는 알고리즘
- O(n!) : 가장 느린 알고리즘
  - TSP(Traveling Salesman Problem)를 브루트 포스로 풀이하는 경우

<br>

<center><i>"빅오 표기법은 주어진(최선/최악/평균) 경우의 수행 시간의 상한을 나타낸다."</i></center>

- 빅오(O) : 상한 (upper bound) = 가장 늦게 실행될 때
- 빅세타(θ) : 평균
- 빅오메가(Ω) : 하한 (lower bound) = 가장 빨리 실행될 때

## 분할 상환 분석 (Amortized Analysis)

- 알고리즘의 복잡도 계산 시 최악의 경우만을 살펴보는 것은 지나치게 비관적이라는 이유로 등장
- 최악의 경우를 여러 번에 걸쳐 골고루 나눠주는 형태로 계산

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
