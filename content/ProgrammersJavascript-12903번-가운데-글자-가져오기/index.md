---
title: "[Programmers][Javascript] 12903번 - 가운데 글자 가져오기"
tags: [undefined]
date: 2020-02-05 17:00:00
path: blog/ProgrammersJavascript-12903번-가운데-글자-가져오기
cover: ./no-image.png
excerpt: ProgrammersJavascript-12903번-가운데-글자-가져오기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/153
# 문제

[\[Programmers\]\[Javascript\] 12903번 - 가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

# 문제 설명

>  
> 글자 개수에 따라 다른 개수의 가운데 글자를 가져와 반환하는 문제
> 

string의 길이가  
홀수이면 가운데 한 글자만 반환해야 하고,  
짝수이면 가운데 두 글자를 반환해야 한다. 

length를 2로 나눠서 중간값을 구한 후 if문을 사용해 substring으로 문자열을 뽑아냈다.  
다른 사람 코드를 보니 substring을 사용하지 않고 string의 index로 가운데 글자를 뽑은 것을 볼 수 있었다.  
머리 환기시킬 겸 풀어 봤다. 

# 성공 코드

## 내 코드

<pre><code class="language-js">const solution = s =&gt; {
  const middleIndex = Math.floor(s.length / 2);
  let answer = "";
  if (s.length % 2 === 1) {
    answer = s.substring(middleIndex, middleIndex + 1);
  } else {
    answer = s.substring(middleIndex - 1, middleIndex + 1);
  }

  return answer;
};</code></pre>

## 다른 사람 코드

<pre><code class="language-js">function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}</code></pre>