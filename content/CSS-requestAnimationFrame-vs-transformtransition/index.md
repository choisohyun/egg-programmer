---
title: "[CSS] requestAnimationFrame vs transform/transition"
tags: [undefined]
date: 2020-02-14 14:18:50
path: blog/CSS-requestAnimationFrame-vs-transformtransition
cover: ./no-image.png
excerpt: CSS-requestAnimationFrame-vs-transformtransition
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/173
## requestAnimationFrame vs transform/transition

<table>
<thead>
<tr>
<th align="center"></th>
<th align="center">rAF</th>
<th align="center">transform</th>
</tr>
</thead>
<tbody><tr>
<td align="center">성능</td>
<td align="center">비교적 느림</td>
<td align="center">비교적 빠름</td>
</tr>
<tr>
<td align="center">사용되는 상황</td>
<td align="center">세밀한 조작이 필요한 경우<br/>2개 이상의 애니메이션을 동작시킬 때</td>
<td align="center">간단하고 규칙적인 경우</td>
</tr>
<tr>
<td align="center">구현 방법</td>
<td align="center">setTimeout의 비정확한 시간 반복에 대한 대안<br/><code>재귀 호출</code> 사용</td>
<td align="center">애니메이션 처리를 빠르게 하기 위해<br/><code>GPU 가속 속성</code> 사용</td>
</tr>
</tbody></table>

*   두 개를 같이 구현했을 때에는 transition으로 만든 애니메이션이 더 __자연스럽게__ 동작하는 것을 볼 수 있었다.

<p class="codepen" data-default-tab="js,result" data-height="265" data-pen-title="JjdGOqv" data-slug-hash="JjdGOqv" data-theme-id="default" data-user="choisohyun" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/choisohyun/pen/JjdGOqv">
  JjdGOqv</a> by choisohyun (<a href="https://codepen.io/choisohyun">@choisohyun</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>

*   애니메이션 생성 시 가능한 CSS `` transition/animation ``을 사용하는 것이 좋다.
*   애니메이션이 너무 복잡할 때 `` Javascript `` 기반의 애니메이션으로 대체된다.

## Reference

<https://jongnan.tistory.com/entry/Web-Animation>

<https://zester7.tistory.com/55>

[https://developer.mozilla.org/en-US/docs/Web/Performance/CSS\_JavaScript\_animation\_performance](https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance)