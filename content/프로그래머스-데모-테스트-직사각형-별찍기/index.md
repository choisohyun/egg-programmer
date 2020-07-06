---
title: "[프로그래머스] 데모 테스트 - 직사각형 별찍기"
tags: [undefined]
date: 2019-11-09 11:52:32
path: blog/프로그래머스-데모-테스트-직사각형-별찍기
cover: ./no-image.png
excerpt: 프로그래머스-데모-테스트-직사각형-별찍기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/36
문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.  
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

<hr style="box-sizing: content-box; height: 0px; overflow: visible; margin: 1.5rem 0px; border-width: 0.0625rem 0px 0px; border-color: #d7e2eb; border-image: initial; border-style: solid initial initial initial;"/>

제한 조건

*   n과 m은 각각 1000 이하인 자연수입니다.

<hr style="box-sizing: content-box; height: 0px; overflow: visible; margin: 1.5rem 0px; border-width: 0.0625rem 0px 0px; border-color: #d7e2eb; border-image: initial; border-style: solid initial initial initial;"/>

예시

입력

5 3

출력

\*\*\*\*\*

\*\*\*\*\*

\*\*\*\*\*

&nbsp;

<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">import</span>&nbsp;java.util.<span style="color:#4be6fa">Scanner</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">public</span>&nbsp;<span style="color:#ff3399">class</span>&nbsp;Solution&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">public</span>&nbsp;<span style="color:#ff3399">static</span>&nbsp;<span style="color:#ff3399">void</span>&nbsp;main(<span style="color:#4be6fa">String</span>[]&nbsp;args)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">Scanner</span>&nbsp;sc&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;<span style="color:#4be6fa">Scanner</span>(<span style="color:#4be6fa">System</span>.<span style="color:#4be6fa">in</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">int</span>&nbsp;a&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;sc.nextInt();</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">int</span>&nbsp;b&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;sc.nextInt();</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">for</span>&nbsp;(<span style="color:#4be6fa">int</span>&nbsp;i&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#c10aff">0</span>;&nbsp;i&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">&lt;</span>&nbsp;b;&nbsp;i<span style="color:#0086b3"></span><span style="color:#ff3399">+</span><span style="color:#0086b3"></span><span style="color:#ff3399">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">for</span>&nbsp;(<span style="color:#4be6fa">int</span>&nbsp;j&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#c10aff">0</span>;&nbsp;j&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">&lt;</span>&nbsp;a;&nbsp;j<span style="color:#0086b3"></span><span style="color:#ff3399">+</span><span style="color:#0086b3"></span><span style="color:#ff3399">+</span>)</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">System</span>.<span style="color:#4be6fa">out</span>.<span style="color:#4be6fa">print</span>(<span style="color:#ffd500">"*"</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">System</span>.<span style="color:#4be6fa">out</span>.<span style="color:#4be6fa">println</span>();</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" style="color:#4f4f4ftext-decoration:none" target="_blank">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" style="text-decoration:none;color:white" target="_blank"><span style="font-size:9px;word-break:normal;background-color:#4f4f4f;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>