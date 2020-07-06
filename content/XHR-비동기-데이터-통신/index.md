---
title: "[HTTP] XHR - 비동기 데이터 통신"
tags: [undefined]
date: 2020-02-14 11:58:20
path: blog/XHR-비동기-데이터-통신
cover: ./no-image.png
excerpt: XHR-비동기-데이터-통신
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/159
# __XHR__ : XMLHttpRequest

*   
    
    객체: 전체 페이지의 새로고침없이도 URL 로부터 데이터를 받아올 수 있는 서버와 상호작용하는 객체
    
    
*   
    
    `` ajax `` 요청을 생성하는 Javascript API
    
    
    
    *   HTTP Request 전송을 매우 쉽게 만들어 줌
    *   XMLHttpRequest를 통해 만들어진 request는 2가지 방법, _동기적_ 혹은 _비동기적_ 방법 중 한 방법으로 데이터를 가져 올 수 있음
    
    
    
*   
    
    메서드로 __브라우저__와 __서버__ 간 네트워크 요청을 전송할 수 있음
    
    

## 비동기 데이터 통신

*   에디터 내에 동기신호를 포함시켜 데이터를 전송함.
*   송신측의 송신 클록에 관계없이 수신신호 클록으로 타임 슬롯의 간격을 식별하여 한 번에 한 문자씩 송수신하는 것
*   문자의 앞에는 시작비트 (Start Bit) , 끝에는 정지비트 (Stop Bit)를 첨가해서 보내는 방법
*   시작비트와 정지비트 사이의 간격이 가변적이므로 불규칙적인 전송에 적합
*   __송수신 간에 동기를 맞추지 않고 문자단위로 구분하여 전송하는 방식__

## 동기 데이터 통신

*   한 문자 단위가 아니라 `` 미리 정해진 수 만큼 ``의 문자열을 한 묶음으로 만들어서 일시에 전송하는 방법.
*   데이터와는 별도로 송신측과 수신측이 `` 하나의 기준 클록 ``으로 동기 신호를 맞추어 동작함.
*   비동기 통신 방식에 비해 전송효율이 높음
*   __송수신측 타이밍을 일치시키는 방식__

## 참고

*   [MDN - XMLHttpRequest](%5Bhttps://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest%5D(https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest))
*   [\[통신\] 동기와 비동기 통신차이](%5Bhttps://linkedlist.tistory.com/entry/%ED%86%B5%EC%8B%A0-%EB%8F%99%EA%B8%B0Sync%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0Async-%ED%86%B5%EC%8B%A0%EC%B0%A8%EC%9D%B4%5D(https://linkedlist.tistory.com/entry/%ED%86%B5%EC%8B%A0-%EB%8F%99%EA%B8%B0Sync%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0Async-%ED%86%B5%EC%8B%A0%EC%B0%A8%EC%9D%B4))