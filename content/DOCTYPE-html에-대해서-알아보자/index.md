---
title: "[HTML] DOCTYPE html에 대해서 알아보자"
tags: [undefined]
date: 2020-02-14 12:02:53
path: blog/DOCTYPE-html에-대해서-알아보자
cover: ./no-image.png
excerpt: DOCTYPE-html에-대해서-알아보자
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/160
# DOCTYPE html 선언 의미

*   웹문서가 `` 어떤 버전의 html 언어 ``로 작성되었는지 결정하는 기능
*   __DTD로 정의되어__ 웹브라우저에 전달됨
*   `` 브라우저 ``: 선언된 문서 버전에 맞는 html 기술로 페이지 로드

## DTD란?

*   
    
    Document Type Declaration
    
    
*   
    
    브라우저 랜더링 모드를 지정해 줌
    
    
*   
    
    유효성 검증기의 기준이 됨
    
    
*   
    
    `` XHTML 문서 ``의 상단에 __반드시__ 선언해야 함
    
    
    
    ⇒ 생략하거나 형식이 잘못되면 엉뚱한 결과물이 출력되는 문제 발생함
    
    
    
    ⇒ 웹 브라우저마다 코드의 해석방식이 다른 `` 호환모드(Quirks mode) ``로 랜더링되기 때문에
    
    

### DTD 기본형식

*   
    
    __최상위 element name__: 이 문서는 html 문서이다.
    
    
*   
    
    __공개 범위__: 국제적이다.
    
    
*   
    
    __DTD 만든 기관__: 비공인인증인 W3C기관에 의해 XHTML 1.0을 Transitional 방식으로 영어공용어로 출력한다.
    
    
*   
    
    __참조할 DTD 문서:__ "<http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd>"
    
    
    
    &lt;!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN" "[http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"](http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd%22)
    
    

## html 문서 버전의 종류

*   html5
*   html4 이하
*   xhtml

🌟 구버전(html4 이하)과 신버전(html5)와의 호환성을 유지하기 위해 문서 선언은꼭 해야 한다.

## html 문서 버전별 선언 방법

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@PT5zn/btqBW0LeF7F/5xAt8DnmwJ4LiJKf4NdnCk/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

## 참고

*   <https://dasima.xyz/doctype-html/>
*   <https://maen2001.tistory.com/2>
*   브라우저별 DOCTYPE 해석표: <https://meyerweb.com/eric/dom/dtype/dtype-grid.html>
*   <https://caniuse.com/>