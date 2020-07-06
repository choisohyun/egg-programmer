---
title: "[React] create-react-app(CRA)의 마법"
tags: [undefined]
date: 2020-04-20 22:22:04
path: blog/React-create-react-appCRA의-마법
cover: ./no-image.png
excerpt: React-create-react-appCRA의-마법
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/225
## 리액트를 가장 빠르게 시작하는 방법 3가지

<pre class="dsconfig"><code>1. npx create-react-app my-app
2. npm init react-app my-app
3. yarn create react-app my-app</code></pre>

위의 세 가지 중 하나의 명령어를 입력하면 create-react-app이 설치가 시작돼 마법이 펼쳐진다.

webpack, babel 등의 환경 설정을 따로 하지 않아도 바로 리액트로 개발을 시작할 수 있게 된다.

물론 서비스를 만드는 회사에서는 커스텀 환경을 더 많이 쓰겠지만, webpack, babel 등에 대해 완전한 이해가 없는 초보 개발자에게는 바로 개발을 시작할 수 있는 놀라운 환경을 제공해 주는 것이다.

직접 환경 설정을 하는 것도 중요하겠지만, 차근차근 해도 나쁘지 않을 것 같다.

나는 사실 Vanilla JS를 먼저 접하면서 webpack.config, tsconfig, babel.config 등을 설정하는 것이 조금 익숙해 지려는 차였는데 CRA를 알게 되어 이를 사용해 설치를 해 보았다.

설치를 하고 `` npm start ``를 치니 바로 리액트 기본 앱이 등장했다. 편하다고 생각하는 찰나에 폴더 구조를 봤다.

__어라?__ webpack.config... 등 환경설정 파일이 보이지 않았다.

CRA 깃허브 레포지토리도 뒤져 봤지만 webpack이라는 단어가 보이지 않았다.

빌드는 어떻게 하는 걸까???? 싶었는데 요놈의 마법은 숨어 있었다.

<pre class="routeros"><code>node_modules ⇒ react-scripts ⇒ config ⇒ webpack.config.js</code></pre>

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@nmoAI/btqDzjVR0Fa/VUiAsVR5EopqraFYwsn9Ak/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

위의 경로로 들어가면 엄청나게 복잡해 읽기도 힘든 웹팩 설정이 들어 있었다.

이 react-scripts에 웹팩 설정이 있기 때문에 `` package.json ``에서 scripts에 react-scripts를 아래와 같이 사용할 수 있는 것이다.

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@yEgFH/btqDyMKH30q/PakDCzEes8ecyrA7qqAh30/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

### npm start

*   개발 모드로 앱 실행하기

### npm test

*   반응 모드로 테스트 실행하기

### npm run build

*   배포 모드로 앱 실행하기
*   build 폴더에 배포 파일이 담김

### npm eject

*   위 node\_modules에 있는 설정 꺼내서 바꾸기

>  
> eject를 사용해 수정할 수 있지만 설정이 복잡하기 때문에 이해하고 있지 않다면 권장하지 않는 방법이다.  
> 직접 간단하고 필요한 설정부터 해 보는 것이 나중에 이해하고 수정하기도 쉽다.
> 

## 참조

*   [create-react-app repository](%5Bhttps://github.com/facebook/create-react-app%5D(https://github.com/facebook/create-react-app))