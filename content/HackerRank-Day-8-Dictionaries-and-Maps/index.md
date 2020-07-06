---
title: "[HackerRank] Day 8: Dictionaries and Maps"
tags: [undefined]
date: 2019-11-07 00:41:40
path: blog/HackerRank-Day-8-Dictionaries-and-Maps
cover: ./no-image.png
excerpt: HackerRank-Day-8-Dictionaries-and-Maps
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/29
문제

[https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen&amp;h\_r=next-challenge&amp;h\_v=zen](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen)

<figure contenteditable="false" data-ke-type="opengraph" data-og-description="Mapping Keys to Values using a Map or Dictionary." data-og-host="www.hackerrank.com" data-og-image="https://scrap.kakaocdn.net/dn/kVpra/hyDzCndT0B/HJExPyo7yfek3ILxKJ9hJ1/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286" data-og-source-url="https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" data-og-title="Day 8: Dictionaries and Maps | HackerRank" data-og-type="website" data-og-url="https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem" id="og_1573054709808"><a data-source-url="https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen&amp;h_r=next-challenge&amp;h_v=zen" href="https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem" rel="noopener" target="_blank">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/kVpra/hyDzCndT0B/HJExPyo7yfek3ILxKJ9hJ1/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286');">&nbsp;</div>
<div class="og-text">
<p class="og-title">Day 8: Dictionaries and Maps | HackerRank</p>
<p class="og-desc">Mapping Keys to Values using a Map or Dictionary.</p>
<p class="og-host">www.hackerrank.com</p>
</div>
</a></figure>

문제 설명

맵을 이용해 푸는 문제

<div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table cellpadding="0" cellspacing="0" class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;"><tr><td style="padding:6px;border-right:2px solid #4f4f4f"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#aaa;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#999999">//맵&nbsp;선언&nbsp;방법</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">Map<span style="color:#0086b3"></span><span style="color:#ff3399">&lt;</span><span style="color:#4be6fa">String</span>,&nbsp;Integer<span style="color:#0086b3"></span><span style="color:#ff3399">&gt;</span>&nbsp;phoneBook&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;HashMap<span style="color:#0086b3"></span><span style="color:#ff3399">&lt;</span><span style="color:#4be6fa">String</span>,&nbsp;Integer<span style="color:#0086b3"></span><span style="color:#ff3399">&gt;</span>();</div></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" style="text-decoration:none;color:white" target="_blank"><span style="font-size:9px;word-break:normal;background-color:#4f4f4f;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

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
<div style="line-height: 130%;">21</div>
<div style="line-height: 130%;">22</div>
<div style="line-height: 130%;">23</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">class</span>&nbsp;Solution{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>&nbsp;[]argh){</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;<span style="color: #4be6fa;">in</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;n&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #4be6fa;">in</span>.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span><span style="color: #4be6fa;">String</span>,&nbsp;Integer<span style="color: #0086b3;"></span><span style="color: #ff3399;">&gt;</span>&nbsp;phoneBook&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;HashMap<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span><span style="color: #4be6fa;">String</span>,&nbsp;Integer<span style="color: #0086b3;"></span><span style="color: #ff3399;">&gt;</span>();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;n;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>){</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;name&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #4be6fa;">in</span>.next();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;phone&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #4be6fa;">in</span>.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999;">//&nbsp;Map에&nbsp;저장</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phoneBook.put(name,&nbsp;phone);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">while</span>(<span style="color: #4be6fa;">in</span>.hasNext()){</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;s&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #4be6fa;">in</span>.next();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999;">//&nbsp;전화부에&nbsp;s가&nbsp;있으면&nbsp;번호&nbsp;출력,&nbsp;아니면&nbsp;not&nbsp;found</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">if</span>&nbsp;(phoneBook.containsKey(s))</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">println</span>(s&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"="</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;phoneBook.get(s));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">println</span>(<span style="color: #ffd500;">"Not&nbsp;found"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">in</span>.close();</div>
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