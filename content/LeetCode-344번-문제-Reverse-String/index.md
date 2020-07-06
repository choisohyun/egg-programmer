---
title: "[LeetCode][javascript] 344번 문제 - Reverse String"
tags: [undefined]
date: 2020-03-11 18:08:48
path: blog/LeetCode-344번-문제-Reverse-String
cover: ./no-image.png
excerpt: LeetCode-344번-문제-Reverse-String
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/202
# 문제

[344번 문제 - Reverse String](https://leetcode.com/problems/reverse-string/)

# 문제 설명

### 내가 푼 코드

문제에 새로운 공간을 만들지 않고 시간 복잡도를 `` O(1) ``라고 해서, 반복문을 전체 배열 길이의 반만큼 돌며 값을 swap하도록 했다.

### 솔루션 코드

열심히 생각해서 풀고 솔루션을 봤는데 `` Life is short, use Python. (c) ``문구와 함께 한 줄의 코드만 있었다.  
자바스크립트에도 있는 메소드라 그대로 적용했는데 통과됐다.  
시간도 반복문 돌때랑 차이가 별로 없었다.

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@cWRReY/btqCFzdDCdq/8e5uta6P1JaTyGZq2GSAmK/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

문제를 봤을 때 가장 간단한 해결법을 생각하는 연습도 필요할 것 같다.

# 성공 코드

### 내가 푼 코드

<pre class="matlab"><code>const reverseString = s =&gt; {
  const SIZE = s.length;
  const halfIndex = Math.floor(SIZE / 2);

  for (let i = 0; i &lt; halfIndex; i++) {
    let temp = s[i];
    s[i] = s[SIZE - 1 - i];
    s[SIZE - 1 - i] = temp;
  }
};</code></pre>

### 솔루션 코드

<pre class="javascript"><code>const reverseString = s =&gt; s.reverse();</code></pre>