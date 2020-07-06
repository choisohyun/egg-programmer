---
title: "[HTML] &lt;meta&gt; tag 용도와 종류"
tags: [undefined]
date: 2020-02-14 12:06:18
path: blog/meta-tag-용도와-종류
cover: ./no-image.png
excerpt: meta-tag-용도와-종류
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/162
# &lt;meta&gt; tag란?

*   웹 페이지의 보이지 않는 정보를 제공하는데 쓰이는 태그
*   페이지의 설명 요약, 핵심 키워드, 제작자, 크롤링 정책 등 수많은 정보 제공
*   닫는 태그가 없음
*   태그의 속성을 통해 정보 제공

## 요소의 종류

<table>
<thead>
<tr>
<th align="center">요소</th>
<th align="center">뜻</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">charset</td>
<td align="center">페이지의 문자 인코딩을 선언<br/>utf-8 권장</td>
</tr>
<tr>
<td align="center">content</td>
<td align="center">http-equiv 또는 <br/>name 특성 중 사용하는 것의 값을 담음</td>
</tr>
<tr>
<td align="center">name</td>
<td align="center">문서 레벨 메타데이터의 이름을 정의<br/>itemprop, http-equiv, charset 특성 중 <br/>하나라도 설정한 경우 사용해선 안됩니다.</td>
</tr>
</tbody>
</table>

## 예제

1) 검색 엔진을 위한 키워드(keyword)를 정의하는 예제

<pre class="applescript"><code>&lt;meta name="keyword" content="HTML, meta, tag, element, reference"&gt;</code></pre>

2) 웹 페이지에 대한 설명(description)을 정의하는 예제

<pre class="applescript"><code>&lt;meta name="description" content="HTML meta tag page"&gt;</code></pre>

3) 문서의 저자(author)를 정의하는 예제

<pre class="applescript"><code>&lt;meta name="author" content="TCPSchool"&gt;</code></pre>

4) 5초 뒤에 다른 페이지로 리다이렉트(redirect)시키는 예제

<pre class="xml"><code>&lt;meta http-equiv="refresh" content="5;url=http://www.tcpschool.com"&gt;</code></pre>

5) 모든 장치에서 웹 사이트가 잘 보이도록 뷰포트(viewport)를 설정하는 예제

<pre class="applescript"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

## 참고

*   <https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta>
*   [https://ofcourse.kr/html-course/meta-태그](https://ofcourse.kr/html-course/meta-%ED%83%9C%EA%B7%B8)
*   [https://www.w3schools.com/tags/tag\_meta.asp](https://www.w3schools.com/tags/tag_meta.asp)
*   <http://tcpschool.com/html-tags/meta>