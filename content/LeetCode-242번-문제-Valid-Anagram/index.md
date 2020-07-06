---
title: "[LeetCode] 242번 문제 - Valid Anagram"
tags: [undefined]
date: 2020-05-23 12:59:05
path: blog/LeetCode-242번-문제-Valid-Anagram
cover: ./no-image.png
excerpt: LeetCode-242번-문제-Valid-Anagram
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/241
# 문제

[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

# 문제 설명

>  
> 주어진 문자열이 유효한 anagram인지 아닌지 판별하는 문제
> 

문자열의 길이와 알파벳 구성(개수)가 동일하면 `` true ``, 아니면 `` false ``를 반환하게끔 해야 한다.

처음에는 반복문을 돌게 해 값을 하나하나 비교해 참거짓을 반환했는데, 그냥 비교할 수 있는 방법이 있어서 그렇게 바꿔서 사용했다.

자바스크립트의 경우 배열 자체를 비교할 수 있는 메소드는 없지만 값을 __json 문자열로 만들어 주는__ `` *JSON.stringify `` 를 이용해 두 배열을 비교했다.

아니면 아예 `` join("") `` 을 사용해 문자열을 만들어 문자열끼리 비교해 줄 수도 있다.

# 성공 코드

<pre><code class="language-js">const isAnagram = (s, t) =&gt; {
    if (s.length !== t.length) return false;

    const listS = s.split("").sort();
    const listT = t.split("").sort();
    let result = true;

    return JSON.stringify(listS) === JSON.stringify(listT);
};</code></pre>