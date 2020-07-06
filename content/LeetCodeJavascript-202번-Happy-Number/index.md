---
title: "[LeetCode][Javascript] 202번 - Happy Number"
tags: [undefined]
date: 2020-01-23 13:45:45
path: blog/LeetCodeJavascript-202번-Happy-Number
cover: ./no-image.png
excerpt: LeetCodeJavascript-202번-Happy-Number
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/141
# 문제

[\[LeetCode\]\[Javascript\] 202번 - Happy Number](https://leetcode.com/problems/happy-number/)

# 문제 설명

1.   숫자로 입력한 입력값 `` n ``을 문자열로 변환해 1글자씩 끊어 배열에 저장한다.
2.   배열에서 `` reduce ``를 활용해 제곱합을 구해 `` calculate `` 변수에 저장한다.
3.   dp라는 배열에 이미 calculate 값이 이미 있다면 무한 반복하게 될테니 그것을 방지하기 위해 이미 있는 값이면 멈추고 false를 만환한다. 
4.   dp에 없는 수이면 dp 배열에 추가한다. 
5.   반환값에 함수를 넣어 주면서 재귀적으로 실행될 수 있도록 한다. 

# 성공 코드

    const isHappy = (n, dp = []) =&gt; {
        if (n === 1) return true;
    
        let nArray = String(n).split('');
        let calculate = nArray.reduce((sum, element) =&gt; sum += Math.pow((element), 2), 0);
    
        if (dp.includes(calculate)) return false;
        dp.push(calculate)
        return isHappy(calculate, dp);
    };