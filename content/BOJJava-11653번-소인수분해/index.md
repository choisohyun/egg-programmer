---
title: "[BOJ][Java] 11653번 - 소인수분해"
tags: [undefined]
date: 2020-02-05 17:28:42
path: blog/BOJJava-11653번-소인수분해
cover: ./no-image.png
excerpt: BOJJava-11653번-소인수분해
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/155
# 문제

[백준 11653번 문제: 소인수분해](https://www.acmicpc.net/problem/11653)

# 문제 설명

>  
> 소인수분해를 배우는 문제  
> 정수 N이 주어졌을 때, 소인수분해하는 문제
> 

말 그대로 소인수분해를 하는 문제이다.  
나는 반복문을 안쓰고 싶었어서 재귀함수를 사용해 풀었다.  
소인수분해를 해야 하는 수가 A라고 하면 A가 1이 되어 더 이상 나눌 수가 없을 때까지 재귀함수가 돌고 그 안에서는 A를 2부터 시작해서 1씩 커지도록 하는 숫자를 나눠 가며 소인수를 구해 나갔다.  
재귀함수를 쓰면서 스택오버플로우 에러가 많이 나서 조심히 써야 할 것 같다. 

# 성공 코드

<pre><code class="language-js">import java.util.Scanner;

public class Main {
    static int i = 2;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();
        StringBuilder sb = new StringBuilder();

        System.out.println(getFactorization(n, sb));
    }

    public static String getFactorization(int n, StringBuilder sb) {

        if (n == 1) return (sb.toString());

        if (n % i == 0) {
            n /= i;
            sb.append(i + "\n");
        }
        else {
            i++;
        }

        return getFactorization(n, sb);
    }

}</code></pre>