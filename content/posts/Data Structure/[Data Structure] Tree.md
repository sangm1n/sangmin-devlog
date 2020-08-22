---
title: '[Data Structure] Tree'
date: '2020-08-01T12:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_tree'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Non-Linear'
description: '비선형 자료구조 - 트리 정리'
---

## 트리 (Tree)

<center><i>"Recursively defined self-referential data structure"</i></center>

- 재귀로 정의된 자기 참조 자료구조

  - 트리는 자식도 트리고 또 그 자식도 트리

### 트리의 각 명칭

- 트리는 항상 루트(root)에서부터 시작
- 루트는 자식(child) 노드를 가지며 간선(edge)으로 연결
- 차수(degree) : 자식 노드의 개수
- 크기(size) : 자신을 포함한 모든 자식 노드의 개수
- 높이(height) : 현재 위치에서부터 리프(leaf)까지의 거리
- 깊이(depth) : 루트에서부터 현재 노드까지의 거리
- 레벨(level) : 0부터 시작

### 그래프 vs 트리

<center><i>트리는 순환 구조를 갖지 않는 그래프</i></center>

- 그래프

  - 순환 구조
  - 단방향, 양방향 모두 가능

- 트리
  - 순환 구조를 갖지 않음
  - 단방향 (부모 노드에서 자식 노드를 가리킴)
  - 단 하나의 부모 노드, 루트 또한 하나

### 이진 트리 (Binary Tree)

<center><i>모든 노드의 차수가 2 이하</i></center>

- 정 이진 트리(full binary tree)
  - 모든 노드가 0개 또는 2개의 자식 노드를 가짐
- 완전 이진 트리(complete binary tree)
  - 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있음
  - 마지막 레벨의 노드는 가장 왼쪽부터 채워져 있음
- 포화 이진 트리(perfect binary tree)

  - 모든 노드가 2개의 자식 노드를 가짐
  - 모든 리프 노드가 동일한 깊이 또는 레벨을 가짐

### 이진 탐색 트리 (BST)

- 정렬된 이진 트리
- 왼쪽 서브트리에는 그 노드의 값보다 작은 값들
- 오른쪽 서브트리에는 그 노드의 값보다 큰 값들
- 탐색 시 시간 복잡도 O(log n)

#### 자가 균형 이진 탐색 트리

- 삽입, 삭제 시 자동으로 높이를 작게 유지
- AVL 트리, 레드-블랙 트리

### 트리 순회

- 전위(pre-order) 순회 : NLR
- 중위(in-order) 순회 : LNR
- 후위(post-order) 순회 : LRN

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
