---
title: "[LeetCode] 283번 문제 - Move Zeroes"
tags: [undefined]
date: 2020-05-14 14:49:16
path: blog/LeetCode-283번-문제-Move-Zeroes
cover: ./no-image.png
excerpt: LeetCode-283번-문제-Move-Zeroes
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/237
# 문제

[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

# 문제 설명

>  
> 배열에서 0인 값을 오른쪽으로 이동시키는 문제
> 

반복문을 뒤에서부터 돌아 0인 숫자는 `` splice ``하면서 `` push ``했다.  
여기서 주의할 점은 __반복문을 뒤에서 돌았다__는 것이다.  
반복문을 앞에서 돌면서 splice를 쓰게 되면 0이 연속해서 나온다면 0이 다 이동되지 않는 문제가 있다.  
그래서 splice를 중복된 배열에서 사용할 때는 역순 반복을 해야 한다. 

# 성공 코드

<pre><code class="language-js">const moveZeroes = (nums) =&gt; {
    for (let i = nums.length - 1; i &gt;= 0; i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1))
        }
    }; 

    return nums;
};</code></pre>