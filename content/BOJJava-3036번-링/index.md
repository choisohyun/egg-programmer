---
title: "[BOJ][Java] 3036번 - 링"
tags: [undefined]
date: 2020-02-21 11:15:27
path: blog/BOJJava-3036번-링
cover: ./no-image.png
excerpt: BOJJava-3036번-링
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/189
# 문제

[백준 3036번 문제: 링](https://www.acmicpc.net/problem/3036)

# 문제 설명

>  
> 첫번째 링을 한 바퀴 돌렸을 때, 나머지 링이 몇바퀴 도는 지 구하는 문제
> 

처음 입력된 수의 개수만큼 한 줄에 입력된다.  
입력된 N개의 수를 첫번째 수를 나머지 수와 나눠서 생긴 값을 분수로 출력할 수 있게 하면 된다.  
`` ㅁ/ㅇ `` 형태로 값을 출력하려면 값을 따로 따로 출력해야 한다.  
그래서 만약 수가 `` 12 3 8 4 ``와 같이 입력된다면, 12와 3의 최대공약수를 구해 12와 3을 나눠서 /와 함께 합쳐야 한다.  
나머지 수인 8과 4도 위와 똑같이 처리해 주면 된다.  
for문을 돌며 반복 처리될 수 있도록 하면 해결된다. 

# 성공 코드

<pre><code class="language-java">import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] radius = new int[n];
        for (int i = 0; i &lt; n; i++) {
            radius[i] = sc.nextInt();
        }

        for (int i = 1; i &lt; n; i++) {
            String answer = "";
            int gcdNum = gcd(radius[i], radius[0]);
            answer += radius[0] / gcdNum;
            answer += "/";
            answer += radius[i] / gcdNum;

            System.out.println(answer);
        }
    }

    public static int gcd(int first, int second) {
        if (second &lt;= 0) return first;

        int temp = first;
        first = second;
        second = temp % second;

        return gcd(first, second);
    }

}</code></pre>