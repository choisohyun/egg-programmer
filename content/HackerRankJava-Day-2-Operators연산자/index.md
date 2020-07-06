---
title: "[HackerRank][Java] Day 2: Operators(연산자)"
tags: [undefined]
date: 2019-10-31 19:53:37
path: blog/HackerRankJava-Day-2-Operators연산자
cover: ./no-image.png
excerpt: HackerRankJava-Day-2-Operators연산자
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/13
<h3 data-ke-size="size23">문제 (<a href="https://www.hackerrank.com/challenges/30-operators/problem?h_r=email&amp;unlock_token=79ae5c12d9e8eb62c4a3ee04b18d0167b6cdd3e5&amp;utm_campaign=30_days_of_code_continuous&amp;utm_medium=email&amp;utm_source=daily_reminder&amp;h_r=next-challenge&amp;h_v=zen" rel="noopener" target="_blank">링크</a>)</h3>

\[\#\#\_Image|kage@bz4tM3/btqzrvtkCTN/7G9UkZIetGIy0ZiAyyALtK/img.png|alignCenter||\_\#\#\]\[\#\#\_Image|kage@5kFJN/btqzrI64oJq/VqE19G24yFIzYKv7tsywX1/img.png|alignCenter||\_\#\#\]

<h3 data-ke-size="size23">문제 설명</h3>

어렵지 않게 문제에 나온 식만 따라하면 되는 문제다.

반올림을 쓸 때는 Math.round(반올림할 값)을 쓰면 된다.

<div class="colorscripter-code" style="color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position: relative !important; overflow: auto;">
<table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin: 0; padding: 0; border: none; background-color: #272727; border-radius: 4px;">
<tbody>
<tr>
<td style="padding: 6px; border-right: 2px solid #4f4f4f;">
<div style="margin: 0; padding: 0; word-break: normal; text-align: right; color: #aaa; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="line-height: 130%;">1</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">scan.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
</div>
</td>
<td style="vertical-align: bottom; padding: 0 2px 4px 0;"><a href="http://colorscripter.com/info#e" rel="noopener" style="text-decoration: none; color: white;" target="_blank"><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px;">cs</span></a></td>
</tr>
</tbody>
</table>
</div>

답에서 위와 같이 scan.skip이 써있는 이유는 여러줄을 입력받을 때 공백의 엔터값을 스킵하기 위해서다.

<h3 data-ke-size="size23">답 (Java)</h3>

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
<div style="line-height: 130%;">19</div>
<div style="line-height: 130%;">20</div>
<div style="line-height: 130%;">21</div>
<div style="line-height: 130%;">22</div>
<div style="line-height: 130%;">23</div>
<div style="line-height: 130%;">24</div>
<div style="line-height: 130%;">25</div>
<div style="line-height: 130%;">26</div>
<div style="line-height: 130%;">27</div>
<div style="line-height: 130%;">28</div>
<div style="line-height: 130%;">29</div>
<div style="line-height: 130%;">30</div>
<div style="line-height: 130%;">31</div>
<div style="line-height: 130%;">32</div>
<div style="line-height: 130%;">33</div>
<div style="line-height: 130%;">34</div>
<div style="line-height: 130%;">35</div>
<div style="line-height: 130%;">36</div>
<div style="line-height: 130%;">37</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.math.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.security.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.text.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.util.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.util.concurrent.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.util.regex.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Solution&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999;">//&nbsp;Complete&nbsp;the&nbsp;solve&nbsp;function&nbsp;below.</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;solve(<span style="color: #4be6fa;">double</span>&nbsp;meal_cost,&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;tip_percent,&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;tax_percent)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">double</span>&nbsp;tip&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;meal_cost&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>&nbsp;tip_percent&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span>&nbsp;<span style="color: #c10aff;">100</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">double</span>&nbsp;tax&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;meal_cost&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>&nbsp;tax_percent&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span>&nbsp;<span style="color: #c10aff;">100</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">double</span>&nbsp;total_cost&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;meal_cost&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;tip&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;tax;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">print</span>(Math.round(total_cost));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">private</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">final</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;scanner&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">double</span>&nbsp;meal_cost&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextDouble();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;tip_percent&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;tax_percent&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solve(meal_cost,&nbsp;tip_percent,&nbsp;tax_percent);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.close();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
</div>
<div style="text-align: right; margin-top: -13px; margin-right: 5px; font-size: 9px; font-style: italic;"><a href="http://colorscripter.com/info#e" rel="noopener" style="color: #4f4f4ftext-decoration:none;" target="_blank">Colored by Color Scripter</a></div>
</td>
<td style="vertical-align: bottom; padding: 0 2px 4px 0;"><a href="http://colorscripter.com/info#e" rel="noopener" style="text-decoration: none; color: white;" target="_blank"><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px;">cs</span></a></td>
</tr>
</tbody>
</table>
</div>