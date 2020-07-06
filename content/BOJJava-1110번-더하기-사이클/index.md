---
title: "[BOJ][Java] 1110번 - 더하기 사이클"
tags: [undefined]
date: 2019-10-31 18:29:40
path: blog/BOJJava-1110번-더하기-사이클
cover: ./no-image.png
excerpt: BOJJava-1110번-더하기-사이클
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/11
## 문제

0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.

26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.

위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

## 출력

첫째 줄에 N의 사이클 길이를 출력한다.

## 예제 입력 1<span> </span>

26

## 예제 출력 1<span> </span>

4

## 예제 입력 2<span> </span>

55

## 예제 출력 2<span> </span>

3

## 예제 입력 3<span> </span>

1

## 예제 출력 3<span> </span>

60

&nbsp;

<h2 data-ke-size="size26">틀린 답 - while(true) 사용했을 때</h2>

런타임에러가 계속 나서 왜 이러나 했는데 while문에서 조건을 true로 둬서 생긴것같다

while문 안에서 뭔가 어긋나서 이렇게 된건가?? 모르겠다..ㅠ&nbsp;

(처음엔 컴파일 사이트(<https://ideone.com>)에서는 성공으로 떴는데 다시 해보니 백준이랑 똑같은 결과가 뜬다)

<script src="https://gist.github.com/choisohyun/b667aed43f5f28cef295c6a1f64c4a67.js"></script>

<h2 data-ke-size="size26">답(Java)</h2>

<script src="https://gist.github.com/choisohyun/d3209cc37bc69a925f9d8afcdcd13a60.js"></script>