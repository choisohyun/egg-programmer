---
title: "[BOJ][Java] 2577번 - 숫자의 개수"
tags: [undefined]
date: 2019-11-01 20:49:57
path: blog/BOJJava-2577번-숫자의-개수
cover: ./no-image.png
excerpt: BOJJava-2577번-숫자의-개수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/15
<h3 data-ke-size="size23">문제</h3>

\[\#\#\_Image|kage@bul3es/btqzs7lwUQ0/I9cq6rKpNnlynEo8tYpSF0/img.png|alignCenter||\_\#\#\]

<h3 data-ke-size="size23">답(Java)</h3>

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
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.BufferedReader;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.BufferedWriter;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.InputStreamReader;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.OutputStreamWriter;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.IOException;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Main{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;<span style="color: #ff3399;">throws</span>&nbsp;IOException{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedReader&nbsp;br&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;BufferedReader(<span style="color: #ff3399;">new</span>&nbsp;InputStreamReader((<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>)));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedWriter&nbsp;bw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;BufferedWriter(<span style="color: #ff3399;">new</span>&nbsp;OutputStreamWriter((<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>)));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;a&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;Integer.<span style="color: #4be6fa;">parseInt</span>(br.readLine());</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;b&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;Integer.<span style="color: #4be6fa;">parseInt</span>(br.readLine());</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;c&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;Integer.<span style="color: #4be6fa;">parseInt</span>(br.readLine());</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;mul&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;a&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>&nbsp;b&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>&nbsp;c;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;arr[]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">int</span>[<span style="color: #c10aff;">10</span>];</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">while</span>&nbsp;(mul&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">!</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>){</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[mul&nbsp;%&nbsp;<span style="color: #c10aff;">10</span>]<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mul&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;mul&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span>&nbsp;<span style="color: #c10aff;">10</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;arr.<span style="color: #4be6fa;">length</span>;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>)</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bw.write(arr[i]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"\n"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bw.flush();&nbsp;bw.close();</div>
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

\[\#\#\_Image|kage@bo60u7/btqzs7eN3XL/ye9wnXKjQ3ihXRatqTlnfk/img.png|alignCenter||\_\#\#\]

&nbsp;

0부터 9까지 숫자의 개수를 세는 문제

크기를 10으로 배열을 만들어 카운트하면 된다