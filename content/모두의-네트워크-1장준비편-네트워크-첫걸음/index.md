---
title: "[모두의 네트워크] 1장[준비편] - 네트워크 첫걸음"
tags: [undefined]
date: 2020-04-05 13:56:44
path: blog/모두의-네트워크-1장준비편-네트워크-첫걸음
cover: ./no-image.png
excerpt: 모두의-네트워크-1장준비편-네트워크-첫걸음
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/217
<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@b0z9E5/btqDblNVWdv/kKauSJnkYjjHz9a1Fv5hm0/img.png"/><p class="cap1">data-filename="모두의 네트워크.png" data-origin-width="1080" data-origin-height="1080"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

# 1장\[준비편\] - 네트워크 첫걸음

>  
> 네트워크의 기초 지식 익히기
> 

## 목차

*   네트워크
*   패킷
*   램(LAN), 왠(WAN)

### 인터넷

*   전 세계의 네트워크를 연결하는 거대한 네트워크

### 패킷(=택배)

*   데이터를 주고받을 때 네트워크를 통해 전송되는 데이터의 작은 조각
*   큰 데이터(=대형 트럭)를 보낼 때 네트워크의 `` 대역폭 ``을 너무 많이 점유해 다른 패킷의 흐름을 막을 위험(=교통 정체)이 있어 `` 작게 `` 나누어 보냄
*   용량이 큰 데이터는 `` 패킷을 분할 ``하여 전송한다
*   패킷이 도착지에 도착하면 번호순으로 정렬해 다시 합친다

### LAN vs WAN

<table>
<thead>
<tr>
<th align="center">&nbsp;</th>
<th align="center">LAN</th>
<th align="center">WAN</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">&nbsp;</td>
<td align="center">좁은 범위의 네트워크<br/>Local Area Network</td>
<td align="center">넓은 범위의 네트워크<br/>ISP 서비스로 구축된 네트워크<br/>Wide Area Network</td>
</tr>
<tr>
<td align="center">범위</td>
<td align="center">특정 지역</td>
<td align="center">LAN과 LAN을 연결</td>
</tr>
<tr>
<td align="center">예시</td>
<td align="center">가정, 사무실 - 컴퓨터, 프린터</td>
<td align="center">서울 - 부산</td>
</tr>
<tr>
<td align="center">오류 발생 확률</td>
<td align="center">낮음</td>
<td align="center">높음</td>
</tr>
<tr>
<td align="center">속도</td>
<td align="center">빠름</td>
<td align="center">느림</td>
</tr>
</tbody>
</table>

>  
> ISP 서비스 - 통신사 서비스
> 

## 가정에서의 네트워크 구성

#### 랜

*   집에서 구성하는 네트워크
*   외부에 공개되지 않음
*   인터넷 공유기를 중심으로 `` 내부 인터넷망(사설망) `` 구성
*   다양한 기기 연결 가능
*   __유선__: 랜 케이블이 필요한 경우
*   __무선__: 랜 케이블이 필요하지 않은 경우
*   인터넷을 사용하기 위해 결정해야 할 것 : __인터넷 서비스 제공자, 인터넷 회선(광랜)__

#### 인터넷 공유기

*   인터넷 서비스 제공자 —연결— 네트워크
*   `` Broadband router ``
*   가정용으로 만든 라우터
*   허브, 스위칭 허브, 방화벽 기능도 제공

## 소규모 회사에서의 네트워크 구성

### DMZ

*   외부에 공개하기 위한 네트워크
*   웹, 메일, DNS 서버를 공개함

#### 서버 운영 방법

1.   __서버 사내 설치__

*   사내 장비실에 랙(선반) 설치 =&gt; __온프레미스__

### &nbsp;

<ol start="2">
<li><b>데이터 센터에 둠</b></li>
</ol>

*   데이터 센터: 대량 데이터 보관을 위해 데이터 센터 서버나 네트워크 기기를설치한 전용 시설

### &nbsp;

<ol start="3">
<li><b>클라우드에 둠</b></li>
</ol>

*   인터넷을 통해 컴퓨팅 서비스를 제공하는 것
*   인터넷에 접속하면 언제든지 이용 가능