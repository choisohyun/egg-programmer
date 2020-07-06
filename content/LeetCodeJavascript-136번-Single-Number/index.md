---
title: "[LeetCode][Javascript] 136번 - Single Number"
tags: [undefined]
date: 2020-01-27 16:11:07
path: blog/LeetCodeJavascript-136번-Single-Number
cover: ./no-image.png
excerpt: LeetCodeJavascript-136번-Single-Number
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/143
# 문제

[\[LeetCode\]\[Javascript\] 136번 - Single Number](https://leetcode.com/problems/single-number/)

# 문제 설명

>  
> 배열에서 중복되지 않는 하나의 수를 찾는 문제
> 

### splice 사용

`` Set ``에 for문을 돌면서 중복값이 없는 수만 저장해도 되겠지만 문제에서는 기존 배열에서 처리하라는 말인 것 같아 쓰지 않았다.  
숫자들을 정렬해 인덱스 뒤의 숫자부터 `` for문 ``으로 중복되는 숫자들을 지워 나간다.  
그러면 마지막에 남는 수가 중복되지 않은 하나의 수가 된다.

### XOR 연산 사용

미쳤다 너무 간단하게 해결된다.  
문제에서 중복되는 숫자가 있으면 2번 들어있으니 XOR로 배열의 모든 숫자를 계산한다.  
XOR은 숫자를 2진수로 변환해 각 숫자가 같으면 0, 다르면 1로 나타내어지는 연산자이다.  
즉, 같은 숫자를 비트 연산자로 계산하면 0이 된다는 것이다.  
`` [4, 1, 2, 1, 2] ``와 같이 숫자가 정렬되어 있지 않아도 `` 1+5+2-1-2 ``와 `` 1-1+2-2+5 ``의 값이 같은 것처럼 결과는 언제나 4가 나올 것이다.  
결국 마지막에는 중복되지 않은 값 하나만 나와서 답을 구하게 된다. 

# 성공 코드

### splice 사용

<pre><code class="language-js">const singleNumber = nums =&gt; {
    nums.sort();
    console.log(nums)
    for (let i = nums.length - 2; i &gt;= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            nums.splice(i, 1);
        }
    }
    console.log(nums)

    return nums[0];
};</code></pre>

### XOR 연산 사용

<pre><code class="language-js">const singleNumber = nums =&gt; {
  return nums.reduce((sum, current) =&gt; (sum ^= current));
};</code></pre>