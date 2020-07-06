---
title: "[BOJ][Java] 11399번 - ATM"
tags: [undefined]
date: 2020-01-19 12:53:19
path: blog/BOJJava-11399번-ATM
cover: ./no-image.png
excerpt: BOJJava-11399번-ATM
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/134
# 문제

[백준 11399번 문제: ATM](https://www.acmicpc.net/problem/11399)

# 문제 설명

>  
> 기다리는 시간의 합을 최소화하는 문제
> 

기다리는 시간의 함을 최소화하기 위해서는 `` 작은 수 ``부터 앞에 와야 한다.  
시간 제한이 1초이기 때문에 `` Arrays.sort() ``를 통해서 정렬 후 값을 더해 나가면 된다.  
0번째 수부터 n번째 수의 합의 합을 구하는 것이 목적인데, for문을 한번만 돌고 싶다.  
내가 찾은 방법은 두 가지이다.

1.   인출하는 사람마다 반복해서 더해지는 개수를 세서 더하는 방법

*   
    
    5명이 차례대로 인출을 한다면 1번 사람은 5번 더해진다.
    
    
    
        1
        1+2
        1+2+3
        1+2+3+4
        1+2+3+4+5
    
    
    
    위와 같이 첫 번째 사람부터 반복 횟수가 1씩 떨어지기 때문이다.  
    그래서 이를 계산해서 곱해 주면 된다.
    
    
    
        for (int time = 0; time &lt; withdrawTime.length; time++) {
        result += withdrawTime[time] * (withdrawTime.length-time);
        }
    
    

<ol start="2">
<li><p>임시 저장 변수을 만들어 저장한다.</p>
<pre><code>1
1+2
1+2+3
1+2+3+4
1+2+3+4+5</code></pre></li>
</ol>

*   문제에 주어진 더하는 방식을 그대로 더해지는 것이다.
*   위의 라인대로 `` temp ``에 담기고, `` temp ``는 `` sum ``에 더해져 최종 `` sum ``이 나오게 된다.
    
        for (int i = 0; i &lt; n; i++){
        temp += line[i];
        sum += temp;
        }
    
    

# 성공 코드

    import java.util.Arrays;
    import java.util.Scanner;
    import java.util.stream.IntStream;
    
    public class BOJ11399 {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int withdrawTime[] = new int[n];
    
            IntStream.range(0, n).forEach(x -&gt; {
                withdrawTime[x] = sc.nextInt();
            });
    
            sc.close();
            System.out.print(wholeTime(withdrawTime));
        }
    
        public static int wholeTime(int[] withdrawTime) {
            int result = 0;
            Arrays.sort(withdrawTime);
    
            for (int time = 0; time &lt; withdrawTime.length; time++) {
                result += withdrawTime[time] * (withdrawTime.length-time);
            }
    
            return result;
        }
    
    }