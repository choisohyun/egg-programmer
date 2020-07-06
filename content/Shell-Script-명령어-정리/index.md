---
title: "Shell Script 명령어 정리"
tags: [undefined]
date: 2020-06-29 21:54:32
path: blog/Shell-Script-명령어-정리
cover: ./no-image.png
excerpt: Shell-Script-명령어-정리
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/257
# Shell Script

## Shell Script 명령어 정리

### 기본 명령어

<table>
<thead>
<tr>
<th>명령어</th>
<th>설명</th>
</tr>
</thead>
<tbody><tr>
<td>pwd</td>
<td>현재 경로 출력</td>
</tr>
<tr>
<td>ls</td>
<td>현재 디렉토리에서의 파일 리스트 출력</td>
</tr>
<tr>
<td>ls -l</td>
<td>접근권한, 생성시간을 포함한 파일 상세 리스트 출력</td>
</tr>
<tr>
<td>mkdir [directory name]</td>
<td>새로운 디렉토리 생성</td>
</tr>
<tr>
<td>cd cd ./ cd ../ cd [path]</td>
<td>home 디렉토리로 이동 현재 디렉토리로 이동 바로 이전 디렉토리로 이동 설정한 경로 디렉토리로 이동</td>
</tr>
<tr>
<td>cat test.txt</td>
<td><strong>test.txt</strong>의 내용 출력</td>
</tr>
<tr>
<td>history [n]</td>
<td>지금까지 입력한 명령어 목록 출력 숫자를 정해 최근 n개의 명령어만 출력하게 할 수도 있다.</td>
</tr>
<tr>
<td>cp filename1 directory</td>
<td>파일 복사</td>
</tr>
<tr>
<td>mv</td>
<td>파일 이동</td>
</tr>
<tr>
<td>rm</td>
<td>파일 삭제 디렉토리 삭제 시, -r 옵션 부여</td>
</tr>
<tr>
<td>find [directory name] -name "file.txt"</td>
<td>디렉토리를 설정하지 않으면 현재 디렉토리에서 모든 하위 폴더의 이름을 찾아 출력</td>
</tr>
<tr>
<td>touch foo.txt</td>
<td>0바이트 파일 생성</td>
</tr>
</tbody></table>

### tree

*   
    
    폴더의 하위 구조를 계층적으로 표시해 주는 유틸리티
    
    
*   
    
    전체 구조를 대략적으로 파악할 때 유용함
    
    
*   
    
    tree 설치하기  
     `` $ sudo apt install tree `` 
    
    
*   
    
    tree 버전 확인하기  
     `` $ tree --version ``
    
    
*   
    
    tree 기본 명령어 
    
    
    
          $ tree
        
          // 출력
          .
          ├── backup
          ├── Desktop
          ├── Documents
          │   └── foo.txt
          ├── Downloads
          ├── examples.desktop
          ├── Music
          ├── Pictures
          ├── Public
          ├── Templates
          └── Videos
        
          9 directories, 2 files
    
    

### 변수

#### 환경 변수 (전역 변수)

*   
    
    bash를 사용하는 시스템 전체에 영향을 미치는 변수
    
    
*   
    
    값이 프로세스에 상속됨
    
    
*   
    
    __미리 정의된 환경변수__와 __사용자 지정 환경 변수__가 있음
    
    
*   
    
    [미리 정의된 환경변수 리스트](http://forum.falinux.com/zbxe/index.php?document_srl=543614&amp;mid=lecture_tip)
    
    
*   
    
    설정된 환경변수 확인  
     `` $ env `` 
    
    
*   
    
    환경변수 출력  
     `` $echo $PATH ``
    
    
*   
    
    환경변수 변경 
    
    
    
          # 1. export 사용 : 재부팅 시 초기화
          $ export PATH=$PATH:/[path]
        
          # 2. file 수정
          $ vi ~/.bashrc # 파일 편집기에 들어감
          $ export PATH="$PATH:/usr/프로그램 경로/bin" # 을 아래쪽에 추가
          $ source .bashrc # 명령어 실행
    
    
*   
    
    환경변수 해체  
     `` unset TEST ``
    
    

#### 쉘 변수 (지역 변수)

*   환경 변수의 일반적인 유형, 사용자 또는 사용자의 쉘이 이용하기 위한 정보를 모아두는 곳
*   값이 프로세스에 상속되지 않음
*   소문자로 작성
*   쉘 변수 설정  
     `` $ set test="testing" ``
*   쉘 변수 삭제  
     `` unset test ``

## Bash 쉘 스크립트

### \#!bin/bash를 쓰는 이유

*   사용하려는 명령어 해석기가 bash 쉘 임을 미리 알려주는 것
*   스크립트의 첫 라인의 `` # ``은 주석 기호가 아님
*   `` #! `` : 매직 코드, 실행 가능한 쉘 스크립트라는 것을 나타내는 특별한 표시자
*   `` bin/bash `` : 경로명, 스크립트에 들어있는 명령어들을 해석할 프로그램의 위치를 나타냄
*   `` bash `` : 리눅스, 맥 등 운영체제의 기본 쉘

### 실행하기

*   실행 모드로 변경하기  
     `` chmod +x test.sh ``
*   실행하기  
     `` ./test.sh ``

# 참고

*   [쉘 스크립트의 처음 \#!/bin/bash 에 대하여.](http://forum.falinux.com/zbxe/index.php?document_srl=541629&amp;mid=lecture_tip)
*   [Linux tree 명령어 사용법](https://www.lesstif.com/pages/viewpage.action?pageId=54952142)
*   [BASH SHELL 배쉬 셀](https://seven00.tistory.com/680)
*   [bash shell 환경변수](http://jinyongjeong.github.io/2016/06/06/bash_shell_environment_variable/)
*   [bash의 환경 변수](http://forum.falinux.com/zbxe/index.php?document_srl=543614&amp;mid=lecture_tip)
*   [Linux 공부 4 - 쉘 변수와 환경 변수](http://throughkim.kr/2016/12/22/linux-4/)