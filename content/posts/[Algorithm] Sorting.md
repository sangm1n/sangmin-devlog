---
title: '[Algorithm] Sorting'
date: '2020-08-01T21:01:42.169Z'
template: 'post'
draft: false
slug: 'algorithm_sorting'
category: 'Algorithm'
tags:
  - 'Algorithm'
description: '알고리즘 - 정렬 정리'
---

## 정렬 (Sorting)

<center><i>"알고리즘의 꽃"</i></center>

- 버블 정렬 (Bubble sort)

  - 연달아 있는 아이템 2개의 순서가 잘못되어 있으면 맞바꿈
  - 시간 복잡도 : O(n<sup>2</sup>)

  ```{.python}
  def bubblesort(A):
      for i in range(1, len(A)):
          for j in range(0, len(A)-1):
              if A[j] > A[j+1]:
                  A[j], A[j+1] = A[j+1], A[j]
  ```

- 병합 정렬 (Merge sort)

  - 분할 정복(divide and conquer)의 진수를 보여주는 알고리즘
  - 각각 더 이상 쪼갤 수 없을 때까지 분할한 후 분할이 끝나면 정렬하면서 병합
  - 시간 복잡도 : O(nlog n)

- 퀵 정렬 (Quick sort)

  - 피벗(pivot)을 기준으로 좌우를 나눔
  - 피벗보다 작으면 왼쪽, 크면 오른쪽
  - 로무토 파티션 : 항상 맨 오른쪽의 피벗을 택하는 방식
  - 시간 복잡도 : 평균적으로 O(nlog n)이나 최악의 경우 O(n<sup>2</sup>)

  ```{.python}
  def quicksort(A, low, high):
      def partition(low, high):
          pivot = A[high]
          left = low
          for right in range(low, high):
              if A[right] < pivot:
                  A[left], A[right] = A[right], A[left]
                  left += 1
          A[left], A[high] = A[high], A[left]
          return left

      if low < high:
          pivot = partition(low, high)
          quicksort(A, low, pivot-1)
          quicksort(A, pivot+1, high)
  ```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
