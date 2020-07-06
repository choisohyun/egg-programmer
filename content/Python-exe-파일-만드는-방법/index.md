---
title: "[Python] exe 파일 만드는 방법"
tags: [undefined]
date: 2019-11-22 04:47:15
path: blog/Python-exe-파일-만드는-방법
cover: ./no-image.png
excerpt: Python-exe-파일-만드는-방법
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/60
1. 터미널에 pip install pyinstaller 입력

2. 파일 경로로 이동해서 pyinstaller 파일명.py 입력

&nbsp;

하면 끝임...ㅋㅋㅋㅋ 도대체...왜..그렇게 구글링을 했는가..

처음에 하나의 exe파일로 압축되고 다른창이 안뜨게 하는 옵션을 집어넣었는데 계속 failed execute 어쩌고 에러가 떴는데 걍 기본 명령어 쳐주니 잘 돌아감 ㅋㅋㅋㅋㅋ

그리고 뭔지 모르겠는데 폴더에서 그냥 파이썬 파일 클릭해도 exe파일이 뜸(??!!)

&nbsp;

그리고

콘솔창 함수 끝나도 안닫히게 하는방법

&nbsp;

<span>import </span>os

os.system(<span>'Pause'</span>)

&nbsp;

써주면 된다