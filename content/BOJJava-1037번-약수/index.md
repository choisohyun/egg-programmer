---
title: "[BOJ][Java] 1037번 - 약수"
tags: [undefined]
date: 2020-02-05 17:20:01
path: blog/BOJJava-1037번-약수
cover: ./no-image.png
excerpt: BOJJava-1037번-약수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/154
# 문제

[백준 1037번 문제: 약수](https://www.acmicpc.net/problem/1037)

# 문제 설명

>  
> 약수의 성질을 활용하는 문제
> 

입력받은 수들을 약수로 가지는 수를 찾는 문제이다.  
예로, 50의 약수를 찾아 본다면 아래와 같다.  
`` 2 5 10 25 ``  
더 큰 수인 80은 아래와 같다.  
`` 2 4 5 8 10 16 20 40 ``  
여기서 규칙을 찾을 수 있다.  
만약 약수들이 배열에 담겨 있다면 인덱스가 0번인 수와 n-1(가장 끝의 인덱스)를 곱하면 원래의 찾으려는 수가 나온다. 

그럼 다른 케이스를 찾아 보자.  
9는 약수가 3뿐이다. 그렇기 때문에 인덱스가 0일 때와 n-1일 때의 숫자가 자연적으로 같다.  
3\*3이 되어 원하는 수를 찾을 수 있다. 

하지만 이 약수들은 정렬되어 들어오지 않는다. 그래서 정렬이 필요하다.  
성공 코드는 아래에서 볼 수 있다. 

# 성공 코드

<pre><code class="language-js">import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int divisors[] = new int[n];

        for (int i = 0; i &lt; n; i++) {
            divisors[i] = sc.nextInt();
        }
        sc.close();

        Arrays.sort(divisors);
        int result = divisors[0] * divisors[n-1];

        System.out.print(result);

    }
}</code></pre>