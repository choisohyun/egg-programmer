---
title: "[CSS] requestAnimationFrame"
tags: [undefined]
date: 2020-02-14 12:29:58
path: blog/requestAnimationFrame
cover: ./no-image.png
excerpt: requestAnimationFrame
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/170
# requestAnimationFrame이란?

*   rAF
*   DOM 기반 스타일 변경, 캔버스 또는 WebGL 등 __애니메이션__에 사용하기위한 기본 API
*   __Javascript 실행 최적화__를 위해 setTimeout, setInterval을 피하고 requestAnimationFrame 사용

    window.requestAnimationFrame(callback);

## Reference

*   <https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=ko>
*   <https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/>
*   <https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame>