---
title: "[LeetCode] 66번 문제 - Plus One"
tags: [undefined]
date: 2020-05-09 01:52:37
path: blog/LeetCode-66번-문제-Plus-One
cover: ./no-image.png
excerpt: LeetCode-66번-문제-Plus-One
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/234
# 문제

[66. Plus One](https://leetcode.com/problems/plus-one/)

# 문제 설명

>  
> 배열을 하나의 숫자라고 생각하고, 숫자에 1이 더해졌을 때 결과배열을 반환하는 문제
> 

처음에 9와 같이 경계선에 있는 값을 생각하고 무작정 배열을 숫자로 변환해 더했다.  
자바스크립트의 숫자형이 감당할 수 없는 크기의 숫자가 배열로 나오면 `` Fail ``이 발생했다.  
그것에 예외처리를 해 주기 위해 숫자를 중간부터 잘라서 더하는 일도 해 봤지만, `` 999999999999... ``와 같은 값은 계산이 불가능하다. 

이 문제는 주어진 값이 배열인 점을 이용해서 반복해서 올림이 있는지 찾아내서 값을 바꿔 준다.  
근데 `` digits.unshift(1); ``를 했을 때 아래 이미지처럼 자동으로 맨 앞자리가 0인 것과 아닌 것을 구분해 1을 붙여 줬다.  
이에 대한 이유를 찾지 못했다. 

![image](https://user-images.githubusercontent.com/30427711/81428662-870bad00-9197-11ea-87cf-a0a5bcff1ee7.png)

# 성공 코드

### 실패한 풀이

<pre><code class="language-js">const plusOne = (digits) =&gt; {
    let lastTen = digits.length &gt;= 11? digits.splice(-11, 11) : digits.splice(-digits.length, digits.length);

    const isFirstZero = lastTen[0] === 0  &amp;&amp; digits.length &gt; 0;
    const isSecondZero = lastTen[1] === 0  &amp;&amp; digits.length &gt; 1 &amp;&amp; isFirstZero;

    const plusNumber = parseInt(lastTen.join('')) + 1;
    const resultLast = plusNumber.toString().split('');

    const resultLastNum = [];
    resultLast.forEach(el =&gt; resultLastNum.push(parseInt(el)));

    if (isFirstZero) digits.push(0);
    if (isSecondZero) digits.push(0);

    resultLastNum.forEach(el =&gt; digits.push(el));
    return digits;
};</code></pre>

### 성공한 풀이

<pre><code class="language-js">const plusOne = (digits) =&gt; {
    for(var i = digits.length - 1; i &gt;= 0; i--){
      if(++digits[i] &gt; 9) digits[i] = 0;
      else return digits;
    }
    digits.unshift(1);
    return digits;
};</code></pre>