---
title: "[CSS] transitionend Event"
tags: [undefined]
date: 2020-02-15 16:16:59
path: blog/CSS-transitionend-Event
cover: ./no-image.png
excerpt: CSS-transitionend-Event
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/176
## transitionend Event란?

*   transition이 `` 완료된 이후 ``에 발생하는 이벤트, transition 완료를 감지한다.
*   transition과 함께 사용하는 함수
*   `` addEventListener ``를 사용하여 이벤트 모니터링 가능

## 예제

*   `` testDiv `` 의 콘텐츠에 마우스를 hover했을 때 2초 동안 원래 크기보다 1.1배 커지게 만든다.(transition)
*   transition이 끝나면 이를 감지하고 `` "이것은 테스트 텍스트입니다.." `` 라는 텍스트가 보이도록 한다.(transitionend)

        .testDiv {
            transition: 2s;
        }
    
        .testDiv:hover {
            transform: scale(1.1);
        }

        const test = document.querySelector(.testDiv);
    
        test.addEventListener("transitionend", addText);
    
        const addText = () =&gt; {
            test.innerHTML = "이것은 테스트 텍스트입니다..";
        }

## Reference

<http://blim.co.kr/archives/138>

[https://www.w3schools.com/jsref/event\_transitionend.asp](https://www.w3schools.com/jsref/event_transitionend.asp)