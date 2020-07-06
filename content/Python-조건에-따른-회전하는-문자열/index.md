---
title: "[Python] 조건에 따른 회전하는 문자열"
tags: [undefined]
date: 2019-11-22 22:52:58
path: blog/Python-조건에-따른-회전하는-문자열
cover: ./no-image.png
excerpt: Python-조건에-따른-회전하는-문자열
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/62
<h3 data-ke-size="size23">코드</h3>

<div class="colorscripter-code" style="color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto;">
<table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin: 0; padding: 0; border: none; background-color: #272727; border-radius: 4px;">
<tbody>
<tr>
<td style="padding: 6px; border-right: 2px solid #4f4f4f;">
<div style="margin: 0; padding: 0; word-break: normal; text-align: right; color: #aaa; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="line-height: 130%;">1</div>
<div style="line-height: 130%;">2</div>
<div style="line-height: 130%;">3</div>
<div style="line-height: 130%;">4</div>
<div style="line-height: 130%;">5</div>
<div style="line-height: 130%;">6</div>
<div style="line-height: 130%;">7</div>
<div style="line-height: 130%;">8</div>
<div style="line-height: 130%;">9</div>
<div style="line-height: 130%;">10</div>
<div style="line-height: 130%;">11</div>
<div style="line-height: 130%;">12</div>
<div style="line-height: 130%;">13</div>
<div style="line-height: 130%;">14</div>
<div style="line-height: 130%;">15</div>
<div style="line-height: 130%;">16</div>
<div style="line-height: 130%;">17</div>
<div style="line-height: 130%;">18</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">def</span>&nbsp;rotation(array):</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ffd500;">""</span><span style="color: #ffd500;">"</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ffd500;">&nbsp;&nbsp;&nbsp;&nbsp;Conditional&nbsp;rotation&nbsp;function</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ffd500;">&nbsp;&nbsp;&nbsp;&nbsp;:param&nbsp;array:&nbsp;Needed&nbsp;for&nbsp;rotating.</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ffd500;">&nbsp;&nbsp;&nbsp;&nbsp;:return:</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ffd500;">&nbsp;&nbsp;&nbsp;&nbsp;"</span><span style="color: #ffd500;">""</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">if</span>&nbsp;rot&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ffd500;">"반시계"</span>:</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">360</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span>&nbsp;<span style="color: #4be6fa;">int</span>(deg.replace(<span style="color: #ffd500;">"도"</span>,&nbsp;<span style="color: #ffd500;">""</span>))</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span>:</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #4be6fa;">int</span>(deg.replace(<span style="color: #ffd500;">"도"</span>,&nbsp;<span style="color: #ffd500;">""</span>))</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">while</span>&nbsp;degree&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&gt;</span>&nbsp;<span style="color: #c10aff;">0</span>:</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tuples&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;zip(<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>array[::<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span><span style="color: #c10aff;">1</span>])</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;[list(elem)&nbsp;<span style="color: #ff3399;">for</span>&nbsp;elem&nbsp;<span style="color: #ff3399;">in</span>&nbsp;tuples]</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">90</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">return</span>&nbsp;array</div>
</div>
<div style="text-align: right; margin-top: -13px; margin-right: 5px; font-size: 9px; font-style: italic;"><a href="http://colorscripter.com/info#e" rel="noopener" style="color: #4f4f4ftext-decoration:none;" target="_blank">Colored by Color Scripter</a></div>
</td>
<td style="vertical-align: bottom; padding: 0 2px 4px 0;"><a href="http://colorscripter.com/info#e" rel="noopener" style="text-decoration: none; color: white;" target="_blank"><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px;">cs</span></a></td>
</tr>
</tbody>
</table>
</div>

<h3 data-ke-size="size23">코드 설명</h3>

main에서 반시계/시계 와 각도90도 배수(90, 180, 270)를 입력받는다.

&nbsp;