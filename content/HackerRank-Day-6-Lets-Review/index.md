---
title: "[HackerRank] Day 6: Let's Review"
tags: [undefined]
date: 2019-11-07 00:18:14
path: blog/HackerRank-Day-6-Lets-Review
cover: ./no-image.png
excerpt: HackerRank-Day-6-Lets-Review
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/27
[https://www.hackerrank.com/challenges/30-review-loop/problem?h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen](https://www.hackerrank.com/challenges/30-review-loop/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen)

<figure contenteditable="false" data-ke-type="opengraph" data-og-description="Characters and Strings" data-og-host="www.hackerrank.com" data-og-image="https://scrap.kakaocdn.net/dn/8YJVh/hyDBpfrUwD/NBHjwiwSiAf8eYF6LbqWa0/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286" data-og-source-url="https://www.hackerrank.com/challenges/30-review-loop/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" data-og-title="Day 6: Let's Review | HackerRank" data-og-type="website" data-og-url="https://www.hackerrank.com/challenges/30-review-loop/problem" id="og_1573052324365"><a data-source-url="https://www.hackerrank.com/challenges/30-review-loop/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" href="https://www.hackerrank.com/challenges/30-review-loop/problem" rel="noopener" target="_blank">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/8YJVh/hyDBpfrUwD/NBHjwiwSiAf8eYF6LbqWa0/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286');">&nbsp;</div>
<div class="og-text">
<p class="og-title">Day 6: Let's Review | HackerRank</p>
<p class="og-desc">Characters and Strings</p>
<p class="og-host">www.hackerrank.com</p>
</div>
</a></figure>

문제

문자열을 입력받아서

홀수 인덱스 문자만, 짝수 인덱스 문자만 따로 나누어서 출력되게 하는 문제

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
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Solution&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;s&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;t&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;s.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;t;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;str[]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;s.next().<span style="color: #4be6fa;">split</span>(<span style="color: #ffd500;">""</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;odd&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ffd500;">""</span>,&nbsp;even&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;str[<span style="color: #c10aff;">0</span>];</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;j&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">1</span>;&nbsp;j&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;str.<span style="color: #4be6fa;">length</span>;&nbsp;j<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">if</span>&nbsp;(j&nbsp;%&nbsp;<span style="color: #c10aff;">2</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">1</span>)&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;even&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;str[j];</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span>&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;odd&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;str[j];</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">println</span>(even&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"&nbsp;"</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;odd);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">}</div>
</div>
<div style="text-align: right; margin-top: -13px; margin-right: 5px; font-size: 9px; font-style: italic;"><a href="http://colorscripter.com/info#e" rel="noopener" style="color: #4f4f4ftext-decoration:none;" target="_blank">Colored by Color Scripter</a></div>
</td>
<td style="vertical-align: bottom; padding: 0 2px 4px 0;"><a href="http://colorscripter.com/info#e" rel="noopener" style="text-decoration: none; color: white;" target="_blank"><span style="font-size: 9px; word-break: normal; background-color: #4f4f4f; color: white; border-radius: 10px; padding: 1px;">cs</span></a></td>
</tr>
</tbody>
</table>
</div>

&nbsp;