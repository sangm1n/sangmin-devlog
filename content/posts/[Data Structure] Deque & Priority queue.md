---
title: "[Data Structure] Deque & Priority queue"
date: "2020-07-31T14:01:42.169Z"
template: "post"
draft: false
slug: "data_structure_deque"
category: "Data Structure"
tags:
  - "Data Structure"
  - "Linear"
description: "선형 자료구조 - 데크와 우선순위 큐 정리"
---

## 데크 (Deque)

<center><i>"Double-Ended Queue"</i></center>

- 양쪽에서 삽입, 삭제 처리 가능
- 스택과 큐의 특징을 모두 갖고 있음
- 이중 연결 리스트로 구현하는 것이 가장 어울림

```{.python}
import collections
d = collections.deque()
type(d)
```

## 우선순위 큐 (Priority Queue)

<center><i>"각 요소의 우선순위와 연관"</i></center>

- 특정 조건에 따라 우선순위가 가장 높은 요소 추출
- Dijkstra algorithm, Heap과 관련

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
