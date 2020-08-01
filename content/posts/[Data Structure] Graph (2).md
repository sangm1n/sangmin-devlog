---
title: "[Data Structure] Graph (2)"
date: "2020-08-01T19:01:42.169Z"
template: "post"
draft: false
slug: "data_structure_graph2"
category: "Data Structure"
tags:
  - "Data Structure"
  - "Non-Linear"
description: "비선형 자료구조 - 그래프 정리 (2)"
---

## DFS

- 재귀 구조로 구현

```{.python}
def recursive_dfs(v, discovered=[]):
    discovered.append(v)
    for w in graph[v]:
        if not w in discovered:
            discovered = recursive_dfs(w, discovered)
    return discovered

>>> f'recursive dfs: {recursive_dfs(1)}'
'recursive dfs: [1, 2, 5, 6, 7, 3, 4]
```

- 스택을 이용한 반복 구조로 구현

```{.python}
def iterative_dfs(start_v):
    discovered = []
    stack = [start_v]
    while stack:
        v = stack.pop()
        if v not in discovered:
            discovered.append(v)
            for w in graph[v]:
                stack.append(w)
    return discovered

>>> f'iterative dfs: {iterative_dfs(1)}'
'iterative dfs: [1, 4, 3, 5, 7, 6, 2]
```

- 재귀 DFS와 스택 DFS의 순서 차이
  - 재귀 DFS : 사전식 순서로 방문
  - 스택 DFS : 스택이기 때문에 가장 마지막부터 방문 (역순으로 방문)

## BFS

- 큐를 이용한 반복 구조로 구현

```{.python}
def iterative_bfs(start_v):
    discovered = [start_v]
    queue = [start_v]
    while queue:
        v = queue.pop(0)
        for w in graph[v]:
            if w not in discovered:
                discovered.append(w)
                queue.append(w)
    return discovered

>>> f'iterative bfs: {iterative_bfs(1)}'
'iterative bfs: [1, 2, 3, 4, 5, 6, 7]
```

## 백트래킹 (Backtracking)

<center><i>"가능성이 없다고 판단되면 즉시 포기"</i></center>

- 주로 재귀로 구현
- 탐색을 하다가 더 갈 수 없으면 왔던 길을 되돌아가 다른 길을 찾음
- 최악의 경우에는 모든 경우를 다 탐색하기 때문에 브루트 포스와 유사하지만 가능성이 없는 경우에는 즉시 후보를 포기한다는 점에서 훨씬 우아한 방식

## 제약 충족 문제 (CSP)

<center><i>"Constraint Satisfaction Problems"</i></center>

- 제약 충족 문제 : 수많은 제약 조건을 충족하는 상태를 찾아내는 문제
- 가지치기를 통해 제약 충족 문제를 최적화하므로 백트래킹 알고리즘이 필수적

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
