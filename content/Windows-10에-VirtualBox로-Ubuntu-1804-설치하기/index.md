---
title: "Windows 10에 VirtualBox로 Ubuntu 18.04 설치하기"
tags: [undefined]
date: 2020-03-21 21:04:46
path: blog/Windows-10에-VirtualBox로-Ubuntu-1804-설치하기
cover: ./no-image.png
excerpt: Windows-10에-VirtualBox로-Ubuntu-1804-설치하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/209
# Windows 10에 VirtualBox로 Ubuntu 18.04 설치하기

>  
> 윈도우에 우분투를 설치하기 위해서는 가상환경이 필요하다.  
> 가상환경은 VirtualBox 외에도 `` Docker, VMWare, Parallels `` 등이 있다.  
> 자신의 환경에 맞는 가상환경을 설치하면 된다.  
> 나는 그 중 VirtualBox를 사용했다.
> 

## 가상환경(VirtualBox) 설치하기

### 1. VirtualBox 설치파일 다운로드

*   [VirtualBox 홈페이지](https://www.virtualbox.org/) 접속 - Download - Windows host

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/002.png)

### 2. VirtualBox 설치

*   설치가 완료될 때까지 `` Next `` 클릭
*   중간에 `` Warning `` 메시지가 나와도 놀라지 말고 무시해도 된다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0002.png)

### 3. 설치 완료

*   아래와 같은 페이지가 나온다면 설치가 완료된 것이다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0003.png)

#### 이제 우분투를 시작해 보자!

# 

## VirtualBox에 Ubuntu 18.04 설치하기

### 1. 아래의 우분투 릴리즈 페이지에서 Desktop image 파일 다운로드

*   [Ubuntu releases](http://mirror.kakao.com/ubuntu-releases/bionic/) 

![ubuntu_release_page](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/001_ubuntu_release_page.png)

### 2. VirtualBox 메인화면 새로 만들기 클릭

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0003_LI.jpg)

### 3. 가상 머신 이름 지정 후 다음 클릭

*   나는 `` Ubuntu18.04 ``라는 이름을 지정해 줬다. 
*   머신 폴더는 기본적으로 `` VirtualBox VMs ``라는 폴더로 지정되고 바꾸지 않아도 된다.
*   이름에 `` ubuntu ``가 들어가게 적으면 `` 종류 ``와 `` 버전 ``은 자동적으로 선택된다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0004.png)

### 4. 메모리 크기 설정

*   내가 모르고 넘어갔다가 반나절 이상을 고생한 원인이다.
*   기본 설정값이 `` 1024MB(1GB) ``로 되어 있고 추천 메모리라는 문구가 뜬다
*   하지만, 컴퓨터의 사양이 모자라거나 조금 오래된 컴퓨터라면 __무조건__ 기본 `` 2048MB(2GB) `` 이상으로 설정하길 바란다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt_4.png)

### 5. 하드디스크 - 지금 새 가상 하드 디스크 만들기 선택

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt5.png)

### 6. 하드디스크 파일 종류 - VDI 선택

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt6.png)

### 6. 물리적 하드 드라이브에 저장 - 고정 크기 선택

*   동적 할당을 선택해도 무방하다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt7.png)

### 7. 파일 위치 및 크기 - 자동 선택 유지

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt8.png)

### 8. 가상 하드 디스크 만드는 중

*   약 1분 정도 소요 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt9.png)

### 9. 가상 머신 생성 확인 및 설정 클릭

*   새로운 ubuntu 가상 머신이 생성된 것을 확인한다.
*   설정을 크게 바꿔주지 않아도 잘 동작하는 컴퓨터도 있으나 설정 하나로 오류가 나는 부분이 꽤 있어서 그 부분들을 설명하면서 추천 설정을 안내할 것이다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt10.png)

### 10. \[시스템 - 마더보드 - 부팅 순서\] - Floppy 해제

*   광 디스크와 하드 디스크는 해제하면 중간에 오류 메시지가 뜨니 해제하면 안된다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt11.png)

### 11. \[시스템 - 프로세서\] - CPU 2개, PAE/NX 사용하기 활성화

*   CPU를 1개로 사용할 경우 느린 컴퓨터에서는 더 느리게 작동한다. 다른 블로그들에서도 2개 이상을 추천하니 2개로 설정하자.
*   `` PAE/NX 사용하기 ``를 비활성화 상태로 두면 오류가 발생할 수 있으니 활성화 시키는 것이 좋다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt12.png)

### 12. (선택)(오류 시) 디스플레이 설정

*   비디오 메모리는 기본적으로 `` 16MB ``로 설정되어 있다. 비디오 메모리를 키우면 더 빨라진다는 얘기를 봤는데 나는 큰 차이는 못 느껴서 기본으로 놓고 있다. 선택사항이다.
*   그래픽 컨트롤러는 기본적으로 `` VMSVGA ``로 설정되어 있다. 만약 부팅 중 아래와 같은 오류 메시지가 보인다면 `` VBoxVGA ``로 바꿔 보자. 오류 메시지가 사라진다.
    
          drm:vmn_host_log [vmugfx] ERROR Failed to send log
    
    

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt13.png)

*   참고: 3차원 가속은 사용하면 빨라진다고도 하는데 오류를 발생시킬 수도 있어서 저사양 컴퓨터라면 굳이 사용하지 않는 것을 추천한다.  
    ![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt14.png)

### 13. \[저장소 - 비어 있음\] - 다운받은 이미지 파일 지정

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt15.png)

### 14. 오디오 사용하기 비활성화

*   오디오 기능을 사용하지 않을 것이라면 비활성화하는 것이 좋다. 오류를 발생시킬 수 있다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt16.png)

#### 이제 설정이 끝났다. 이제 우분투를 본격적으로 설치해 보자.

### 15. 시작 버튼 클릭

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt17.png)

### 16. 시동 디스크 선택 - 자동 선택

*   설정에서 선택한 이미지 파일이 선택된다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0010.png)

### 17. ubuntu 로딩 화면

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt19.png)

### 18. 설치화면 등장 - 언어 선택 - Install Ubuntu 클릭

*   언어 스크롤을 내리면 한국어도 있다. 

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt20.png)

### 19. Keyboard layout 설정

*   나는 기본으로 설정했다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt21.png)

### 20. Updates and other software 설정

*   `` Normal installation ``, `` Download updates while installing Ubuntu `` 선택
*   `` Download updates while installing Ubuntu ``는 지금 하지 않아도  
    설치 후에 터미널에서 `` sudo apt-get update `` 명령어를 통해 진행할 수 있다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt22.png)

### 21. Erase disk and install Ubuntu 선택

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt23.png)

*   선택하고 나면 디스크가 바뀌는 것에 대한 확인을 다시 한 번 한다. `` Continue ``하면 된다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt24.png)

### 22. (자동) 나라 선택

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt25.png)

### 23. 계정 정보 설정

*   앞으로 우분투와 관련된 모든 곳에 쓰이므로 설정한 `` username ``과 `` password ``를 잘 기억하고 있어야 한다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt26.png)

### 24. 설치 진행 화면

*   설치하는 데에는 10~15분 정도 소요된다.
*   설치하면서 진행중인 내용과 각종 글들이 지나가는데 만약 설치하고 있는데 움직이지 않다가 검은화면이 된다면 뭔가 잘못된 것이다. 일단 끄고 설정에서 메모리 크기를 늘려줘 보자.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0013.png)  
![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt27.png)

### 25. 설치 완료 - 재시작

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt28.png)

### 26. 설치 완료 - 로그인 화면

*   위에서 설정한 계정의 `` username ``이 있는 것을 볼 수 있다.  
    눌러서 비밀번호를 입력해 로그인하면 설치 성공이다! 야호!
*   만약 `` username `` 대신 `` Live session user ``가 보인다면 설치가 제대로 안 된 것이니 다시 설치하거나 설정을 변경해 줘야 한다.

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/ttt29.png)

*   Ubuntu 시작 화면

![virtualbox](https://gist.github.com/choisohyun/e99ad5b8b776bd6d787425c3c78b28c4/raw/5fac08ac6bb00cba2f46b53722fa8950f5832950/0016.png)