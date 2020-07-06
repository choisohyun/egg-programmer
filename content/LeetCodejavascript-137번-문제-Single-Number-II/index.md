---
title: "[LeetCode][javascript] 137번 문제 - Single Number II"
tags: [undefined]
date: 2020-03-18 20:12:19
path: blog/LeetCodejavascript-137번-문제-Single-Number-II
cover: ./no-image.png
excerpt: LeetCodejavascript-137번-문제-Single-Number-II
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/208
# 문제

[\[LeetCode\]\[javascript\] 137번 문제 - Single Number II](https://leetcode.com/problems/single-number-ii/)

# 문제 풀이

>  
> 배열에서 1번만 등장하는 숫자를 찾아서 반환하는 문제이다.
> 

## 내가 푼 코드

1.   배열 숫자와 등장하는 횟수를 저장하기 위해 `` Map ``을 사용했다.
2.   `` key `` 값은 배열의 숫자, `` value `` 값은 숫자의 횟수를 저장한다. 
3.   `` value ``가 3이 되면 map에서 삭제한다.
4.   첫 번째 키를 반환한다.

## 다른 사람 코드

1.   입력된 배열을 `` Set ``에 넣어 유니크한 값만 남게 하고, 이를 모두 합한다.
2.   입력된 배열의 합을 구한다.
3.   유니크한 값의 합에 3을 곱하면 모든 값이 3번씩 들었을 경우이다. 하지만 문제에서 그런 경우는 없다고 했으므로 여기에 배열합 값을 빼 주고 2를 나누면 원하는 1번 등장하는 배열값이 나오게 된다. 

*   reduce를 필수로 쓸 수 있도록 연습해야겠다. 

# 성공 코드

## 내가 푼 코드

<pre><code class="language-js">const singleNumber = nums =&gt; {
  const countNums = new Map();

  nums.forEach(element =&gt; {
    if (!countNums.get(element)) {
      countNums.set(element, 1);
    } else {
      countNums.set(element, countNums.get(element) + 1);
    }

    if (countNums.get(element) === 3) countNums.delete(element);
  });

  return [...countNums.keys()][0];
};</code></pre>

## 다른 사람 코드

<pre><code class="language-js">const singleNumber = nums =&gt; {
  const uniqueValuesSum = ([...new Set(nums)]).reduce((sum, elem) =&gt; sum + elem, 0);
  const allValuesSum = nums.reduce((sum, elem) =&gt; sum + elem, 0);
  return ( uniqueValuesSum  * 3 - allValuesSum ) / 2;
};</code></pre>