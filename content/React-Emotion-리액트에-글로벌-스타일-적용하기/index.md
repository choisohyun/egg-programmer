---
title: "[React + Emotion] 리액트에 글로벌 스타일 적용하기"
tags: [undefined]
date: 2020-04-22 22:31:53
path: blog/React-Emotion-리액트에-글로벌-스타일-적용하기
cover: ./no-image.png
excerpt: React-Emotion-리액트에-글로벌-스타일-적용하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/226
>  
> Emotion 라이브러리를 사용해 reset.css를 적용할 수 있는 글로벌 스타일을 적용시키는 방법을 포스팅하려 한다.
> 

## 1. \[reset.jsx\]

*   html 기본 스타일을 없애주는 `` reset.css `` 스타일을 아래와 같이 넣고 저장한다.
*   reset.css는 <https://meyerweb.com/eric/tools/css/reset/> 를 참고해서 넣어주면 된다.
*   스크린샷에는 일부만 포함시켰다.

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@bh3M0Y/btqDFo2O2g8/GqYxKOHe9bIUKLyGkLjlck/img.png"/><p class="cap1">data-filename="code.png" data-origin-width="1346" data-origin-height="732"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

## 2. \[App.js\]

*   위의 리셋 스타일이 담긴 Reset.jsx를 import한다.
*   `` emotion `` 에서 Global을 import한다.
*   div 태그 안에 `` &lt;Global styles={reset} /&gt; ``을 넣어 준다.
*   Global 태그 아래로 다른 컴포넌트를 넣어주면 Global style이 적용된다.

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@ylgCD/btqDDw8yjXB/OkUb9Yfg59PBqpiSPmk0V0/img.png"/><p class="cap1">data-filename="code2.png" data-origin-width="1346" data-origin-height="696"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>