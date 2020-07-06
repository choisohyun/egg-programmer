---
title: "[BOJ][Java] 5622번 - 다이얼"
tags: [undefined]
date: 2019-12-08 02:14:06
path: blog/BOJJava-5622번-다이얼
cover: ./no-image.png
excerpt: BOJJava-5622번-다이얼
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/84
## 문제

*   [백준 5622번: 다이얼](https://www.acmicpc.net/problem/5622)

## 문제 설명

*   A를 아스키코드로 변환하면 65인 것을 활용하여 문제를 풀었다.

<table border="1" style="border-collapse: collapse; width: 64.6688%; height: 384px;">
<tbody>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">2</td>
<td style="width: 16.0072%; height: 20px;">ABC</td>
<td style="width: 21.313%; height: 20px;">0 1 2</td>
<td style="width: 20.9532%;">0</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">3</td>
<td style="width: 16.0072%; height: 20px;">DEF</td>
<td style="width: 21.313%; height: 20px;">3 4 5</td>
<td style="width: 20.9532%;">1</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">4</td>
<td style="width: 16.0072%; height: 20px;">GHI</td>
<td style="width: 21.313%; height: 20px;">6 7 8</td>
<td style="width: 20.9532%;">2</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">5</td>
<td style="width: 16.0072%; height: 20px;">JKL</td>
<td style="width: 21.313%; height: 20px;">9 10 11</td>
<td style="width: 20.9532%;">3</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">6</td>
<td style="width: 16.0072%; height: 20px;">MNO</td>
<td style="width: 21.313%; height: 20px;">12 13 14</td>
<td style="width: 20.9532%;">4</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">7</td>
<td style="width: 16.0072%; height: 20px;"><b><span style="color: #ee2323;">PQRS</span></b></td>
<td style="width: 21.313%; height: 20px;">15 16 17 <b><span style="color: #ee2323;">18</span></b></td>
<td style="width: 20.9532%;">5</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">8</td>
<td style="width: 16.0072%; height: 20px;">TUV</td>
<td style="width: 21.313%; height: 20px;">19 20 <b><span style="color: #ee2323;">21</span></b></td>
<td style="width: 20.9532%;">6</td>
</tr>
<tr style="height: 20px;">
<td style="width: 16.7266%; height: 20px;">9</td>
<td style="width: 16.0072%; height: 20px;"><b><span style="color: #ee2323;">WXYZ</span></b></td>
<td style="width: 21.313%; height: 20px;">22 23<b><span style="color: #ee2323;"> 24 25</span></b></td>
<td style="width: 20.9532%;">7</td>
</tr>
</tbody>
</table>

*   위는 다이얼을 표로 정리한 표이다. 3번째 열은 각각 문자를 숫자로 변환하고 65를 뺐을 때의 값이고, 4번째 열은 이를 3으로 나눴을 때의 몫의 값이다.
*   여기서 빨간색으로 표시한 18, 21, 24, 25만 다이얼 개수 문제로 몫의 값보다 1씩 크다
*   그래서 4개만 예외로 두고 3을 빼고 나누면 올바른 값이 나온다.
*   코드에서 문자에 59만 뺀 이유는 편의성을 위해서이다. 위의 표 3열에 모든 숫자에 +6을 하면 4열의 숫자는 +2씩 되니까 1열의 값과 일치하게 되니까 덜 헷갈리라고 한것이다. 근데 딱히 별 차이는 없는듯..

## 성공 코드

<pre class="processing"><code>import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        sc.close();
        int time = 0;

        for (int i = 0; i &lt; str.length(); i++) {
            int n = (int)str.charAt(i) - 59;
            if (n == 24 || n == 27 || n == 30 || n == 31)
                n -= 3;
            time += n / 3 + 1;
        }
        System.out.print(time);
    }
}</code></pre>