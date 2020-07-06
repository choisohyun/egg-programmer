---
title: "[HackerRank] [MySQL] Revising Aggregations - The Count Function"
tags: [undefined]
date: 2019-11-07 00:51:20
path: blog/HackerRank-MySQL-Revising-Aggregations-The-Count-Function
cover: ./no-image.png
excerpt: HackerRank-MySQL-Revising-Aggregations-The-Count-Function
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/30
문제

\[\#\#\_Image|kage@Hcp3M/btqzyX4pZ5t/Rg0kYCEm4Pi0whUK8Sc9JK/img.png|alignCenter||\_\#\#\]

문제 설명

&nbsp;

인구수가 10만보다 큰 도시의 개수를 구하는 문제

첨에 멍청하게 group by로 했더니 출력이&nbsp;

1

1

1

이런식으로 됐음;;

멍충이

난 sql 넘 못하는거같음 ㅠㅠ

&nbsp;

성공 코드

<div class="colorscripter-code" style="color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto;">
<table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin: 0; padding: 0; border: none; background-color: #272727; border-radius: 4px;">
<tbody>
<tr>
<td style="padding: 6px; border-right: 2px solid #4f4f4f;">
<div style="margin: 0; padding: 0; word-break: normal; text-align: right; color: #aaa; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="line-height: 130%;">1</div>
<div style="line-height: 130%;">2</div>
<div style="line-height: 130%;">3</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">select</span>&nbsp;count(name)</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">from</span>&nbsp;city</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">where</span>&nbsp;population&nbsp;<span style="color: #f0f0f0;"></span><span style="color: #4be6fa;">&gt;</span>&nbsp;<span style="color: #c10aff;">100000</span>;</div>
</div>
</td>
<td style="vertical-align: bottom; padding: 0 2px 4px 0;"><a href="http://colorscripter.com/info#e" rel="noopener" style="text-decoration: none; color: white;" target="_blank"><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px;">cs</span></a></td>
</tr>
</tbody>
</table>
</div>