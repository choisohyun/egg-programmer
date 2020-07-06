---
title: "[CSS] transform"
tags: [undefined]
date: 2020-02-14 14:09:14
path: blog/CSS-transform
cover: ./no-image.png
excerpt: CSS-transform
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/171
# transform이란?

*   좌표공간을 __변형__함
*   일반적인 문서 흐름을 방해하지 않고 `` 콘텐츠의 형태와 위치 ``를 바꿈

## transform의 변형

*   평면에서의 변형
*   3D 공간에서의 회전, 확대, 이동, 기울이기
    
    *   회전: `` rotate() ``
    *   확대축소: `` scale() ``
    *   이동: `` translate() ``, `` translateX() ``, `` translateY() ``
    *   기울이기: `` skew() ``
    
    
    

## 예제

### HTML

    &lt;div&gt;Transformed element&lt;/div&gt;

### CSS

    div {
      border: solid red;
      transform: translate(30px, 20px) rotate(20deg);
      width: 140px;
      height: 60px;
    }

### 결과

![](https://i.imgur.com/eNaqB8p.png)

## Reference

*   [https://developer.mozilla.org/ko/docs/Web/CSS/CSS\_Transforms/Using\_CSS\_transforms](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
*   <https://developer.mozilla.org/ko/docs/Web/CSS/transform>