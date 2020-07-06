---
title: "[Git] 수정, 추가 파일 Commit, push하는 명령어"
tags: [undefined]
date: 2019-12-25 13:58:03
path: blog/Git-수정-추가-파일-Commit-push하는-명령어
cover: ./no-image.png
excerpt: Git-수정-추가-파일-Commit-push하는-명령어
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/111
## \[Git\] 수정, 추가 파일 Commit, push하는 명령어

    git init
    git status
    git add .
    git add [filename]
    git commit -m "message"
    git log
    
    git remote add origin [git repository address]
    git push origin master

## git commit으로 에디터로 들어갔다면

    i // 현재 커서에 입력
    "commit message"  // 커밋 메시지 입력
    ESC // 명령 모드로 전환
    !wq // 저장 후 종료

## 깃허브에서 repository 생성 시 readme.md 파일을 생성하도록 만들거나, 올리던 도중에 깃허브에 연결하려고 할 때

    git pull origin master --allow-unrelated-histories