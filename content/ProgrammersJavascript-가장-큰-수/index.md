---
title: "[Programmers][Javascript] 가장 큰 수"
tags: [undefined]
date: 2020-01-15 15:29:01
path: blog/ProgrammersJavascript-가장-큰-수
cover: ./no-image.png
excerpt: ProgrammersJavascript-가장-큰-수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/131
# 문제

[\[Programmers\]\[Javascript\] 가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

# 문제 설명

>  
> 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내는 문제
> 

나는 처음에 sort하는 것을 값들을 10으로 나눈 나머지 값들로 하려고 했다.  
근데 그러면 예제 테스트는 통과하지만 전체 예제는 통과하지 못한다. 테스트 케이스를 잘 생각하지 못하겠어서 다른 블로그를 참고했다.  
그래서 나온 방법이 앞뒤의 수를 문자열로 더해 수를 비교하는 것이다.  
30과 3을 문자열로 더하면 303과 330이 나오게 된다. 이 두 수를 비교해 큰 수대로 정렬한다는 것이다.  
자바스크립트에서 숫자에서 문자로 바꾸는 형변환이 `` 숫자 + '' ``로도 할 수 있어서 map을 이용해 바꿔줄 수 있다.  
그리고 마지막으로 헤맸던 부분은 return할 때 `` answer[0] ``이 0인지 확인하는 부분이다.  
이 부분은 문자열 `` answer ``의 첫 번째 문자가 0인지 확인하기 위한 문구이다.  
정답 숫자의 첫 문자가 0이면 뒤에 숫자가 여러개 있어도 0일 것이기 때문에 0으로 바꿔주는 것이다.  
참고 : <https://code-reading.tistory.com/81> 

# 성공 코드

    function solution(numbers) {
        let answer = numbers.map(x =&gt; x + '')
            .sort((a, b) =&gt; (b + a) - (a + b)).join('');
        return answer[0] === '0' ? '0' : answer;
    }