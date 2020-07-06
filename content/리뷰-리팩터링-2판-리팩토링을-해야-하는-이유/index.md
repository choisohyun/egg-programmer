---
title: "[리뷰] 리팩터링 2판 - 리팩토링을 해야 하는 이유"
tags: [undefined]
date: 2020-04-30 22:38:09
path: blog/리뷰-리팩터링-2판-리팩토링을-해야-하는-이유
cover: ./no-image.png
excerpt: 리뷰-리팩터링-2판-리팩토링을-해야-하는-이유
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/228
>  
> 리팩터링 2판은 전반적으로 점진적 개선에 초점을 두고 있다. 그 중 나는 1, 2장을 자세히 읽고 나머지 부분은 키워드 위주로 빠르게 읽고 리뷰를 작성한다.
> 

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@eH4UDt/btqDPYqgOuA/YlKrwZfvYGXshlLFOvfuWK/img.jpg"/><p class="cap1">data-filename="KakaoTalk_20200430_205827383.jpg" data-origin-width="2449" data-origin-height="3265"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

먼저 책에 대해 설명을 하자면, 이 책의 예시 코드는 모두 자바스크립트로 이루어져 있다. 하지만 자바스크립트 언어의 특성인 함수가 일급 객체인 부분이나 고차함수, ES6의 문법은 사용되고 있지 않다. 주언어가 다른 개발자여도 이 책을 보기에 거부감이 들지 않을 것이다. 자바스크립트를 배우고 있는 나로써는 오히려 자바스크립트의 언어적 특성을 살린 리팩토링 책이 있으면 더 좋았을 것 같다는 생각도 들었다.

나는 현재 짧은 프로젝트를 연속해서 하고 있다. 코드 리뷰도 받으면서 진행하고 있는데, 리팩토링을 해야 하는 코드라는 것은 알고 있지만 한 번 작성한 코드 구조를 수정하기가 쉽지 않다. 이런 상황에서 리팩토링에 대한 글을 보면 좋을 것 같아서 읽게 되었다.

그럼 책에 대해 살펴 보자.

1장은 간단한 연극 매표소 프로그렘 코드를 점진적으로 개선해 나가면서, 리팩토링을 쉽게 설명한다. 작은 프로그램이지만 리팩토링 기법을 사용하면서 알기 쉽게 설명했다.

2장은 리팩터링 원칙인데 본격적으로 정의와 이유, 법칙을 설명한다. 리팩토링하지 말아야 할 때도 설명하는데, 이런 판단력을 기르려면 코드를 많이 보고 느껴야 한다는 생각이 든다.

3장에서는 리팩토링 기법에 대해 키워드 별로 간단하게 설명한다. 3장부터는 필요에 따라 골라서 읽을 수 있을 것 같다.

리팩터링 2판은 한번에 모두 읽고 끝나는 책이 아니라 프로그래밍을 하면서 계속해서 찾아 볼 교과서 같은 책이다.