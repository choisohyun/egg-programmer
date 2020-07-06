---
title: "[LeetCode] 387번 문제 - First Unique Character in a String"
tags: [undefined]
date: 2020-05-22 13:18:59
path: blog/LeetCode-387번-문제-First-Unique-Character-in-a-String
cover: ./no-image.png
excerpt: LeetCode-387번-문제-First-Unique-Character-in-a-String
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/240
# 문제

[387번 문제 - First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

# 문제 설명

>  
> 주어진 문자열에서 첫 번째로 유일한 문자의 index를 찾아 반환하는 문제 
> 

1.   중복되는 값을 저장하는 `` duplicateMap ``과 유일한 값을 저장하는 `` uniqueMap ``을 생성한다. 
2.   문자열을 배열로 변환해 반복문을 돌면서 `` uniqueMap 또는 duplicateMap ``에 해당 문자가 존재하는지 확인한다. 
3.   두 Map 중에 하나에 들어가 있다면 중복 문자라는 뜻이므로 `` uniqueMap ``에서 삭제해 준다. 
4.   두 Map 어디에도 들어있지 않다면 처음 나온 글자이거나 유일한 문자이므로 `` uniqueMap ``에 담는다. 
5.   반복문이 끝나고 `` uniqueMap ``의 첫 번째 글자를 리턴한다. 
6.   만약 `` uniqueMap ``에 어떤 값도 없다면 문제의 조건대로 -1을 반환한다.

*   사실 duplicateMap은 문제에 직접적으로 쓰이지 않는 Map이다. 
*   Map을 하나로 쓰려면 각 글자마다 `` count `` 를 value로 가지고 있게 하면 된다. 문제를 풀고 보니 이 방법이 더 좋아 보인다. 

# 성공 코드

<pre><code class="language-js">const firstUniqChar = (s) =&gt; {
    let duplicateMap = new Map();
    let uniqueMap = new Map();

    s.split('').forEach((char, index) =&gt; {
        if (uniqueMap.has(char)) {
            duplicateMap.set(char, index);
            uniqueMap.delete(char);
        } 
        else if (duplicateMap.has(char)) {
            uniqueMap.delete(char);
        }
        else uniqueMap.set(char, index);
    })

    if (!uniqueMap.size) return -1;
    return uniqueMap.values().next().value
};</code></pre>