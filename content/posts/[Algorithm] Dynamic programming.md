---
title: "[Algorithm] Dynamic programming"
date: "2020-08-05T21:01:42.169Z"
template: "post"
draft: false
slug: "algorithm_dynamic_programming"
category: "Algorithm"
tags:
  - "Algorithm"
description: "알고리즘 - 다이나믹 프로그래밍 정리"
---

## 다이나믹 프로그래밍 (Dynamic Programming)

<center><i>"Optimal substructure problem"</i></center>

- 문제를 각각의 작은 문제로 나누어 해결한 결과를 큰 문제의 결과와 합하여 풀이하는 알고리즘
- 최적 부분 구조를 갖고 있는 문제
  - 문제의 최적 해결 방법이 부분 문제에 대한 최적 해결 방법으로 구성되는 문제

#### 그리디 알고리즘 vs 다이나믹 프로그래밍

- 그리디 알고리즘
  - 그 순간에 최적이라고 생각되는 것을 선택하면서 풀이
- 다이나믹 프로그래밍
  - '중복된' 하위 문제들의 결과를 저장해뒀다가 풀이

#### 알고리즘과 풀이 가능한 문제들의 특징

<table style="border: 1px solid gray; padding: 5px">
  <th>알고리즘</th>
  <th>풀이 가능한 문제의 특징</th>
  <th>풀이 가능한 문제</th>
  <tr>
    <td>다이나믹 프로그래밍</td>
    <td> - 최적 부분 구조<br>
         - 중복된 하위 문제들 </td>
    <td> - 0-1 배낭 문제<br>
         - 피보나치 수열<br>
         - 다익스트라 알고리즘 </td>
  </tr>
  <tr>
    <td>그리디 알고리즘</td>
    <td> - 최적 부분 구조<br>
         - 탐욕 선택 속성 </td>
    <td> - 분할 가능 배낭 문제<br>
         - 다익스트라 알고리즘 </td>
  </tr>
  <tr>
    <td>분할 정복</td>
    <td> - 최적 부분 구조 </td>
    <td> - 병합 정렬<br>
         - 퀵 정렬 </td>
  </tr>
</table>

### 최적 부분 구조

- 서울에서 부산까지 가는 최단 경로

  - 서울에서 대구까지 가는 최단 경로와
  - 대구에서 부산까지 가는 최단 경로로 구성

- 최적 부분 구조 (optimal substructure)
  - 분할 정복
  - 그리디 알고리즘
  - 다이나믹 프로그래밍

### 중복된 하위 문제들

- 피보나치 수열 : 다이나믹 프로그래밍
  - 재귀로 풀면 반복적으로 동일한 하위 문제들 발생
  - f(1) = 1, f(2) = 1
  - f(3) = f(2) + f(1)
  - f(4) = f(3) + f(2) = (f(2) + f(1)) + f(2)
  - f(5) = f(4) + f(3) = (f(3) + f(2)) + f(3)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = {(f(2) + f(1)) + f(2)} + f(2) + f(1)
- 병합 정렬 : 분할 정복
  - 중복 문제가 발생하지 않기 때문

### 다이나믹 프로그래밍 방법론

- 상향식 (bottom-up)

  - 타뷸레이션(tabulation)
  - 하위 문제부터 살펴본 다음, 작은 문제의 정답을 이용해 큰 문제의 정답을 풀이

- 하향식 (top-down)
  - 메모이제이션(memoization)
  - 하위 문제에 대한 정답을 계산했는지 확인해가며 자연스러운 방식으로 풀이

### 0-1 배낭 문제

- 짐을 쪼갤 수 없는 배낭 문제
- 모든 경우의 수 계산

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
