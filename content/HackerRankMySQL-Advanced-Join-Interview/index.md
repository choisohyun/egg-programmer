---
title: "[HackerRank][MySQL] Advanced Join Interview"
tags: [undefined]
date: 2019-10-29 20:13:13
path: blog/HackerRankMySQL-Advanced-Join-Interview
cover: ./no-image.png
excerpt: HackerRankMySQL-Advanced-Join-Interview
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/4
<h4 data-ke-size="size20">문제</h4>

\[\#\#\_Image|kage@beq55Y/btqzokRQnTg/MolcgC0g656Ug4KeeKfJQK/img.png|alignCenter||\_\#\#\]\[\#\#\_Image|kage@r7qBU/btqzntuXQPM/YcjbiAXrVk3kbZIZDTjoeK/img.png|alignCenter||\_\#\#\]\[\#\#\_Image|kage@clm5Mf/btqzmT1LKe9/ZmpQuEUoD6FFZuAY37cLrK/img.png|alignCenter||\_\#\#\]\[\#\#\_Image|kage@bfeszU/btqzl5VR2pk/Rz02uBo4cuJBW9CDMGafQ1/img.png|alignCenter||\_\#\#\]\[\#\#\_Image|kage@vVp1W/btqzl5O7iXd/v4h2NABpDQKmrZ7USgCETK/img.png|alignCenter||\_\#\#\]

&nbsp;

<h4 data-ke-size="size20">문제 설명</h4>

테이블: Contests, Colleges, Challenges, View\_Stats, Submission\_stats

<span style="color: #333333;">조건: contest\_id,</span><span style="color: #333333;">&nbsp;</span><span style="color: #333333;">hacker\_id,</span><span style="color: #333333;">&nbsp;</span><span style="color: #333333;">name,</span><span style="color: #333333;">&nbsp;</span><span style="color: #333333;">total\_submissions의 합,</span><span style="color: #333333;">&nbsp;</span><span style="color: #333333;">total\_accepted\_submissions의 합,</span><span style="color: #333333;">&nbsp;</span><span style="color: #333333;">total\_views의 합, </span><span style="color: #333333;">total\_unique\_views의 합을 __출력__해야 한다.</span>

<span style="color: #333333;">contest\_id를 기준으로 __정렬__한다.</span>

<span style="color: #333333;">4개의 합계 모두 __0일 경우 출력 결과에서 제외__된다.</span>

참고: 1Contest - N Colleges, 1 College - 1 Contest

&nbsp;

<h4 data-ke-size="size20">문제 풀이</h4>

Join: Contents - Colleges, <span style="color: #333333;">Colleges -</span> Challenges,

<span style="color: #333333;">left join: Challenges - View\_Stats, <span style="color: #333333;">View\_Stats - Submission\_Stats</span></span>

<span style="color: #333333;"><span style="color: #333333;">여기서 left join은 왼쪽 테이블의 모든 레코드와 오른쪽 테이블이 일치된 레코드를 반환하게 하는 조인이다.</span></span>

오른쪽 테이블에 왼쪽 테이블과 일치하는 항목이 없더라도 왼쪽 테이블의 모든 레코드를 반환한다. 일치하는 항목이 없으면 NULL이 입력된다.

(참고: <a href="https://www.w3schools.com/sql/sql_join_left.asp" rel="noopener" target="_blank">https://www.w3schools.com/sql/sql\_join\_left.asp</a>)

\[\#\#\_Image|kage@lcLd5/btqzpGNu5Vv/m4yKuDtBgK2BekbFEsUJJ1/img.png|alignCenter||\_\#\#\]

left join을 쓰는 이유는 값을 빼먹지 않기 위해서다.

그냥 조인을 쓰면 결과가 아래와 같이 나온다.

\[\#\#\_Image|kage@WxKgj/btqzpG75eSv/KFpVZLFWuK3kSCWtr3PqnK/img.png|alignCenter||\_\#\#\]

이건 left 조인 사용했을 때의 결과다. 비슷해 보이지만 sum 값들을 비교해 보면 값이 빠져서 합쳐진걸 볼 수 있다.&nbsp;

left join을 사용하는 이유는 테이블을 연결시킬 때 놓치는 값이 없게 하기 위해서인 것 같다.

\[\#\#\_Image|kage@bA4a6M/btqzqepI6R8/PZDzpH5Ai5iwYjTflXsZN0/img.png|alignCenter||\_\#\#\]

<h4 data-ke-size="size20">답 (MySQL)</h4>

&nbsp;

<script src="https://gist.github.com/choisohyun/7abe1f55aea076884ee02659b88b5fc7.js"></script>

&nbsp;