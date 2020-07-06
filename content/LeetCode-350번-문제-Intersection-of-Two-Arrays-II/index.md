---
title: "[LeetCode] 350번 문제 - Intersection of Two Arrays II"
tags: [undefined]
date: 2020-05-09 00:55:18
path: blog/LeetCode-350번-문제-Intersection-of-Two-Arrays-II
cover: ./no-image.png
excerpt: LeetCode-350번-문제-Intersection-of-Two-Arrays-II
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/233
# 문제

[350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

# 문제 설명

>  
> 두 배열에서 중복되게 들어있는 값만 배열로 반환하는 문제
> 

마땅한 더 좋은 방법이 생각이 나지 않아서 이중 반복문을 사용했다.  
이중 반복문을 돌아 값을 하나씩 비교하면서 같으면 배열에 `` push ``하고 두 배열에서는 삭제하도록 했다.  
삭제하지 않으면 `` [4,9,4,9] ``와 같은 중복되는 값이 걸러지지 않고 추가로 배열에 들어가 버린다. 

# 성공 코드

<pre><code class="language-js">const intersect = (nums1, nums2) =&gt; {
    let result = [];

    for (let i = nums1.length-1; i &gt;= 0; i--) {
        for (let j = 0; j &lt; nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums1.splice(i, 1);
                nums2.splice(j, 1);
            }
        }
    }

    return result;
};</code></pre>