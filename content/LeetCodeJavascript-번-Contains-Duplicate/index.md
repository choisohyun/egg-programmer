---
title: "[LeetCode][Javascript] 217번 - Contains Duplicate"
tags: [undefined]
date: 2020-05-02 11:24:20
path: blog/LeetCodeJavascript-번-Contains-Duplicate
cover: ./no-image.png
excerpt: LeetCodeJavascript-번-Contains-Duplicate
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/231
# 문제

[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

# 문제 설명

>  
> 배열 안에 중복되는 값이 있으면 true, 없으면 false를 반환하는 문제
> 

중복을 허용하지 않는 `` Set ``에 배열을 넣으면 간단히 해결된다.  
만약 중복이 있다면 set의 크기와 원본 배열의 크기가 다를 것이다.  
이를 이용해 `` boolean `` 값을 반환하도록 하면 된다. 

# 성공 코드

    const containsDuplicate = (nums) =&gt; {
        const set = new Set(nums);
        return set.size !== nums.length;
    };