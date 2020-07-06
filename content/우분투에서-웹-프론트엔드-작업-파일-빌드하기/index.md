---
title: "우분투에서 웹 프론트엔드 작업 파일 빌드하기"
tags: [undefined]
date: 2020-05-06 22:07:14
path: blog/우분투에서-웹-프론트엔드-작업-파일-빌드하기
cover: ./no-image.png
excerpt: 우분투에서-웹-프론트엔드-작업-파일-빌드하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/232
>  
> 웹 작업은 node + webpack을 사용하고 서버 배포 작업은 우분투 등 리눅스 환경에서 분업하여 한다고 하자.  
> 백엔드 측에서 빌드하고 그 파일을 사용하려면 어떻게 해야 하는지 알아보았다.  
> node + yarn 을 사용했다. 
> 

1.   dotenv와 같이 gitignore에 올라가 있는 시크릿 파일이 있다면 따로 받아서 프로젝트 루트에 위치시키기

*   gitignore에 올라가 있는 파일은 보안 문제로 올라가지 않는 파일일 가능성이 있으므로 메일, 메신저 등을 이용해 따로 받는다. 

<ol start="2">
<li>nodejs 설치하기</li>
</ol>

<pre><code class="language-bash">curl -sL https://deb.nodesource.com/setup_xx.xx | sudo -E bash - // xx.xx에 프론트 측 노드 버전 입력
sudo apt-get install -y nodejs
node -v //프론트 측과 버전이 같아야 한다.</code></pre>

<ol start="3">
<li>yarn(node package 관리 도구) 설치하기</li>
</ol>

<pre><code class="language-bash">curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update &amp;&amp; sudo apt install yarn
yarn --version  //프론트 측과 버전이 같아야 한다.</code></pre>

<ol start="4">
<li>프로젝트에서 사용한 패키지 설치 및 빌드파일 생성하기</li>
</ol>

<pre><code class="language-bash">yarn install
yarn build</code></pre>

*   yarn build 이후에 특정 디렉토리에 빌드 결과물이 생성된다.

### 참고

*   <https://github.com/nodesource/distributions/blob/master/README.md>
*   [https://classic.yarnpkg.com/en/docs/install/\#debian-stable](https://classic.yarnpkg.com/en/docs/install/#debian-stable)