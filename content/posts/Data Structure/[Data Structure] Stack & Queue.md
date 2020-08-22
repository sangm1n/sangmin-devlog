---
title: '[Data Structure] Stack & Queue'
date: '2020-07-29T19:01:42.169Z'
template: 'post'
draft: false
slug: 'data_structure_stack_queue'
category: 'Data Structure'
tags:
  - 'Data Structure'
  - 'Linear'
description: '선형 자료구조 - 스택과 큐 정리'
---

## 스택 (Stack)

<center><i>"잔뜩 쌓아둔 접시"</i></center>

- LIFO (Last In First Out) : 후입선출
- push() : 요소를 컬렉션에 추가
- pop() : 가장 최근에 삽입된 요소 제거

## 큐 (Queue)

<center><i>"맛집에 줄 서기"</i></center>

- FIFO (First In First Out) : 선입선출
- 시퀀스의 한쪽 끝(rear)에 엔티티 추가
- 다른 반대쪽 끝(front)에서는 제거

## 원형 큐 (Circular Queue)

<center><i>"Ring buffer"</i></center>

- 기존의 큐는 공간이 꽉 차면 더 이상 요소 추가 불가
- 큐의 마지막 위치와 시작 위치 연결
- enQueue() : 요소 삽입하고 rear 포인터 앞으로 이동
- deQueue() : 요로 삭제하고 front 포인터 앞으로 이동

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
