---
title: "[Git] 기본 용어 정리"
tags: [undefined]
date: 2020-03-22 14:53:11
path: blog/Git-기본-용어-정리
cover: ./no-image.png
excerpt: Git-기본-용어-정리
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/210
## Git 용어 정리

### 저장소 관련 용어와 의미들

<table>
<thead>
<tr>
<th></th>
<th>저장소 관련 용어와 의미들</th>
<th></th>
</tr>
</thead>
<tbody><tr>
<td>remote</td>
<td>원격 서버의 주소를 로컬 저장소와 연결하기 위한 명령어</td>
<td>git remote add origin &lt;원격 서버 주소&gt;</td>
</tr>
<tr>
<td>local</td>
<td>컴퓨터에 존재하는 저장소</td>
<td></td>
</tr>
<tr>
<td>init</td>
<td>.git이라는 하위 디렉토리를 만드는 명령어<br/>.git 디렉토리에는 저장소에 필요한 뼈대 파일이 있다.</td>
<td>git init</td>
</tr>
<tr>
<td>clone</td>
<td>1. 디렉토리 생성  <br/>2. 생성한 디렉토리에 진입  <br/>3. <strong>git init</strong>으로 git 저장소 생성  <br/>4. 입력한 URL을 <strong>origin</strong>의 <strong>remote</strong>로 추가  <br/>5. <strong>git fetch</strong>로 리모트 저장소에서 데이터를 가져옴  <br/>6. 최종 <strong>commit</strong>을 <strong>workinkg directory</strong>에 <strong>checkout</strong>함</td>
<td>git clone &lt;git 주소&gt;</td>
</tr>
</tbody></table>

### 상태관리 용어와 의미들

<table>
<thead>
<tr>
<th></th>
<th>상태관리 용어와 의미들</th>
</tr>
</thead>
<tbody><tr>
<td>git repository</td>
<td>git은 원격 저장소와 로컬 저장소 두 종류의 저장소를 제공함.<br/>- <strong>원격 저장소(Remote Repository)</strong>: <br/> 파일이 원격 저장소 전용 서버에서 관리되며 여러 사람이 함께 공유하기 위한 저장소.<br/>- <strong>로컬 저장소(Local Repository)</strong>:<br/> 내 PC에 파일이 저장되는 개인 전용 저장소.<br/><br/>git이 프로젝트의 메타데이터와 객체 데이터베이스를 저장하는 곳<br/>저장소를 <strong>clone</strong>할 때 git repository가 생성됨</td>
</tr>
<tr>
<td>working directory</td>
<td>프로젝트의 특정 버전을 <strong>checkout</strong>한 것.<br/>git repository 안에 압축된 데이터베이스에서 파일을 가져와 <strong>working directory</strong> 생성</td>
</tr>
<tr>
<td>staging area</td>
<td><strong>commit</strong>할 파일에 대한 정보 저장<br/>git에서는 <strong>Index</strong>라고 칭함</td>
</tr>
</tbody></table>

![](https://git-scm.com/book/en/v2/images/areas.png)

### 파일 관련 용어와 의미들

<table>
<thead>
<tr>
<th></th>
<th>파일 관련 용어와 의미들</th>
</tr>
</thead>
<tbody><tr>
<td>Untracked</td>
<td>아직 <strong>commit</strong>에 넣어지지 않은 파일</td>
</tr>
<tr>
<td>Tracked</td>
<td>이미 <strong>commit</strong>에 포함돼 있던 파일<br/><strong>Unmodified, Modified, Staged</strong> 상태 중 하나</td>
</tr>
<tr>
<td>Unmodified<br/>Committed</td>
<td>데이터가 로컬 데이터베이스에 안전하게 저장됐다는 것을 의미</td>
</tr>
<tr>
<td>Modified</td>
<td>수정한 파일을 아직 로컬 데이터베이스에 커밋하지 않은 것</td>
</tr>
<tr>
<td>Staged</td>
<td>현재 수정한 파일을 <strong>곧 커밋</strong>할 것이라고 표시한 상태를 의미</td>
</tr>
</tbody></table>

![](https://git-scm.com/book/en/v2/images/lifecycle.png)

### 실제 git 명령어 vs 구현한 명령 동작

#### 공통점

*   지정한 파일을 `` working directory ``에서 `` staging area ``, `` git reporitory(local) ``로 이동시킬 수 있다.
*   `` commit `` 기록이 남는다.
    
    #### 차이점
    
    
*   한정된 범위의 구현이다.
*   git 명령어는 status 명령을 하면 `` Untracked files ``와 `` modified files ``가 표시되고, 구현한 명령 동작은 `` working directory ``에서 `` staging area ``, `` git reporitory(local) ``가 표시된다.

### 객체를 복사할 때, 얕은 복사와 깊은 복사 차이점

<https://velog.io/@ddalpange/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9D%EC%B2%B4-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0>

### branch

![](https://gmlwjd9405.github.io/images/types-of-git-branch/total-branch.png)