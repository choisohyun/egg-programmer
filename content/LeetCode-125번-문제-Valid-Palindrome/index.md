---
title: "[LeetCode] 125번 문제 - Valid Palindrome"
tags: [undefined]
date: 2020-05-24 20:24:22
path: blog/LeetCode-125번-문제-Valid-Palindrome
cover: ./no-image.png
excerpt: LeetCode-125번-문제-Valid-Palindrome
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/242
# 문제

[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

# 문제 설명

>  
> 문자열의 영숫자가 회문인지 판별하는 문제
> 

1.   정규식을 활용해 `` 영숫자 ``만 배열로 저장한다.
2.   이제 저장된 배열이 회문인지 확인하면 되는데, 들어온 문자열이 `` ".," ``와 같은 경우 길이가 없다고 나오므로 if문을 통해 예외처리를 해준다.

*   이 때, 꼭 배열 자체를 비교할 필요는 없다. `` join ``을 활용해 문자열로 만들고, 그것을 뒤집은 값과 비교해도 된다. 여기서 나는 배열인 채로 비교했다. 

<ol start="3">
<li>그리고 전체 배열 크기의 반을 구한 다음에 그만큼만 반복문을 돌면서 값이 같은지 확인한다. </li>
<li>하나라도 다르면 false가 되어 결과로 반환하게 된다. </li>
</ol>

# 성공 코드

<pre><code class="language-js">const isPalindrome = (s) =&gt; {
    const regex = /(\w)/g;
    const onlyAlphanumeric = s.toLowerCase().match(regex);

    if (!onlyAlphanumeric) return true;

    const halfSize = Math.floor(onlyAlphanumeric.length / 2);
    let result = true;

    for (let i = 0; i &lt; halfSize; i++) {
        let last = onlyAlphanumeric.length - 1 - i;

        if (onlyAlphanumeric[i] !== onlyAlphanumeric[last]) {
            result = false;
        }
    }

    return result;
};</code></pre>