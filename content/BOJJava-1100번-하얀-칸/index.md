---
title: BOJJava-1100번-하얀-칸
tags: [javascript]
date: 2019-10-31 16:29:33
path: blog/BOJJava-1100번-하얀-칸
cover: './no-image.jpg'
excerpt: BOJJava-1100번-하얀-칸
---

<h4 data-ke-size="size20">문제</h4>

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

<h4 data-ke-size="size20">입력</h4>

첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)

<h4 data-ke-size="size20">출력</h4>

각 테스트 케이스마다 A+B를 출력한다.

<h4 data-ke-size="size20">예제 입력</h4>

1 1

2 3

3 4

9 8

5 2

<h4 data-ke-size="size20">예제 출력</h4>

2

5

7

17

7

<h4 data-ke-size="size20">틀린 답 - BufferedReader와 StringTokenizer 사용했을 때 --&gt; 런타임 에러</h4>

아니 왜..???? 심지어 tokenizer 써서 맞은 블로그 그대로 따라도 해봤는데 런타임 에러 뜸

왜죠????????????????????????????????

느려도 scanner를 써야 되는 상황도 있는건가.. 하.. ㅠㅠ

토큰쓰는법 누가알려조.....

<script src="https://gist.github.com/choisohyun/2f1b3bc86b962533c4f29863f1099262.js"></script>

<h4 data-ke-size="size20">답 (Java)</h4>

while문 + 스캐너의 hasNextInt() 사용하면 간단하게 구현 가능

<script src="https://gist.github.com/choisohyun/30f9a9c85f33c6c79a2855ddc94d2063.js"></script>

&nbsp;
