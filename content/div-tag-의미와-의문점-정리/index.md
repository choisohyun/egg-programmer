---
title: "[HTML] &lt;div&gt; tag 의미와 의문점 정리"
tags: [undefined]
date: 2020-02-14 12:12:20
path: blog/div-tag-의미와-의문점-정리
cover: ./no-image.png
excerpt: div-tag-의미와-의문점-정리
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/164
# &lt;div&gt; tag란?

*   Division의 약자
*   레이아웃을 나눌 때 쓰는 태그
*   특별한 기능을 가지고 있지 않음
*   가상의 레이아웃 설계에 쓰임

## 용도

*   랩핑하기 위해 많이 쓰임
*   시맨틱 태그가 있는데 무분별하게 쓰는 것은 권장되지 않음

## 왜 div를 사용해야 할까?

html은 

<egg>와 같은 이름의 태그를 써도 에러가 나지 않는다. </egg>

그러면 아래와 같이 div 태그가 많은 것을 없애고 각각의 의미가 있는 태그를 만들어 쓰면 되지 않을까 하는 의문이 들었다. 

![https://i.imgur.com/CcdU5Fb.png](https://i.imgur.com/CcdU5Fb.png)

airbnb 메인 홈페이지의 소스코드 중 일부

언뜻 생각할 때, 의미가 있고 가독성이 좋아질 것 같아 보인다. 

div 태그 자체도 특별한 의미가 없는데 div 태그를 쓰는 이유는 무엇일까?

몇 가지 이유를 검색을 통해 찾을 수 있었다. 

<ul><li><p>브라우저에서 처리하고 렌더링하기가 더 쉬워지기 때문에 <div>를 사용한다.</div></p>
<ul>
<li>만든 태그를 사용하면 브라우저는 인식할 수 없는 태그를 구문분석하고 css를 적용하게 된다.</li>
</ul>
</li><li><p>&lt;div&gt;를 사용하면 컨테이너가 존재하고 컨테이너로 무언가를 체이닝할 수 있다.</p>
</li><li><p>html의 핵심은 블록 레벨과 인라인 마크업이라는 두 가지 유형으로 구성된다. 같은 것을 표현하는 방법이 더 많으면 혼란이 추가된다.</p>
<p><strong>참고: XML 사용 시</strong></p>
</li></ul>

*   문서 내에 사용되는 태그 사전을 만들면 원하는 태그 이름 작성 가능

### 결론 및 느낀점

*   정의된 태그를 쓴다는 것은 약속된 태그를 쓴다는 것이기 때문에 다른 사용자(개발자)가 보기에도 이해하기 쉬울 것이다.
*   내가 코드를 짜면서나 다른 사이트의 코드를 봤을 때 div 태그가 너무 많아서 혼란이 왔었다. 이걸 정리하면서 div 태그에 대해 더 이해하게 되었다.
*   javascript 위주로 보다가 html, css를 보니 다른 점이 많아서 혼란스러웠는데, 각자의 규칙이 존재하고 이를 이해하는 과정이 분명히 필요하다고 느꼈다.

## 참고

*   [https://ofcourse.kr/html-course/div-태그](https://ofcourse.kr/html-course/div-%ED%83%9C%EA%B7%B8)
*   [https://www.w3schools.com/tags/tag\_div.asp](https://www.w3schools.com/tags/tag_div.asp)
*   <https://softwareengineering.stackexchange.com/questions/236881/why-do-we-have-to-use-divs>