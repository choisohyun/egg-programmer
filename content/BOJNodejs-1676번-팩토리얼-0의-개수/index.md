---
title: "[BOJ][Nodejs] 1676번 - 팩토리얼 0의 개수"
tags: [undefined]
date: 2020-02-22 23:07:42
path: blog/BOJNodejs-1676번-팩토리얼-0의-개수
cover: ./no-image.png
excerpt: BOJNodejs-1676번-팩토리얼-0의-개수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/194
# 문제

[백준 1676번 문제: 팩토리얼 0의 개수](https://www.acmicpc.net/problem/1676)

# 문제 설명

>  
> 소인수분해의 성질을 활용하여 N!의 끝에 0이 얼마나 많이 오는지 구하는 문제
> 

*   N 팩토리얼의 결과값 끝에 붙은 0을 알기 위해서는 `` 2와 5 ``의 개수를 알면 된다. 
*   근데 패턴을 보면, 5가 1개 나올 때, 2도 1개 이상이 나온다. 
*   즉, 5의 개수를 알면 0의 개수도 알 수 있다. 
*   그래서 5의 배수만큼 커지도록 반복문을 돌려 5의 개수를 더한다.

# 성공 코드

<pre><code class="language-js">const readline = require("readline");

const solution = n =&gt; {
  let answer = 0;

  for (let i = 5; i &lt;= n; i *= 5) {
    answer += Math.floor(n / i);
  }

  console.log(answer);
};

const main = () =&gt; {
  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r.on("line", line =&gt; {
    const n = Number(line);
    solution(n);
    r.close();
  });
};

main();
</code></pre>