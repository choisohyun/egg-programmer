---
title: "[HackerRank][Javascript] Sock Merchant"
tags: [undefined]
date: 2020-06-07 17:34:20
path: blog/HackerRankJavascript-Sock-Merchant
cover: ./no-image.png
excerpt: HackerRankJavascript-Sock-Merchant
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/248
# 문제

[Sock Merchant](https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=warmup)

# 문제 설명

>  
> 짝이 맞는 양말의 개수를 구하는 문제
> 

*   처음에 문제를 반대로 이해해서 짝이 안 되는 나머지 숫자를 구하는 것으로 이해해 헤맸다.

1.   `` map ``으로 숫자마다 양말의 개수를 저장해 2로 나눠 몫만 더하면 답이 나온다.
2.   for문을 돌면서 map에 개수를 차곡차곡 더한다.
3.   그리고 `` reduce ``를 사용해 양말이 짝지어지는 개수를 구해서 계속 더한 값을 구한다.

# 성공 코드

<pre><code class="language-js">function sockMerchant(n, ar) {
  let map = new Map();

  for (let i = 0; i &lt; n; i++) {
    // 분기처리 - if 문 사용
    if (!map.has(ar[i])) {
      map.set(ar[i], 1);
    } else {
      map.set(ar[i], map.get(ar[i]) + 1);
    }

    // 분기처리 - 삼항 연산자 사용
    map.has(ar[i]) ? map.set(ar[i], map.get(ar[i]) + 1) : map.set(ar[i], 1);
  }

  const reducer = (result, currentValue) =&gt; result + Math.floor(currentValue / 2);
  return [...map.values()].reduce(reducer, 0);
}</code></pre>