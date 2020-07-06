---
title: "[LeetCode][Javascirpt] 15번 - 3Sum"
tags: [undefined]
date: 2020-03-22 15:14:06
path: blog/LeetCodeJavascirpt-15번-3Sum
cover: ./no-image.png
excerpt: LeetCodeJavascirpt-15번-3Sum
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/211
# 문제

[\[LeetCode\]\[Javascirpt\] 15번 - 3Sum](https://leetcode.com/problems/3sum/) 

>  
> 배열에서 3개의 수를 더했을 때 0이 되는 경우를 배열에 저장해서 리턴해 줘야 하는 문제  
> 3개의 수는 (\[-1,0,1\], \[-1,0,1\])과 중복되어 들어 있으면 안 된다.
> 

# 코드 설명

## 실패 코드

*   경우의 수만큼만 반복문을 돌게 하고 싶었는데 딱히 기억이 안 나서 반복문으로 풀었다. 
*   for문을 중첩해서 3개 쓰면 복잡도가 기본적으로 `` O(N^3) ``이다. 
*   근데 for문을 돈다고 해서 필요한 경우의 수만 반복문을 도는 것은 아니다. 그래서 문제이다. 
*   문제의 예제 배열은 경우의 수가 아래와 같다. 하지만 for문의 경우 모든 경우를 돌게 되어 중복한 값이 결과로 나올 수 있다. 

    0 1 2
    0 1 3
    0 1 4
    0 1 5
    1 2 3
    1 2 4
    1 2 5
    2 3 4
    2 3 5
    3 4 5

<pre><code class="language-js">const threeSum = nums =&gt; {
  let result = [];
  nums.sort((a, b) =&gt; a - b);

  for (let i = 0; i &lt; nums.length; i++) {
    for (let j = i + 1; j &lt; nums.length; j++) {
      for (let k = j + 1; k &lt; nums.length; k++) {
        let zeroArray = [nums[i], nums[j], nums[k]];

        if (zeroArray.reduce((k, v) =&gt; k + v) === 0) {
          if (
            result.length &gt;= 1 &amp;&amp;
            !zeroArray.every((v, i) =&gt; result[result.length - 1][i] === v)
          ) {
            result.push(zeroArray);
          } else if (result.length === 0) {
            result.push(zeroArray);
          }
        }
      }
    }
  }</code></pre>

# 성공 코드

*   j, k라는 변수에 for문을 도는 변수 i+1, nums.length - 1의 값을 넣어 줌으로써 for문 2개를 줄였다. 
*   `` while (j &lt; k) `` 조건을 부여함으로써 j와 k는 중간 지점에 만나 멈출 것이다. 그러면 불필요한 반복을 할 필요도 없어지게 된다. 

<pre><code class="language-js">const threeSum = nums =&gt; {
  const results = [];

  if (nums.length &lt; 3) return results;
  nums = nums.sort((a, b) =&gt; a - b);

  let target = 0;

  for (let i = 0; i &lt; nums.length - 2; i++) {
    if (nums[i] &gt; target) break;
    if (i &gt; 0 &amp;&amp; nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j &lt; k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum &lt; target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
};</code></pre>