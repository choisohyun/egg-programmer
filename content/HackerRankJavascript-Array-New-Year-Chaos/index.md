---
title: "[HackerRank][Javascript] Array - New Year Chaos"
tags: [undefined]
date: 2020-06-21 12:28:37
path: blog/HackerRankJavascript-Array-New-Year-Chaos
cover: ./no-image.png
excerpt: HackerRankJavascript-Array-New-Year-Chaos
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/255
# 문제

[New Year Chaos](https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=arrays)

# 문제 설명

>  
> 놀이기구를 기다리는 줄에서 뇌물이 최소 몇 번 오갔는지 구하는 문제.   
> (단, 한 사람이 뇌물을 3번 이상 준 경우는 Too chaotic을 결과로 해야 한다.)
> 

## 

문제 이해가 어려워 솔루션을 찾아보고 이해하는 방식을 택했다.  
입력값은 뇌물로 인해 순서가 뒤섞인 배열이고, 출력값은 숫자 또는 문자열이다. 

## 

1.   우선 뇌물을 주고받았는지를 찾기 위해 `` q ``의 길이만큼 반복문을 돈다.
2.   한 사람이 뇌물을 3번 이상 줬다면 자신의 원래 위치보다 3 이상 앞에 있을 것이다.
    
    *   이것을 바탕으로 `` q[i] ``는 현재 위치, `` i + 1 ``은 원래 위치로 두고 3 이상이면 `` Too chaotic ``을 반환하도록 한다.
    
    
    
3.   카오식하지 않다면 현재 위치보다 `` 1 또는 2 작은 위치 ``에서 뇌물을 주고받은 사람이 있는지 확인한다.
    
    *   현재 위치의 수보다 크다면 뇌물을 주고받은 것이다.
    
    
    
4.   뇌물을 주고받은 사람이 있으면 `` counter ``를 1씩 증가시켜 준다.
5.   최종 결과값인 `` counter ``를 반환한다.

*   솔루션을 보면서 이해해 보니 그렇게까지 어려운 문제는 아니었다. 문제가 길어도 진득하게 읽고 풀려고 해야겠다.

# 성공 코드

<pre><code class="language-js">function minimumBribes(q) {
  let counter = 0;

  for (let i = q.length - 1; i &gt;= 0; i--) {
    if (q[i] - (i + 1) &gt;= 3) return "Too chaotic";

    for (let j = Math.max(0, q[i] - 2); j &lt; i; j++) if (q[j] &gt; q[i]) counter++;
  }

  return counter;
}</code></pre>