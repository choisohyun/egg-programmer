---
title: "[BOJ][Java] 15595번 - 정답 비율 계산하기"
tags: [undefined]
date: 2019-10-30 01:34:30
path: blog/BOJJava-15595번-정답-비율-계산하기
cover: ./no-image.png
excerpt: BOJJava-15595번-정답-비율-계산하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/7
<https://www.acmicpc.net/problem/15595>

<figure contenteditable="false" data-ke-type="opengraph" data-og-description="첫째 줄에 어떤 문제의 총 제출 횟수 N(1 ≤ N ≤ 200,000)이 주어진다. 둘째 줄부터 N개의 줄에 각 제출의 정보가 제출 번호 순서대로 주어진다. 제출 정보는 총 7가지가 공백 하나로&nbsp;구분되어져 있으며, 다음과 같은 순서로 주어진다. 채점 번호: 1보다 크거나 같고, 8,000,000보다 작거나 같은 정수.&nbsp;채점 번호는 제출 순서이며, 두 개의 제출 정보가 같은 채점 번호를 갖는 경우는 없다. 유저 아이디: 길이가 20이하인 문자열, 알파벳 소" data-og-host="www.acmicpc.net" data-og-image="https://scrap.kakaocdn.net/dn/b87WUk/hyDszRi13L/2O8nbKgAZAQuQasj1vAXhk/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630" data-og-source-url="https://www.acmicpc.net/problem/15595" data-og-title="15595번: 정답 비율 계산하기" data-og-type="website" data-og-url="https://www.acmicpc.net/problem/15595" id="og_1572355834965"><a data-source-url="https://www.acmicpc.net/problem/15595" href="https://www.acmicpc.net/problem/15595" rel="noopener" target="_blank">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/b87WUk/hyDszRi13L/2O8nbKgAZAQuQasj1vAXhk/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630');">&nbsp;</div>
</a></figure>

<h4 data-ke-size="size20">문제</h4>

BOJ에서 정답 비율은 다음과 같은 공식을 통해서 계산한다.

정답 비율 = (문제를 맞은 사람의 수) / (문제를 맞은 사람의 수 + (문제를 맞은 각 사람이 그 문제를 맞기 전까지 틀린 횟수의 총 합)) × 100

틀린 횟수는 "맞았습니다!!" 이외의 결과를 받은 횟수를 의미한다. 문제를 맞은 사람은 관리자의 제출은 제외하고 계산해야 한다. 만약, 맞은 사람이 관리자를 제외하고 없는 경우 (분모가 0), 정답 비율은 0이다.

어떤 문제의 제출 현황이 주어졌을 때, 정답 비율을 계산하는 프로그램을 작성하시오.

&nbsp;

<h4 data-ke-size="size20">입력</h4>

\[\#\#\_Image|kage@H8yJs/btqzmTHRdeF/dOOn5Rd7xq5JWvZar7X1JK/img.png|alignCenter||\_\#\#\]

<h4 data-ke-size="size20">출력</h4>

첫째 줄에 문제의 정답 비율을 출력한다. 정답과의 절대/상대 오차는 10-9까지 허용한다.

<h4 data-ke-size="size20">예제</h4>

\[\#\#\_Image|kage@cftLCp/btqzoAm5cnh/Krldc92yxeDDjuoeRb1nzK/img.png|alignCenter||\_\#\#\]

<h4 data-ke-size="size20">문제 풀이</h4>

\[\#\#\_Image|kage@dE7gCE/btqzoz2MH5j/z6bdA9SOq4xioPUHCsgHkK/img.png|alignCenter||정답률이 50%가 넘어서 쉽겠네~ 하고 들어갔으나 맞은 사람이 85명일 때의 기분을 설명하시오\_\#\#\]

않이.. 자바 블로그&nbsp; 풀이도 없잖아요...ㅠㅠ

맵 어케쓰는지도 모르겠고 문제 이해도 처음에 제대로 못해서 괜히 변수형에 집착해서 시간뺏겼음 ㅠ

나중에 풀어볼게오..

&nbsp;

<h4 data-ke-size="size20">답 (Java)</h4>

<script src="https://gist.github.com/choisohyun/c2bfd9de98f33bf43998ef24ddbcd1aa.js"></script>

&nbsp;
&nbsp;