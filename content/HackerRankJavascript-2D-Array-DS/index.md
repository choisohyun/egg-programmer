---
title: "[HackerRank][Javascript] 2D Array - DS"
tags: [undefined]
date: 2020-06-14 15:49:09
path: blog/HackerRankJavascript-2D-Array-DS
cover: ./no-image.png
excerpt: HackerRankJavascript-2D-Array-DS
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/253
# 문제

[2D Array - DS](https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&amp;playlist_slugs%5B%5D=interview-preparation-kit&amp;playlist_slugs%5B%5D=arrays)

# 문제 설명

>  
> 2차원 6 \* 6 배열에서 나올 수 있는 모래시계 중에서 가장 큰 합을 구하는 문제
> 

1.   6 \* 6 배열에서 모래시계는 `` 4 * 4 = 16 ``개가 나온다.
2.   모든 모래시계의 합을 구하기 위해 이중 반복문을 이중 배열보다 2보다 작은 길이만큼 돌 수 있게 한다.
3.   이중 반복문 안에서 모래시계의 합을 구해 result보다 크면 result에 저장시키고 반복문이 끝나면 반환한다.

# 성공 코드

<pre><code class="language-js">function hourglassSum(arr) {
    let result = -100;

    for (let i = 0; i &lt; arr.length - 2; i++) {
        for (let j = 0; j &lt; arr.length - 2; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k &lt; 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k];
            }
            if (sum &gt; result) result = sum;
        }
    }

    return result;
}</code></pre>