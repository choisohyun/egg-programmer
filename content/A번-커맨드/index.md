---
title: "A번 - 커맨드"
tags: [undefined]
date: 2019-11-02 12:41:50
path: blog/A번-커맨드
cover: ./no-image.png
excerpt: A번-커맨드
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/21
<h3 data-ke-size="size23">문제</h3>

&nbsp;

평소 헥사던전이라는 비디오 게임을 좋아하는 윤표는 특히 키를 AABBABB로 입력해 사용하는 콤보기를 좋아한다.

게임기에는 키가 무수히 많아, 만들어 낼 수 있는 커맨드 또한 다양하다. 게임에 통달한 윤표는 심심해져서 AABBABB말고도, BBCCBCC, CCDDCDD와 같이 형식은 같으나 구성 문자가 다른 커맨드를 사용해 보았고, 색다른 기술을 사용할 수 있음을 알게 되었다.

이에 윤표는&nbsp;__윤표가 좋아하는 커맨드__를 정의하였다.

1.   문자열의 길이는 7이다.
2.   문자열은 정확히 2가지 종류의 문자로 이루어져 있다.
3.   AABBABB 형식을 만족한다.

이에 신이 난 윤표는 커맨드를 생성하는 매크로를 만들었으나, 코딩 실력이 부족하여&nbsp;__윤표가&nbsp;좋아하는 커맨드__만 생성하도록 만들 수는 없었다. 이를 답답하게 지켜본 서윤이는 어떤 커맨드가<span>&nbsp;</span>__윤표가 좋아하는 커맨드__인지를 확인하는 프로그램을 만드려 한다.

\[\#\#\_Image|kage@bN2wf1/btqzu6S337Z/a62pHnLVQNKxkp63FDTzE1/img.png|alignCenter||\_\#\#\]

&nbsp;

<h3 data-ke-size="size23">문제 설명</h3>

왜 틀린건지 이해가 안간다

AABBABB형식과 다르면 0 출력하는 문제가 아닌가??

테스트 내가 해봐도 다 맞음

커맨드 길이도 7이면 7 이상이면 다 0으로 출력인거아닌가??????대체뭐지?????????????????????????

?????????????????????????

<h3 data-ke-size="size23">미성공 코드</h3>

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
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.BufferedReader;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.BufferedWriter;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.InputStreamReader;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.OutputStreamWriter;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.io.IOException;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.util.StringTokenizer;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Main{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;<span style="color: #ff3399;">throws</span>&nbsp;IOException{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedReader&nbsp;br&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;BufferedReader(<span style="color: #ff3399;">new</span>&nbsp;InputStreamReader((<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>)));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedWriter&nbsp;bw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;BufferedWriter(<span style="color: #ff3399;">new</span>&nbsp;OutputStreamWriter((<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>)));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;t&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;Integer.<span style="color: #4be6fa;">parseInt</span>(br.readLine());</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;t;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;s&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;br.readLine();</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;arr[]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;s.<span style="color: #4be6fa;">split</span>(<span style="color: #ffd500;">""</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">String</span>&nbsp;re&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;s.<span style="color: #4be6fa;">replace</span>(arr[<span style="color: #c10aff;">0</span>],&nbsp;<span style="color: #ffd500;">"A"</span>).<span style="color: #4be6fa;">replace</span>(arr[<span style="color: #c10aff;">2</span>],&nbsp;<span style="color: #ffd500;">"B"</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">if</span>&nbsp;(re.<span style="color: #4be6fa;">equals</span>(<span style="color: #ffd500;">"AABBABB"</span>))&nbsp;{bw.write(<span style="color: #c10aff;">1</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"\n"</span>);}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span>&nbsp;{bw.write(<span style="color: #c10aff;">0</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>&nbsp;<span style="color: #ffd500;">"\n"</span>);}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
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