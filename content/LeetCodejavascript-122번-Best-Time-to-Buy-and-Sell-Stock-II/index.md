---
title: "[LeetCode][javascript] 122번 - Best Time to Buy and Sell Stock II"
tags: [undefined]
date: 2020-05-02 00:50:58
path: blog/LeetCodejavascript-122번-Best-Time-to-Buy-and-Sell-Stock-II
cover: ./no-image.png
excerpt: LeetCodejavascript-122번-Best-Time-to-Buy-and-Sell-Stock-II
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/229
# 문제

[122번 - Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

# 문제 설명

>  
> 가장 이익이 크게 거래 누적값을 계산하는 문제
> 

내가 이해한 제약조건은 크게 두 가지이다.

1.   사기 전에는 팔 수 없고, 팔기 전에는 살 수 없다.
2.   사는 값이 바로 이후에 팔 값보다 작으면 산다.

하지만 문제의 예시와 풀이가 살짝 맞지 않는 것 같다.  
내가 푼 풀이가 나중에 보니 솔루션 중 하나였지만, Example 2번은 `` (2-1) + (3-2) + (4-3) + (5-4) `` 방식으로 계산되어 답이 나온다.  
어쨌든 위의 두 조건에 맞춰 반복문을 돌며 누적값을 계산해 나가도록 풀었다. 

# 성공 코드

    const maxProfit = (prices) =&gt; {
        let result = 0; 
    
        for (let i = 0; i &lt; prices.length; i++) {
            if (prices[i] &lt; prices[i+1]) {
                result += prices[i+1] - prices[i];
            }
        }
    
        return result;
    };