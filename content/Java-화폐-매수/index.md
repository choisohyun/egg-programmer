---
title: "[Java] 화폐 매수"
tags: [undefined]
date: 2019-11-07 10:03:24
path: blog/Java-화폐-매수
cover: ./no-image.png
excerpt: Java-화폐-매수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/31
<h3 data-ke-size="size23">문제</h3>

<div class="se-code-source">
<div class="__se_code_view language-javascript">계좌에 들어있는 돈 일부를 은행에서 출금하고자 합니다<span class="token se-code-punctuation">.</span></div>
<div class="__se_code_view language-javascript">돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받습니다<span class="token se-code-punctuation">.</span></div>
<div class="__se_code_view language-javascript">돈의 액수 money가 매개변수로 주어질 때<span class="token se-code-punctuation">,</span> 오만 원권<span class="token se-code-punctuation">,</span> 만 원권<span class="token se-code-punctuation">,</span> 오천 원권<span class="token se-code-punctuation">,</span> 천 원권<span class="token se-code-punctuation">,</span> 오백원 동전<span class="token se-code-punctuation">,</span> 백원 동전<span class="token se-code-punctuation">,</span> 오십원 동전<span class="token se-code-punctuation">,</span> 십원 동전<span class="token se-code-punctuation">,</span> 일원 동전 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 <span class="token se-code-keyword">return</span> 하도록 solution 메서드를 완성해주세요<span class="token se-code-punctuation">.</span></div>
<div class="__se_code_view language-javascript">&nbsp;</div>
<div class="__se_code_view language-javascript">제한사항</div>
<div class="__se_code_view language-javascript">money는 <span class="token se-code-number">1</span> 이상 <span class="token se-code-number">1</span><span class="token se-code-punctuation">,</span><span class="token se-code-number">000</span><span class="token se-code-punctuation">,</span><span class="token se-code-number">000</span> 이하인 자연수입니다<span class="token se-code-punctuation">.</span></div>
<div class="__se_code_view language-javascript">&nbsp;</div>
<div class="__se_code_view language-javascript">입출력 예</div>
<div class="__se_code_view language-javascript">money result</div>
<div class="__se_code_view language-javascript"><span class="token se-code-number">50237</span> <span class="token se-code-punctuation">[</span><span class="token se-code-number">1</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">2</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">3</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">7</span><span class="token se-code-punctuation">]</span></div>
<div class="__se_code_view language-javascript"><span class="token se-code-number">15000</span> <span class="token se-code-punctuation">[</span><span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">1</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">1</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">,</span> <span class="token se-code-number">0</span><span class="token se-code-punctuation">]</span></div>
<div class="__se_code_view language-javascript">&nbsp;</div>
<div class="__se_code_view language-javascript">입출력 예 설명</div>
<div class="__se_code_view language-javascript">입출력 예 #<span class="token se-code-number">1</span> <span class="token se-code-number">50</span><span class="token se-code-punctuation">,</span><span class="token se-code-number">237</span>원은 <span class="token se-code-number">5</span>만 원권 <span class="token se-code-number">1</span>매<span class="token se-code-punctuation">,</span> <span class="token se-code-number">100</span>원짜리 동전 <span class="token se-code-number">2</span>개<span class="token se-code-punctuation">,</span> <span class="token se-code-number">10</span>원짜리 동전 <span class="token se-code-number">3</span>개<span class="token se-code-punctuation">,</span> <span class="token se-code-number">1</span>원짜리 동전 <span class="token se-code-number">7</span>개로 만들 수 있습니다<span class="token se-code-punctuation">.</span></div>
<div class="__se_code_view language-javascript">입출력 예 #<span class="token se-code-number">2</span> <span class="token se-code-number">15</span><span class="token se-code-punctuation">,</span><span class="token se-code-number">000</span>원은 만 원권 <span class="token se-code-number">1</span>매<span class="token se-code-punctuation">,</span> <span class="token se-code-number">5</span>천 원권 <span class="token se-code-number">1</span>매로 만들 수 있습니다<span class="token se-code-punctuation">.</span></div>
</div>

&nbsp;

<h3 data-ke-size="size23">문제 설명</h3>

50000원, 10000원, 5000원,,,,이런식으로 번갈아가며 진행되니까 번갈아가며 2와 5를 나눠주며 화폐 단위를 맞춘다

단 마지막에는 10원에서 바로 1원이 되니까 if문으로 따로 넣어줬다.

생각보다 오래걸리는거같다...ㅎㅏ..

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
<div style="line-height: 130%;">27</div>
<div style="line-height: 130%;">28</div>
<div style="line-height: 130%;">29</div>
<div style="line-height: 130%;">30</div>
<div style="line-height: 130%;">31</div>
<div style="line-height: 130%;">32</div>
<div style="line-height: 130%;">33</div>
<div style="line-height: 130%;">34</div>
</div>
</td>
<td style="padding: 6px 0; text-align: left;">
<div style="margin: 0; padding: 0; color: #f0f0f0; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height: 130%;">
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">import</span>&nbsp;java.util.<span style="color: #0086b3;"></span><span style="color: #ff3399;">*</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;"><span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">class</span>&nbsp;Main{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #ff3399;">void</span>&nbsp;main&nbsp;(<span style="color: #4be6fa;">String</span>[]&nbsp;args)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">Scanner</span>&nbsp;sc&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">Scanner</span>(<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">in</span>);</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solution(sc.nextInt());</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">public</span>&nbsp;<span style="color: #ff3399;">static</span>&nbsp;<span style="color: #4be6fa;">int</span>[]&nbsp;solution(<span style="color: #4be6fa;">int</span>&nbsp;money)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;result[]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #ff3399;">new</span>&nbsp;<span style="color: #4be6fa;">int</span>[<span style="color: #c10aff;">9</span>];</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;fir&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">50000</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">int</span>&nbsp;sw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">for</span>&nbsp;(<span style="color: #4be6fa;">int</span>&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;&nbsp;i&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;result.<span style="color: #4be6fa;">length</span>;&nbsp;i<span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">+</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result[i]&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;money&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span>&nbsp;fir;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;money&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;money&nbsp;%&nbsp;fir;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">if</span>&nbsp;(sw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">1</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fir&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">5</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span>&nbsp;<span style="color: #ff3399;">if</span>&nbsp;(sw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">1</span>&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&amp;</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">&amp;</span>&nbsp;money&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">&lt;</span>&nbsp;<span style="color: #c10aff;">10</span>)&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fir&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">10</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">else</span>&nbsp;{</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sw&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">0</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fir&nbsp;<span style="color: #0086b3;"></span><span style="color: #ff3399;">/</span><span style="color: #0086b3;"></span><span style="color: #ff3399;">=</span>&nbsp;<span style="color: #c10aff;">2</span>;</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4be6fa;">System</span>.<span style="color: #4be6fa;">out</span>.<span style="color: #4be6fa;">print</span>(Arrays.<span style="color: #4be6fa;">toString</span>(result));</div>
<div style="padding: 0 6px; white-space: pre; line-height: 130%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff3399;">return</span>&nbsp;result;</div>
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
&nbsp;
&nbsp;