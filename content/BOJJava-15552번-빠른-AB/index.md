---
title: "[BOJ][Java] 15552번 - 빠른 A+B"
tags: [undefined]
date: 2019-10-29 22:26:46
path: blog/BOJJava-15552번-빠른-AB
cover: ./no-image.png
excerpt: BOJJava-15552번-빠른-AB
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/6
<h4 data-ke-size="size20">&nbsp;</h4>

<https://www.acmicpc.net/problem/15552>

<h4 data-ke-size="size20">문제</h4>

본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync\_with\_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, __Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter__를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.

Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

자세한 설명 및 다른 언어의 경우는 <a href="https://www.acmicpc.net/board/view/22716" rel="noopener" target="_blank">이 글</a>에 설명되어 있다. --&gt; \[java\] BufferedWriter 외에도, StringBuilder로 출력을 모아 놓았다가 그 String을 System.out.println하는 방법도 있습니다.

<a href="https://www.acmicpc.net/blog/view/55" rel="noopener" target="_blank">이 블로그 글</a>에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

\[\#\#\_Image|kage@bc9BZt/btqzmTOzY0d/6lraQldP4QxTGnlJ6vNyJk/img.png|alignCenter||팁 중에 하나.. 그래 내가 오류지 채점이 오류겠어?\_\#\#\]

&nbsp;

<h4 data-ke-size="size20">입력</h4>

첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

<h4 data-ke-size="size20">출력</h4>

각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

<h4 data-ke-size="size20">예제 입력</h4>

5

1 <span style="letter-spacing: 0px;">1</span>

12 <span style="letter-spacing: 0px;">34</span>

5 <span style="letter-spacing: 0px;">500 </span>

<span style="letter-spacing: 0px;">40 60 </span>

<span style="letter-spacing: 0px;">1000 1000 </span>

<h4 data-ke-size="size20"><span style="letter-spacing: 0px;">예제 출력 </span></h4>

<span style="letter-spacing: 0px;">2 </span>

<span style="letter-spacing: 0px;">46 </span>

<span style="letter-spacing: 0px;">505 </span>

<span style="letter-spacing: 0px;">100 </span>

<span style="letter-spacing: 0px;">2000</span>

&nbsp;

<h4 data-ke-size="size20"><span style="letter-spacing: 0px;">문제 풀이</span></h4>

<span style="letter-spacing: 0px;">버퍼를 사용하는게 스캐너보다 빠른지 지금 알았다.. 어쩐지 많이 쓰더라,, </span>

Buffer 사용하여 입출력 받는 방법들을 간단하게 정리했다.

\[\#\#\_Image|kage@Ayqdn/btqzpHeUqAD/ZphLn1ixvDk3S4fKwpK480/img.png|alignCenter||\_\#\#\]

추가적인 Method는 여기(<https://coding-factory.tistory.com/251>)에 잘 설명되어 있다.

<h4 data-ke-size="size20"><span style="letter-spacing: 0px;">답 (Java)</span></h4>

&nbsp;

<script src="https://gist.github.com/choisohyun/bcb9b4c7bfe7ec3a74ed4a7ee7760271.js"></script>

\[\#\#\_Image|kage@U4oS7/btqzmkFJE8l/3sXTuTrEog3iRS0SEKXkXk/img.png|alignCenter||\_\#\#\]

근데 이렇게 버퍼 썼는데도 소요시간 무엇 ㄷㄷ 스캐너로는 꿈도 못꾸겠네.. 스캐너 안녕..