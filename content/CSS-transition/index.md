---
title: "[CSS] transition"
tags: [undefined]
date: 2020-02-14 14:16:39
path: blog/CSS-transition
cover: ./no-image.png
excerpt: CSS-transition
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/172
## transition이란?

*   CSS 속성을 변경할 때 `` 애니메이션 속도를 조절 ``하는 방법을 제공하는 속성
*   속성의 변화가 일정 기간에 걸쳐 일어나도록 함
*   변화를 부드럽게 보여줄 수 있음

## 예제

    transition:width 2s, height 2s, background-color 2s, transform 2s;

## transitionend - transition 완료 감지하기

*   `` addEventListener ``를 사용하여 이벤트 모니터링 가능

    el.addEventListener("transitionend", updateTransition, true);

## Reference

[https://developer.mozilla.org/ko/docs/Web/CSS/CSS\_Transitions/Using\_CSS\_transitions](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)