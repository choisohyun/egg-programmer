---
title: "[HackerRank] Day 9: Recursion 3(재귀3)"
tags: [undefined]
date: 2019-11-11 12:03:15
path: blog/HackerRank-Day-9-Recursion-3재귀3
cover: ./no-image.png
excerpt: HackerRank-Day-9-Recursion-3재귀3
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/55
<h3 data-ke-size="size23">문제</h3>

[https://www.hackerrank.com/challenges/30-recursion/problem?h\_r=email&amp;unlock\_token=7f4030ba285191d3e9b9bd7857e44cff8268f79d&amp;utm\_campaign=30\_days\_of\_code\_continuous&amp;utm\_medium=email&amp;utm\_source=daily\_reminder](https://www.hackerrank.com/challenges/30-recursion/problem?h_r=email&amp;unlock_token=7f4030ba285191d3e9b9bd7857e44cff8268f79d&amp;utm_campaign=30_days_of_code_continuous&amp;utm_medium=email&amp;utm_source=daily_reminder)

<figure contenteditable="false" data-ke-type="opengraph" data-og-description="Use recursion to compute the factorial of number." data-og-host="www.hackerrank.com" data-og-image="https://scrap.kakaocdn.net/dn/bfvkuk/hyDEGu4ykL/L8vJkJWONQWuPLdpyjlFJK/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286" data-og-source-url="https://www.hackerrank.com/challenges/30-recursion/problem?h_r=email&amp;unlock_token=7f4030ba285191d3e9b9bd7857e44cff8268f79d&amp;utm_campaign=30_days_of_code_continuous&amp;utm_medium=email&amp;utm_source=daily_reminder" data-og-title="Day 9: Recursion 3   | HackerRank" data-og-type="website" data-og-url="https://www.hackerrank.com/challenges/30-recursion/problem" id="og_1573435418640"><a data-source-url="https://www.hackerrank.com/challenges/30-recursion/problem?h_r=email&amp;unlock_token=7f4030ba285191d3e9b9bd7857e44cff8268f79d&amp;utm_campaign=30_days_of_code_continuous&amp;utm_medium=email&amp;utm_source=daily_reminder" href="https://www.hackerrank.com/challenges/30-recursion/problem" rel="noopener" target="_blank">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/bfvkuk/hyDEGu4ykL/L8vJkJWONQWuPLdpyjlFJK/img.jpg?width=1200&amp;height=629&amp;face=241_105_407_286');">&nbsp;</div>
<div class="og-text">
<p class="og-title">Day 9: Recursion 3 | HackerRank</p>
<p class="og-desc">Use recursion to compute the factorial of number.</p>
<p class="og-host">www.hackerrank.com</p>
</div>
</a></figure>

<h3 data-ke-size="size23">문제 설명</h3>

재귀로 누적곱을 구하는 문제

&nbsp;

<h3 data-ke-size="size23">성공 코드</h3>

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
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Solution&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #999999;">//&nbsp;Complete&nbsp;the&nbsp;factorial&nbsp;function&nbsp;below.</span></div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;factorial(<span style="color: #4be6fa;">int</span>&nbsp;n)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">return</span>&nbsp;(n&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">1</span>)&nbsp;?&nbsp;<span style="color: #c10aff;">1</span>&nbsp;:&nbsp;n<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>factorial(n<span style="color: #0086b3;"></span><span style="color: #ff3399;">-</span><span style="color: #c10aff;">1</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">private</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">final</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;scanner&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;<span style="color: #ff3399;">throws</span>&nbsp;IOException&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedWriter&nbsp;bufferedWriter&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;BufferedWriter(<span style="color: #ff3399;">new</span>&nbsp;FileWriter(<span style="color: #4be6fa;">System</span>.getenv(<span style="color: #ffd500;">"OUTPUT_PATH"</span>)));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;n&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;scanner.nextInt();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanner.skip(<span style="color: #ffd500;">"(\r\n|[\n\r\u2028\u2029\u0085])?"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;result&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;factorial(n);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bufferedWriter.write(<span style="color: #4be6fa;">String</span>.<span style="color: #4be6fa;">valueOf</span>(result));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bufferedWriter.newLine();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bufferedWriter.close();</div>
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