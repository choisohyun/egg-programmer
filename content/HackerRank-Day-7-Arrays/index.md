---
title: "[HackerRank] Day 7: Arrays"
tags: [undefined]
date: 2019-11-07 00:25:03
path: blog/HackerRank-Day-7-Arrays
cover: ./no-image.png
excerpt: HackerRank-Day-7-Arrays
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/28
문제

[https://www.hackerrank.com/challenges/30-arrays/problem?h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen](https://www.hackerrank.com/challenges/30-arrays/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen)

<figure contenteditable="false" data-ke-type="opengraph" data-og-description="Getting started with Arrays." data-og-host="www.hackerrank.com" data-og-image="https://scrap.kakaocdn.net/dn/cSrkgA/hyDzFjWCM2/mHljxKW4623wYMBR0Y8tK0/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286" data-og-source-url="https://www.hackerrank.com/challenges/30-arrays/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" data-og-title="Day 7: Arrays | HackerRank" data-og-type="website" data-og-url="https://www.hackerrank.com/challenges/30-arrays/problem" id="og_1573053557756"><a data-source-url="https://www.hackerrank.com/challenges/30-arrays/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" href="https://www.hackerrank.com/challenges/30-arrays/problem" rel="noopener" target="_blank">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/cSrkgA/hyDzFjWCM2/mHljxKW4623wYMBR0Y8tK0/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286');">&nbsp;</div>
<div class="og-text">
<p class="og-title">Day 7: Arrays | HackerRank</p>
<p class="og-desc">Getting started with Arrays.</p>
<p class="og-host">www.hackerrank.com</p>
</div>
</a></figure>

문제 설명

배열로 받은 n개의 문자열을

거꾸로 출력해라

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
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Solution&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">private</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">final</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;scanner&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;n&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>[]&nbsp;arrItems&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextLine().<span style="color: #4be6fa;">split</span>(<span style="color: #ffd500;">"&nbsp;"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;n<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span><span style="color: #c10aff;">1</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&gt;</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;arrItem&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;Integer.<span style="color: #4be6fa;">parseInt</span>(arrItems[i]);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">print</span>(arrItem&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"&nbsp;"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.close();</div>
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