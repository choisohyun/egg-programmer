---
title: "[Node] npm vs npx vs yarn"
tags: [undefined]
date: 2020-04-22 23:50:07
path: blog/Node-npm-vs-npx-vs-yarn
cover: ./no-image.png
excerpt: Node-npm-vs-npx-vs-yarn
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/227
>  
> npm, npx, yarn, bower 등은 모두 Node 프로젝트에서 설치되는 패키지들을 관리해 주는 툴이라고 할 수 있다.  
> 나는 평소 npm을 사용하고, 서버에서 배포할 때는 npx 명령어를 사용했다.  
> npm으로 설치하는 것과 같은 결과물이 나오는 다른 명령어가 있다는 것을 알게 되어 의미를 정리해 보고자 포스팅한다.
> 

## NPM

>  
> 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자
> 

npm은 `` node package manager `` 라는 말 그대로 노드에서의 패키지 관리자이다. 

자바스크립트 환경에서 프로젝트를 시작할 때 node와 함께 설치하라는 Getting Started가 많고, 사용빈도가 높다.

## NPX

npx는 `` execute npm package binaries ``의 줄임말로, npm에 속해 있는 npm 패키지 실행 도구이다.

여기서 npx가 __패키지 실행 도구__ 라는 것이 npm과의 큰 차이점이자 장점이다.

npx는 해당 패키지를 실행만 되게 해 주기 때문에 가볍게 쓸 수 있다. 

예로, 다른 사람의 깃허브 레포지토리에서 다운받아 실행만 시켜보고 싶다고 가정해 보자. package.json의 scripts 중 하나를 실행하고 싶을 때 npx와 스크립트를 적으면 패키지 설치를 하지 않고 실행을 할 수 있다. 

개발을 하는 입장이라면 npm과 npx의 차이를 못 느낄 수 있지만, 실행하는 입장에서는 크게 다가오는 차이점이다.

## Yarn

>  
> 안전하고 안정적이며 재현 가능한 프로젝트
> 

yarn은 npm, npx와는 결이 다른 패키지 관리자이다. 

속도나 안정성에서는 npm과 비슷하다. 다른 점이자 장점은 버전을 어디에서나 같게 만들어 버그를 줄임으로써 보안을 높였다는 점이다. 

단점으로는 npm의 점유율이 높아 npm에 관련된 자료가 더 많다는 것이 되겠다.

서로 장단점이 있겠지만 좋은 패키지 관리자들이기 때문에 상황에 따라 원하는 것을 쓰면 될 것 같다. 

## 참고

*   [https://velog.io/@kimkyeseung/번역-그래-npx-npm말고-차이점-설명](https://velog.io/@kimkyeseung/%EB%B2%88%EC%97%AD-%EA%B7%B8%EB%9E%98-npx-npm%EB%A7%90%EA%B3%A0-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%84%A4%EB%AA%85)
*   <https://medium.com/@ehddnjs8989/npm-vs-yarn-3a611c89d291>
*   <https://docs.npmjs.com/about-npm/>
*   <https://www.npmjs.com/package/npx>