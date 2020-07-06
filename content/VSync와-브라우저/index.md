---
title: "[CSS] VSync와 브라우저"
tags: [undefined]
date: 2020-02-14 12:28:54
path: blog/VSync와-브라우저
cover: ./no-image.png
excerpt: VSync와-브라우저
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/169
# VSync란?

*   
    
    Vertical sync (수직 동기화)
    
    
*   
    
    GPU, 비디오 게임 및 모니터를 위한 최초의 `` 동기화 기술 ``
    
    
*   
    
    게임의 __프레임 속도__와 게임 모니터의 __재생 빈도__를 동기화하는 그래픽 기술
    
    
    
    ⇒ 게임 FPS는 모니터가 따라잡을 수 없는 속도로 정보를 전달했음
    
    
    
    ⇒ 서로 다른 화면이 충돌해 화면이 __어긋나게 보여짐(Screen Tearing)__
    
    

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e34c64b-af04-46c8-a993-4fa4b3a95ecf/Untitled.png](https://i.imgur.com/G9nG3Uf.png)

 ⇒ VSync 도입으로 FPS에 제한을 두어 동기화되게 하고, 부드러운 게임 화면을 볼 수 있게 됨

*   `` 해상도, 색상, 밝기 ``를 향상시킬 수는 없음

# Frame Timing이란?

*   프레임을 `` 실행/랜더링 ``하는 데 걸리는 시간

<video autoplay="" loop="" muted="" playsinline="" src="https://thumbs.gfycat.com/SardonicSociableLeafbird-mobile.mp4" type="video/mp4"></video>

*   랜더링되는 여러 프레임 간 타이밍이 얼마나 __일관성__ 있는지도 보여줌
*   서로 다른 `` Frame Rates ``
    
    *   프레임 속도가 낮을수록 프레임을 렌더링하는 데 시간이 오래 걸림
    *   프레임 속도가 높을수록 프레임을 렌더링하는 데 시간이 짧음
    
    
    

<video autoplay="" loop="" muted="" playsinline="" src="https://thumbs.gfycat.com/SimpleResponsibleBluebottle-mobile.mp4" type="video/mp4">
</video>

*   
    
    매끄러운 애니메이션을 보이기 위해서는
    
    
    
     ⇒ 프레임 드랍이 없어야 함
    
    
    
     ⇒ 애니메이션 구성의 기준이 되는 각 프레임의 시간차가 작고 일정해야 함
    
    

⇒ `` Frame Timing Control `` : 프레임 생성을 위한 시간 제어

# 브라우저의 Frame Timing 구성

1.   타이머 사용
    
    *   16.6ms 주기의 타이머 사용
    *   단점: 프레임 드랍 발생
    
    
    
2.   VSync 정보로 Refresh 주기 설정
    
    *   VSync 정보: frame time, frame interval
    
    
    
3.   VSync 활용 - Callback 방식(Android/iOS/OSX)
    
    *   Callback 호출 시 interval 예측해 정확한 프레임 타임 계산
    
    
    
4.   VSync 활용 - Querying 방식(Windows/Linux)
    
    *   프레임마다 VSync 정보를 갱신하여 정확한 주기의 타이머 설정
    
    
    

툴킷들의 프레임 타이밍 

# Web Application Scheduling

### draw callback

`` window.requestAnimationFrame ``

### idle callback

`` window.requestIdelCallback ``

### ⇒ 정확한 _프레임 타이밍_이 기반이 되어야 동작성을 보장할 수 있음

## Refference

*   <https://www.digitaltrends.com/computing/what-is-vsync/>
*   <https://www.testufo.com/browser.html>
*   <https://www.slideshare.net/deview/133-vsync>
*   <https://paulbakaus.com/tutorials/performance/the-illusion-of-motion/>