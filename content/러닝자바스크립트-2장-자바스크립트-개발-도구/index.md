---
title: "[러닝자바스크립트] 2장. 자바스크립트 개발 도구"
tags: [undefined]
date: 2020-02-18 11:39:08
path: blog/러닝자바스크립트-2장-자바스크립트-개발-도구
cover: ./no-image.png
excerpt: 러닝자바스크립트-2장-자바스크립트-개발-도구
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/183
#### 프로젝트 구조

    .git        # git
    
    es6         # 노드 소스
    dist
    
    public/     # 브라우저 소스
        es6/
        dist/

#### 자바스크립트 개발도구

1.   Git 연결 및 Commit
2.   빌드 도구(gulp) 설치  
     `` gulp ``: 개발 과정에서 도움이 되는 개발 의존성 도구
3.   트랜스컨파일러(babel) 설치  
     `` babel ``: `` ES5 --&gt; ES6 ``, ES6와 리액트, ES7 등을 지원하는 범용 트랜스컴파일러
4.   babel과 gulp 함께 사용하도록 설정  
     `` gulpfile.js ``에 파이프로 연결
5.   ESLint 설치  
     `` ESLint ``: 코드를 검토해 자주 일어나는 실수를 알려주는 프로그램.