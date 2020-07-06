---
title: "clearTimeout이 사용되는 경우(Debouncing)"
tags: [undefined]
date: 2020-03-06 12:13:30
path: blog/clearTimeout이-사용되는-경우Debouncing
cover: ./no-image.png
excerpt: clearTimeout이-사용되는-경우Debouncing
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/200
# clearTimeout이란?

setTimeout을 취소(초기화)시키는 메소드이다.

## 그럼 setTimeout이란?

<pre><code class="language-js">setTimeout(callbackFn, TIME);</code></pre>

`` TIME ``ms 이후에 `` callbackFn ``이 실행되는 메소드이다.

TIME을 1초로 설정한다면, 1초 뒤에 콜백함수가 실행되는 비동기 메소드이다.

## setTimeout에 clearTimeout이 꼭 필요할까?

>  
> 결론부터 말하자면, 특별한 상황이 아니면 꼭 필요하지는 않다.
> 

특정 시간만큼 반복해서 콜백함수를 실행하는 `` setInterval ``는 무한적으로 반복되기 때문에 중지하는 시점에서 `` clearTimeout ``을 해 줘야 한다.

하지만 한 번만 실행되는 `` setTimeout ``을 매번 `` clearTimeout `` 을 해 줄 필요는 없다.

## 그러면 어디에 쓰이는 거지?

>  
> setTimeout이 취소되야 하는 상황에 쓰여야 한다.
> 

setTimeout이 취소되야 하는 상황의 예에는 addEventListener 안에 쓰였을 때가 있다. 

만약 검색자동완성을 구현하기 위해 input이 들어오고 300ms 뒤에 setTimeout을 사용해 \[Debouncing\]을 한다.

Debouncing에 관한 내용은 [제로초님 블로그](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)에서 자세히 볼 수 있다. 

## 참고

<https://stackoverflow.com/questions/7391567/when-using-settimeout-do-you-have-to-cleartimeout>

<https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa>