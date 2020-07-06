---
title: "[HackerRank][Javscript] Counting Valleys"
tags: [undefined]
date: 2020-06-07 17:36:58
path: blog/HackerRankJavscript-Counting-Valleys
cover: ./no-image.png
excerpt: HackerRankJavscript-Counting-Valleys
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/250
# 문제

[Counting Valleys](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup)

# 문제 설명

>  
> 골짜기에 내려갔다가 도로 원래 위치로 올라오는 횟수를 구하는 문제
> 

#### 문제 조건

*   입력되는 문자열에서 `` U ``는 1씩 올라가는 것, `` D ``는 1씩 내려가는 것을 표현한다.
*   그림에 있는 평행선은 시작하는 지점, 즉 __0__을 의미한다.
*   시작 지점(0)에서 올라갔다가 내려와서 0이 되는 것은 count에 포함되지 않는다.

![IMG_7D6847127D74-1](https://user-images.githubusercontent.com/30427711/83962561-5a9f9980-a8d9-11ea-99e2-aab9ad0d4a4c.jpeg)

1.   문제 조건을 따라 처음에는 `` U와 D ``를 조건문으로 나눠 1씩 더하거나 빼 주었다.
2.   count(풀이에서는 result)가 적용되기 위해서는 시작 지점에서 내려갔다가 올라와서 다시 0이 되어야 한다.
3.   그러므로 `` U ``이면서 시작 지점일 때 count를 1씩 늘려 주면 답이 나온다.

# 성공 코드

<pre><code class="language-js">function countingValleys(n, s) {
  const stringList = s.split("");
  let seaLevel = 0;
  let result = 0;

  stringList.forEach((value) =&gt; {
    if (value === "U") {
      seaLevel++;
      if (seaLevel === 0) result++;
    } else {
      seaLevel--;
    }
  });

  return result;
}</code></pre>