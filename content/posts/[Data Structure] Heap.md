---
title: '[Data Structure] Heap'
date: '2020-08-01T18:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_heap'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Non-Linear'
description: '비선형 자료구조 - 힙 정리'
---

## 힙 (Heap)

<center><i>"트리 기반의 자료구조"</i></center>

- 힙은 정렬된 구조가 아니며 주로 배열로 구현
- 이진 힙 : 자식이 둘인 힙
- 최소 힙 : 부모가 항상 자식보다 작은 값
- 최대 힙 : 부모가 항상 자식보다 큰 값

### 힙 연산

- 삽입 : 업힙(up-heap) 연산

  - 요소를 가장 하위 레벨의 최대한 왼쪽에 삽입
  - 부모 값과 비교해 값이 더 작은 경우 위치 변경
  - 계속해서 부모 값과 비교해 위치 변경
  - 시간 복잡도 : O(log n)

- 추출 : 다운힙(down_heap) 연산
  - 루트 추출
  - 비어 있는 루트에 가장 마지막 요소 삽입
  - 자식 값과 비교해 값이 더 작은 경우 위치 변경
  - 계속해서 자식 값과 비교해 위치 변경
  - 시간 복잡도 : O(log n)

### 이진 힙 vs 이진 탐색 트리 (BST)

- 이진 힙 : 상하 관계 보장

  - 최소 힙에서의 최솟값 추출 O(1)
  - 최대 힙에서의 최댓값 추출 O(1)
  - 우선순위 큐에 활용

- 이진 탐색 트리 : 좌우 관계 보장
  - 부모는 왼쪽 자식보다 크고, 오른쪽 자식보다는 작거나 같음
  - 탐색과 삽입 모두 O(log n)

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
