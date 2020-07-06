---
title: "[BOJ][Java] 11047번 - 동전0"
tags: [undefined]
date: 2020-01-12 11:35:56
path: blog/BOJJava-11047번-동전0
cover: ./no-image.png
excerpt: BOJJava-11047번-동전0
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/126
# 문제

[백준 11047번 문제: 동전0](https://www.acmicpc.net/problem/11047)

# 문제 설명

>  
> 동전의 조건이 특별해서 동적 프로그래밍보다 빠르게 답을 찾을 수 있는 문제
> 

동전의 최소 개수를 찾기 위해서는 큰 수부터 교환될 수 있는지 찾아야 한다.  
그래서 입력을 받을 때 `` n-1 ``번째 인덱스부터 저장시킬 수 있도록 했다.  
그래서 `` 50000 ``부터 `` 1 ``까지 루프될 수 있도록 했다. 

# 성공 코드

<pre><code class="language-js">import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int coins[] = new int[n];

        for (int i = n-1; i &gt;= 0; i--) {
            coins[i] = sc.nextInt();            
        }
        sc.close();
        System.out.print(solution(k, coins));
    }

    public static int solution(int k, int[] coins) {
        int result = 0;

        for (int i = 0; i &lt; coins.length; i++) {
            if (k / coins[i] &gt; 0) {
                result += k / coins[i];
                k %= coins[i];
            }
        }

        return result;
    }

}</code></pre>