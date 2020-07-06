---
title: "[LeetCode][javascript] 345번 문제 - Reverse Vowels of a String"
tags: [undefined]
date: 2020-03-13 21:01:42
path: blog/LeetCodejavascript-345번-문제-Reverse-Vowels-of-a-String
cover: ./no-image.png
excerpt: LeetCodejavascript-345번-문제-Reverse-Vowels-of-a-String
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/204
# 문제

[345번 문제 - Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)

# 문제 설명

>  
> 문자열에서 `` 모음(aeiou) ``만 반대 순서로 뒤집는 문제
> 

## 내가 푼 코드

1.   입력받은 문자열을 배열로 만든다.
2.   모음의 인덱스를 저장할 빈 배열과 모음을 저장하는 문자열을 만든다. 
3.   반복문을 돌며 모음인 문자열(대문자 포함)의 인덱스를 2번에서 만든 배열에 추가한다. 
4.   반복문을 돌며 만들어진 배열을 배열의 크기의 반만큼 반복되게 한다. 
5.   반복문을 돌며 해당 인덱스에 해당하는 모음을 반대로 저장시킨다. 
6.   `` join ``을 사용해 문자열로 만들고 반환한다.

## 풀이 코드

1.   `` 정규표현식 ``과 고차함수인 `` filter ``를 활용해 모음만 있는 문자열을 배열로 저장한다. 

>  
> 정규표현식의 test() 메소드는 대상 문자열 속에 일치하는 문자열이 포함되어 있는지 검사하고 true 또는 false를 반환한다. 
> 

<ol start="2">
<li>입력된 문자열을 또다시 정규식을 이용해 split하고, split될 때마다 1번에서 저장된 배열의 값을 추가하면 모음만 reverse된 값이 저장된다. </li>
</ol>

*   고차함수는 정말 바로 떠올려 내기 어려운 것 같다. 고차함수 많이 쓰는 연습하기 필수!!

# 성공 코드

## 내가 푼 코드

<pre><code class="language-js">const reverseVowels = s =&gt; {
  const strList = s.split("");
  const vowels = "aeiou";
  let vowelIndexList = [];

  strList.forEach((element, index) =&gt; {
    if (vowels.includes(element.toLowerCase())) {
      vowelIndexList.push(index);
    }
  });

  const SIZE = vowelIndexList.length;
  const halfIndex = Math.floor(SIZE / 2);

  for (let i = 0; i &lt; halfIndex; i++) {
    const j = vowelIndexList[i];
    let temp = strList[j];
    strList[j] = strList[vowelIndexList[SIZE - 1 - i]];
    strList[vowelIndexList[SIZE - 1 - i]] = temp;
  }

  return strList.join("");
};</code></pre>

## 풀이 코드

<pre><code class="language-js">const reverseVowels = s =&gt; {
    const vowels = s.split('').filter(a =&gt; /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) =&gt; res + a + (vowels.pop() || ''), '');
};</code></pre>