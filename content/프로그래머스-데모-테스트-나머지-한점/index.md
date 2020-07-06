---
title: "[프로그래머스] 데모 테스트 - 나머지 한점"
tags: [undefined]
date: 2019-11-09 11:47:51
path: blog/프로그래머스-데모-테스트-나머지-한점
cover: ./no-image.png
excerpt: 프로그래머스-데모-테스트-나머지-한점
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/35
문제 설명

직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

제한사항

*   v는 세 점의 좌표가 들어있는 2차원 배열입니다.
*   v의 각 원소는 점의 좌표를 나타내며, 좌표는 \[x축 좌표, y축 좌표\] 순으로 주어집니다.
*   좌표값은 1 이상 10억 이하의 자연수입니다.
*   직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 \[x축 좌표, y축 좌표\] 순으로 담아 return 해주세요.

<hr style="box-sizing: content-box; height: 0px; overflow: visible; margin: 1.5rem 0px; border-width: 0.0625rem 0px 0px; border-color: #d7e2eb; border-image: initial; border-style: solid initial initial initial;"/>

입출력 예

vresult

<table border="1" style="border-collapse: collapse; width: 100%;">
<tbody>
<tr>
<td>[[1, 4], [3, 4], [3, 10]]</td>
<td>[1, 10]</td>
</tr>
<tr>
<td>[[1, 1], [2, 2], [1, 2]]</td>
<td>[2, 1]</td>
</tr>
</tbody>
</table>

입출력 예 설명

입출력 예 \#1  
세 점이 \[1, 4\], \[3, 4\], \[3, 10\] 위치에 있을 때, \[1, 10\]에 점이 위치하면 직사각형이 됩니다.

입출력 예 \#2  
세 점이 \[1, 1\], \[2, 2\], \[1, 2\] 위치에 있을 때, \[2, 1\]에 점이 위치하면 직사각형이 됩니다.

&nbsp;

<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">class</span>&nbsp;Solution&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">public</span>&nbsp;<span style="color:#4be6fa">int</span>[]&nbsp;solution(<span style="color:#4be6fa">int</span>[][]&nbsp;v)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">int</span>[]&nbsp;answer&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;<span style="color:#4be6fa">int</span>[<span style="color:#c10aff">2</span>];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">for</span>&nbsp;(<span style="color:#4be6fa">int</span>&nbsp;i&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#c10aff">0</span>;&nbsp;i&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">&lt;</span>&nbsp;<span style="color:#c10aff">3</span>;&nbsp;i<span style="color:#0086b3"></span><span style="color:#ff3399">+</span><span style="color:#0086b3"></span><span style="color:#ff3399">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer[<span style="color:#c10aff">0</span>]&nbsp;^<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;v[i][<span style="color:#c10aff">0</span>];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer[<span style="color:#c10aff">1</span>]&nbsp;^<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;v[i][<span style="color:#c10aff">1</span>];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;answer;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" style="color:#4f4f4ftext-decoration:none" target="_blank">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" style="text-decoration:none;color:white" target="_blank"><span style="font-size:9px;word-break:normal;background-color:#4f4f4f;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>