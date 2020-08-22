---
title: '[Data Structure] Graph (1)'
date: '2020-07-31T18:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_graph1'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Non-Linear'
description: '비선형 자료구조 - 그래프 정리 (1)'
---

## 그래프 (Graph)

<center><i>"객체의 일부 쌍들이 연관되어 있는 객체 집합 구조를 뜻한다."</i></center>

### 오일러 경로

- 오일러 정리(Euler's Theorem)

  - 모든 정점이 짝수 개의 차수(degree)를 갖는다면 모든 다리를 한 번씩만 건너서 도달하는 것이 성립

- 오일러 경로(Eulerian trail / Eulerian path)
  - 모든 간선을 한 번씩 방문하는 유한 그래프 (한붓 그리기)

### 해밀턴 경로

- 해밀턴 경로(Hamiltonian path)

  - 각 정점을 한 번씩 방문하는 무향 또는 유향 그래프 경로
  - NP-Complete problems

- 해밀턴 순환(Hamiltonian cycle)

  - 원래의 출발점으로 돌아오는 경로
  - TSP(Travelling Salesman Problem) : 외판원 문제 (최단 경로)

- 오일러 경로 vs 해밀턴 경로
  - 오일러 경로 : 간선 기준
  - 해밀턴 경로 : 정점 기준

### 그래프 순회 (Graph Traversals)

<center><i>"그래프 각 정점을 방문하는 과정"</i></center>

- DFS(Depth-First Search) : 깊이 우선 탐색

  - 스택이나 재귀로 구현
  - 백트래킹을 통해 뛰어난 효용

- BFS(Breadth-First Search) : 너비 우선 탐색
  - 큐로 구현
  - 그래프의 최단 경로 구하는 문제

#### 그래프 표현

- 인접 행렬(Adjacency matrix)

- 인접 리스트(Adjacency list)

  - 출발 노드를 키로, 도착 노드를 값으로 표현

  ```{.python}
  graph = {
      1: [2, 3, 4],
      2: [5],
      3: [5],
      4: [],
      5: [6, 7],
      6: [],
      7: [3],
  }
  ```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
