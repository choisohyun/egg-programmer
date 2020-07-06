---
title: "[LeetCode][Javascript] 26. Remove Duplicates from Sorted Array"
tags: [undefined]
date: 2020-01-15 16:13:17
path: blog/LeetCodeJavascript-26-Remove-Duplicates-from-Sorted-Array
cover: ./no-image.png
excerpt: LeetCodeJavascript-26-Remove-Duplicates-from-Sorted-Array
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/132
# 문제

[\[LeetCode\]\[Javascript\] 26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

# 문제 설명

>  
> 주어진 정렬된 배열의 중복값을 없앤 길이를 출력하는 문제.  
> 단, 주어진 배열을 수정해야 함(새롭게 만들면 안됨)
> 

고차함수는 사용할 수 없는 문제라고 생각하면 될 것 같다.  
처음에 `` Set ``과 `` filter ``를 사용해 보았지만 틀린 답이라고 나왔다.  
그래서 for문에 `` splice ``를 사용했다.  
splice는 값을 삭제만 하는 기능도 있기 때문이다.  
근데 인덱스를 0번부터 1씩 커가는 식으로 돌리면 3개 이상 중복인 값은 제대로 지워지지 않는다.  
사실 이전에 다른 문제를 풀면서도 겪었던 문제인데, 간단하게 뒤에서부터 돌려주면 된다.  
나처럼 하지 않고 새로운 length 변수를 만들어 거기에 length를 세어줘도 된다. 

# 성공 코드

<pre><code class="language-js">const removeDuplicates = (nums) =&gt; {
    for (let i = nums.length - 2; i &gt;= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};</code></pre>