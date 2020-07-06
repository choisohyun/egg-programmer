---
title: "[HackerRank][Javascript] Arrays: Left Rotation"
tags: [undefined]
date: 2020-06-14 15:50:23
path: blog/HackerRankJavascript-Arrays-Left-Rotation
cover: ./no-image.png
excerpt: HackerRankJavascript-Arrays-Left-Rotation
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/254
# 문제

[Arrays: Left Rotation](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=arrays)

# 문제 설명

>  
> 1차원 배열이 전해진 숫자만큼 오른쪽으로 회전하도록 만드는 문제.
> 

leetcode의 rotate array 문제보다 덜 까다로운 문제이다.  
leetcode에서는 추가 메모리를 사용하면 안됐기 때문에 하나씩 떼어서 붙여주는 방식을 택했다.  
이번 문제는 splice를 시켜 바로 concat으로 붙여 주어 간단하게 해결했다. 

*   단, 문제의 입력값 중에 d가 a의 길이보다 크다면 나머지 값으로 계산하는 등의 예외 처리는 해 주면 더 좋을 것 같다. 일단 나는 통과과 되어서 따로 해 주지는 않았다.

# 성공 코드

<pre><code class="language-js">const rotLeft = (a, d) =&gt; a.concat(a.splice(0, d));</code></pre>