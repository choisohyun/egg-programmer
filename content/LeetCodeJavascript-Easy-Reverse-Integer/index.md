---
title: "[LeetCode][Javascript] Easy - Reverse Integer"
tags: [undefined]
date: 2020-01-08 14:55:24
path: blog/LeetCodeJavascript-Easy-Reverse-Integer
cover: ./no-image.png
excerpt: LeetCodeJavascript-Easy-Reverse-Integer
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/124
# 문제

[\[LeetCode\]\[Javascript\] Easy - Reverse Integer](https://leetcode.com/problems/reverse-integer/)

# 문제 설명

>  
> 숫자를 뒤집어서 출력하는 문제. 
> 

### 주의할 점

1.   음수일 경우에는 음수는 유지한 채 숫자만 reverse되어야 한다.
2.   reverse했을 때 제일 앞자리가 0이면 0은 생략되어 출력된다. 즉, 타입이 `` number ``여야 한다.
3.   결과값 양음수 모두 `` 2의 31승 ``을 넘어가면 0을 출력하게 해야 한다.

문제 자체는 쉬운데 문제를 안읽어서 헤맸다...  
reverse는 내장함수를 이용해 배열로 바꾸고 reverse한 뒤 다시 합쳐 숫자형으로 바꿔 주면 된다.

# 성공 코드

<pre><code class="language-js">const reverse = x =&gt; {
    const MAX_NUMBER = Math.pow(2, 31);
    const abs_number = Math.abs(x);

    let reverseNumbers = Number(abs_number.toString().split('').reverse().join(''));
    if (reverseNumbers &gt; MAX_NUMBER) return 0;
    let answer = (x &lt; 0) ? -reverseNumbers : reverseNumbers;

    return answer;
}</code></pre>