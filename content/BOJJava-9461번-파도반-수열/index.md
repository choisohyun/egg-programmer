---
title: "[BOJ][Java] 9461번 - 파도반 수열"
tags: [undefined]
date: 2020-01-05 10:25:08
path: blog/BOJJava-9461번-파도반-수열
cover: ./no-image.png
excerpt: BOJJava-9461번-파도반-수열
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/120
# 문제

[백준 9461번 문제 : 파도반 수열](https://www.acmicpc.net/problem/9461)

# 문제 설명

>  
> 피보나치 수와 비슷한 규칙을 찾아 동적 계획법으로 푸는 문제
> 

파도반 수열은 n에서 두번째 수와 세번째 수를 더하면 n의 값이 나오는 문제이다.  
재귀로 풀면 __시간 초과__로 틀린다.  
배열에 차곡차곡 담는 식으로 풀어야 한다.  
초기값은 처음 3개의 값인 1로 두면 된다. 

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
    
            for (int i = 0; i &lt; t; i++) {
                int n = sc.nextInt();
                System.out.println(padovan(n));
            }
            sc.close();
        }
    
        public static long padovan(int n) {
            long[] sequence = new long[n+1];
    
            for (int i = 1; i &lt;= n; i++) {
                sequence[i] = (i &lt; 4)? 1 : sequence[i-2]+sequence[i-3];
            }
    
            return sequence[n];
        }
    
    }