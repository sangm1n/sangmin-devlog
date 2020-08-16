---
title: '[Python] List & Dictionary'
date: '2020-07-24T16:01:42.169Z'
template: 'post'
draft: false
slug: 'python_list_dict'
category: 'Python'
tags:
  - 'Python'
description: '파이썬 리스트와 딕셔너리 구조와 원리 및 문법 정리'
---

## 리스트 (List)

<center><i>"순서대로 저장하는 시퀀스이자 변경 가능한 동적 배열"</i></center>

- 리스트 주요 연산

<table style="border: 1px solid gray; padding: 5px">
  <th>연산</th>
  <th>시간복잡도</th>
  <th>설명</th>
  <tr>
    <td>len(a)</td>
    <td>O(1)</td>
    <td>전체 요소의 개수 리턴</td>
  </tr>
    <td>a[i]</td>
    <td>O(1)</td>
    <td>인덱스 i의 요소</td>
  <tr>
    <td>a[i:j]</td>
    <td>O(k)</td>
    <td>i부터 j까지 k개의 요소</td>
  </tr>
    <td>elem in a </td>
    <td>O(n)</td>
    <td>elem 요소가 존재하는지 확인</td>
  <tr>
    <td>a.count(elem)</td>
    <td>O(n)</td>
    <td>elem 요소의 개수 리턴</td>
  </tr>
    <td>a.index(elem)</td>
    <td>O(n)</td>
    <td>elem 요소의 인덱스 리턴</td>
  <tr>
    <td>a.append(elem)</td>
    <td>O(1)</td>
    <td>리스트 마지막에 elem 요소 추가</td>
  </tr>
  <tr>
    <td>a.pop()</td>
    <td>O(1)</td>
    <td>리스트 마지막 요소 추출 (스택 연산)</td>
  </tr>
  <tr>
    <td>a.pop(0)</td>
    <td>O(n)</td>
    <td>리스트 첫번째 요소 추출 (큐 연산)</td>
  </tr>
  <tr>
    <td>del a[i]</td>
    <td>O(n)</td>
    <td>i에 따라 다른데 최악의 경우 O(n)</td>
  </tr>
  <tr>
    <td>a.sort()</td>
    <td>O(nlog n)</td>
    <td>Timsort 사용</td>
  </tr>
  <tr>
    <td>min(a), max(a)</td>
    <td>O(n)</td>
    <td>전체 선형 탐색 필요</td>
  </tr>
  <tr>
    <td>a.reverse()</td>
    <td>O(n)</td>
    <td>뒤집기</td>
  </tr>
</table>

- 리스트 활용 방법

```{.python}
# 리스트 선언
a = list()
a = []

# IndexError 예외 처리
try:
    print(a[9])
except IndexError:
    print('존재하지 않는 인덱스')

# 리스트 요소 추가
a.insert(3, 5)    # 인덱스 지정
a.append(4)       # 리스트 마지막에 추가

# 리스트 요소 가져오기
a[3]              # 인덱스 지정
a[1:3]            # slicing
a[1:4:2]          # step

# 리스트 요소 삭제
del a[2]          # 인덱스로 삭제
a.remove(3)       # 값으로 삭제
a.pop(3)          # 삭제될 값을 리턴하고 삭제 수행
```

## 딕셔너리 (Dictionary)

<center><i>"Key : Value 구조로 이뤄진 해시 테이블"</i></center>

- 딕셔너리 주요 연산
  - collections.OrderedDict() : 항상 입력 순서 유지
  - collections.defaultdict() : 항상 디폴트 값 생성 (키 오류 방지)
  - collections.Counter() : 요소의 값을 키로 하고 개수 카운팅

<table style="border: 1px solid gray; padding: 5px">
  <th>연산</th>
  <th>시간 복잡도</th>
  <th>설명</th>
  <tr>
    <td>len(a)</td>
    <td>O(1)</td>
    <td>요소 개수 리턴</td>
  </tr>
    <td>a[key]</td>
    <td>O(1)</td>
    <td>키를 조회하여 값 리턴</td>
  <tr>
    <td>a[key] = value</td>
    <td>O(1)</td>
    <td>키/값 삽입</td>
  </tr>
  <tr>
    <td>key in a</td>
    <td>O(1)</td>
    <td>키가 존재하는지 확인</td>
  </tr>
  <tr>
  </tr>
</table>

- 딕셔너리 활용 방법

```{.python}
# 딕셔너리 선언 및 초기화
a = dict()
a = {}
a = {'key1': 'value1', 'key2': 'value2'}

# KeyError 예외 처리
try:
    print(a['key4'])
except KeyError:
    print('존재하지 않는 키')

# 딕셔너리 키/값 조회
for k, v in a.items():
    print(k, v)

# 딕셔너리 키 삭제
del a['key']
```

<hr>

> <center><i>참고 : 「파이썬 알고리즘 인터뷰」</i></center>
