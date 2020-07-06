---
title: "[Javascript] DOM API"
tags: [undefined]
date: 2020-02-14 12:20:27
path: blog/DOM-API
cover: ./no-image.png
excerpt: DOM-API
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/166
# `` document.getElementById("{id}"); ``

*   주어진 문자열과 일치하는 `` id 속성 ``을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환
*   ID가 없는 요소에 접근하려면 `` Document.querySelector() ``를 사용
*   찾으려는 id가 없으면 `` null `` 반환

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/27b16df4-8484-4f27-8904-043a8d058312/Untitled.png](https://i.imgur.com/QU509gk.png)

# `` document.querySelector("{css selector}"); ``

# `` document.querySelectorAll("{css selector}"); ``

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cfc25f38-c523-4a29-a17d-0762e55d060b/Untitled.png](https://i.imgur.com/GrbMAMM.png)

### getElementId + innerHTML

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f46ae50-6913-47c3-b464-c2d7f94964a8/Untitled.png](https://i.imgur.com/OdO2ntt.png)

## Node Type

*   `` elements, text, comments `` 처럼 서로 다른 종류의 노드를 구별하는데 사용 가능

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c3dbd09-9c81-4d0d-83b1-7ba5190eb8c1/Untitled.png](https://i.imgur.com/Q1vnYhG.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30d45ebd-e01e-482b-bf51-e00bf76b6e01/Untitled.png](https://i.imgur.com/fXJacPV.png)

# HTML Node 탐색

*   
    
    text를 포함하여 탐색할 수 있음
    
    
    
     let divEl = documenlt.querySelector("div");  
     divEl;
    
    
    
     divEl.firstChild;  
     divEl.lastChild;
    
    
    
     divEl.childNodes;
    
    
    
     divEl.nextSibling;  
     divEl.previousSibling;
    
    

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a6beb92-5711-4aea-a181-8ba9a9e66732/Untitled.png](https://i.imgur.com/rM0iIGq.png)

# HTML Element 검색

*   text를 제외하고 검색

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6229a31-b1ce-4757-a6dd-aa762693ca2f/Untitled.png](https://i.imgur.com/6pBmds2.png)

# Node 생성과 추가

## appendChild

    document.createElement("div");
    document.createTextNode("text");
    element.appendChild();

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b61b882-6d51-4811-a5b0-ad6f8f6962b3/Untitled.png](https://i.imgur.com/QoTjilH.png)