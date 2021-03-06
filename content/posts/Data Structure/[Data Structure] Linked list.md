---
title: '[Data Structure] Linked List'
date: '2020-07-29T17:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_linked_list'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Linear'
description: '선형 자료구조 - 연결 리스트 정리'
---

## 연결 리스트 (Linked List)

<center><i>"데이터의 순서가 메모리에 물리적인 순서대로 저장되지는 않는다."</i></center>

- 데이터를 구조체로 묶어 포인터로 연결한다는 개념
- 다양한 추상 자료형(ADT, Abstract Data Type) 구현의 기반
- 동적으로 새로운 노드의 삽입 및 삭제 간편
- 배열과 달리 특정 인덱스에 접근하기 위해서는 전체를 순서대로 읽어야 함
- 시간복잡도
  - O(n) : 탐색
  - O(1) : 시작 또는 끝 지점에 아이템 추가, 삭제 및 추출

## Runner 기법

<center><i>"연결 리스트 순회 시 2개의 포인터 이용"</i></center>

- Fast runner가 연결 리스트의 끝에 도달하면, Slow runner는 정확히 연결 리스트의 중간 지점을 가리킨다.
  - Fast runner : 두 칸씩 이동
  - Slow runner : 한 칸씩 이동

```{.python}
rev = None
slow = fast = head

while fast and fast.next:
    fast = fast.next.next
    rev, rev.next, slow = slow, rev, slow.next

if fast:
    slow = slow.next
```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
