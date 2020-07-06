---
title: "[프로그래머스][Javascript] 완주하지 못한 선수"
tags: [undefined]
date: 2020-01-08 12:08:08
path: blog/프로그래머스Javascript-완주하지-못한-선수
cover: ./no-image.png
excerpt: 프로그래머스Javascript-완주하지-못한-선수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/123
# 문제

[프로그래머스 해시 문제 - 완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

# 문제 설명

참가한 선수 : `` n+1 ``명  
완주한 선수 : `` n ``명

### 1. 정렬하기

너무 어렵게 생각해서 휘황찬란한 코드가 되어버린 문제.  
하지만 단순 `` for문 ``이나 `` foreach문 ``을 쓰게 된다면 시간초과로 효율성 검사를 실패하게 된다.  
그래서 생각을 하다가 정렬을 해서 값이 다르면 완주하지 못한 선수가 나오겠다는 생각을 했다.  
그런데 시간복잡도 생각을 너무 많이 했더니 정렬을 퀵소트로 했다.  
퀵소트 평균 Big o가 `` O(nlogn) `` 정도이니 빨라질거라 생각을 했는데, 생각해보니 반복하며 배열 값을 비교할 때는 최악의 경우 `` O(n) ``의 복잡도가 나오게 된다. 퀵소트를 쓰나 그냥 소트를 쓰나 최종 복잡도 차이는 없었던 것이다.  
참고로 퀵소트는 `` 하나의 리스트를 피벗(pivot)을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법 ``이다.

### 2. `` some `` 이용해

그리고 `` some ``이라는 `` Javascript Array 내장함수 ``를 사용해 반복문을 돌다가 다른 값이 나오면 그대로 멈추는 코드를 작성했다.  
아직 `` reduce ``와 같은 자바스크립트 특유의 신기한 내장함수들을 응용하는게 어려워서 활용이 약하다.  
다음은 `` 1. 퀵소트, 2. 일반 소트 ``를 사용해 성공한 코드이다.

# 성공 코드

1.   Quick sort 사용 코드

<pre class="maxima"><code>const solution = (participant, completion) =&gt; {
    let answer = '';

    quickSort(participant, 0, participant.length - 1);
    quickSort(completion, 0, completion.length - 1);
    let idx = 0;

    completion.some(x =&gt; {
        if (x !== participant[idx]) {
            answer = participant[idx];
            return true;
        }
        idx++;
    });

    if (answer === '') answer = participant[participant.length - 1];

    return answer;
}

const quickSort = (array, left, right) =&gt; {
    if (left &gt;= right) return;

    let pivot = array[right];
    let l = left;
    let r = right - 1;

    while (l &lt;= r) {    // 교차하기 전까지 진행
        while (l &lt;= r &amp;&amp; array[l] &lt;= pivot) l++;
        while (l &lt;= r &amp;&amp; array[r] &gt;= pivot) r--;
        if (l &lt; r) swapElement(array, l, r);
    }
    swapElement(array, l, right);
    quickSort(array, left, l - 1);
    quickSort(array, l + 1, right);

}

const swapElement = (array, first, second) =&gt; {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}</code></pre>

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@zW28h/btqAWc0jVL1/pwUc8GSWBHDSHN9XrKOQeK/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

<ol start="2">
<li>sort 사용 코드</li>
</ol>

<pre class="javascript"><code>const solution = (participant, completion) =&gt; {
    let answer = '';

    participant.sort();
    completion.sort();
    let idx = 0;

    completion.some(x =&gt; {
        if (x !== participant[idx]) {
            answer = participant[idx];
            return true;
        }
        idx++;
    });

    if (answer === '') answer = participant[participant.length - 1];

    return answer;
}</code></pre>

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@oeMgZ/btqAWa2tcgB/qfDFACKiRF6PWPD4XjUoN1/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>