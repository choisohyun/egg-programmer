---
title: "[Programmers][Javascript] K번째수"
tags: [undefined]
date: 2020-01-15 14:09:22
path: blog/ProgrammersJavascript-K번째수
cover: ./no-image.png
excerpt: ProgrammersJavascript-K번째수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/130
# 문제

[\[Programmers\]\[Javascript\] K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript)

# 문제 설명

>  
> 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하는 문제
> 

`` commands `` 배열에 조건이 다 들어있다.  
`` commands `` 배열 하나마다 `` slice `` 시작, 끝, 정렬 후 인덱스 위치까지 제공되어 있다.  
단, 문제에서 말하는 인덱스와 배열에서 쓰이는 인덱스가 다르니 주의해야 한다.  
나는 최대한 고차함수로 풀어보려고 했다.  
근데 역시 `` forEach `` 말고 `` map ``으로도 충분히 가능했다. 성공 코드 1번은 내 풀이이고, 2번은 다른사람 풀이이다. 

# 성공 코드

<pre><code class="language-js">function solution(array, commands) {
    var answer = [];

    commands.forEach(element =&gt; {
        answer.push(array.slice(element[0] - 1, element[1]).sort((a, b) =&gt; a - b)[element[2] - 1]);
    });

    return answer;
}</code></pre>

이렇게도 풀 수 있다.

<pre><code class="language-js">function solution(array, commands) {
    return commands.map(v =&gt; {
        return array.slice(v[0] - 1, v[1]).sort((a, b) =&gt; a - b).slice(v[2] - 1, v[2])[0];
    });
}</code></pre>