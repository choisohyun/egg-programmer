---
title: "[HTTP] DOM과 브라우저 동작방식"
tags: [undefined]
date: 2020-02-14 12:14:56
path: blog/DOM과-브라우저-동작방식
cover: ./no-image.png
excerpt: DOM과-브라우저-동작방식
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/165
## \[DOM

*   문서 객체 모델
*   HTML, XML 문서의 프로그래밍 Interface
*   문서의 구조화된 표현 제공
*   프로그래밍 언어가 DOM 구조에 접근 가능한 방법 제공
    
    *   문서 구조, 스타일, 내용 변경 가능하게 도움
    
    
    

*   웹페이지 : 일종의 `` document ``  
    Object로 구성되어 있음
    
    *   구성 요소: `` property, method, event ``
    
    
    

*   웹페이지의 `` 객체지향 `` 표현
*   DOM API(함수묶음정도) 제공

## 브라우저 동작방식

브라우저는 어떻게 동작하는가 Naver D2

*   <https://d2.naver.com/helloworld/59361>
*   <https://poiemaweb.com/js-browser> (브라우저 동작원리)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/162d1fb2-83c1-4851-a241-41d527c879f5/Untitled.png](https://i.imgur.com/SU16f6d.png)

*   자바스크립트는 렌더링 엔진이 아닌 `` 자바스크립트 엔진 ``이 처리한다.

### 랜더링 엔진 기본동작 과정

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efb5f0a0-4a04-4296-875c-9b6cb319e8e5/Untitled.png](https://i.imgur.com/6sCeq3e.png)

### 자바스크립트 엔진

JS를 실행하는 프로그램/인터프리터

*   [V8](https://ko.wikipedia.org/wiki/%ED%81%AC%EB%A1%AC_V8) - 오픈 소스. 덴마크에서 구글이 개발. 구글 크롬의 일부
*   [웹킷](https://ko.wikipedia.org/wiki/%EC%9B%B9%ED%82%B7) - 오픈 소스. Nitro가 홍보하고 [사파리](https://ko.wikipedia.org/wiki/%EC%82%AC%ED%8C%8C%EB%A6%AC_(%EC%9B%B9_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80))용으로 [애플](https://ko.wikipedia.org/wiki/%EC%95%A0%ED%94%8C_(%EA%B8%B0%EC%97%85))이 개발.