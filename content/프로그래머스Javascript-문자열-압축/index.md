---
title: "[프로그래머스][Javascript] 문자열 압축"
tags: [undefined]
date: 2020-01-09 11:19:45
path: blog/프로그래머스Javascript-문자열-압축
cover: ./no-image.png
excerpt: 프로그래머스Javascript-문자열-압축
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/125
# 문제

[\[프로그래머스\]\[Javascript\] 문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

# 문제 설명

>  
> 가장 압축이 작게 된 길이 찾기
> 

처음에 너무 복잡하게 나누고 배열에 계속 저장하는 식으로 하다가 계속 값이 제대로 배열에 저장이 안되는 문제가 생겨 테스트케이스를 모두 다 통과하지 못하는 문제가 생겼다.  
블로그를 참고해 조금 간단하게 수정했더니 바로 작동하는 코드가 되었다.  
참고 블로그 : [\[javascript\] 프로그래머스/문자열 압축 문제..](https://dreammarker.tistory.com/67) 

문자열을 n의 길이씩 자르는 것도 배열에 저장하는 `` makeSplit ``이라는 함수가 있었는데, 배열로 저장하는 과정을 삭제하는 대신 `` currWord와 nextWord ``에 자른 값을 그때그때 저장하며 바로 비교할 수 있도록 바꿨다.  
그리고 처음에는 `` count를 저장하는 배열 ``과 `` 중복되지 않은 문자열 ``을 따로 저장해 마지막에 길이를 재서 합치게끔 했는데, 그렇게 하지 않고 바로 `` 압축문자 ``가 `` result ``에 저장되게 했더니 오히려 더 간단한 식이 되었다. 

# 성공 코드와 실패 코드 비교해서 보기

[깃허브 커밋 내역 - \[Programmers\] \[완성\] 문자열 압축](https://github.com/choisohyun/algorithm_javascript/commit/6f5de33c556ca4a6b452d81294a003a107e02338)

# 성공 코드

<pre><code class="language-js">const solution = s =&gt; {
    let min = 1000;

    for (let i = 1; i &lt;= s.length / 2 + 1; i++) {
        min = (countZip(s, i) &lt; min) ? countZip(s, i) : min;
    }

    return min;
}

const countZip = (s, position) =&gt; {
    let answer = 1;
    let start = 0;
    let end = position;
    let count = 1;
    let result = "";

    while (answer &lt;= s.length) {
        let currWord = s.slice(start, end);
        let nextWord = s.slice(start + position, end + position);

        answer += position;
        start += position;
        end += position;

        if (currWord === nextWord) {
            count++;
        }
        else {
            if (count === 1) {
                result += currWord;
            }
            else {
                result += count + currWord;
            }
            count = 1;
        }
    }

    return result.length;
}</code></pre>