---
title: "[BOJ][Java] 2579번 - 계단 오르기"
tags: [undefined]
date: 2020-01-12 12:54:56
path: blog/BOJJava-2579번-계단-오르기
cover: ./no-image.png
excerpt: BOJJava-2579번-계단-오르기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/128
# 문제

[백준 2579번 문제: 계단 오르기](https://www.acmicpc.net/problem/2579)

# 문제 설명

>  
> i번째 계단에 오를 때, 몇 개의 연속한 계단을 올랐는지를 고려하여 부분문제를 정의해봅시다.
> 

# 성공 코드

    import java.util.Scanner;
    import java.util.stream.IntStream;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int score[] = new int[n+1];
            int accu_score[] = new int[n+1];
    
            IntStream.range(1, n+1).forEach(x -&gt; {
                score[x] = sc.nextInt();
            });
            sc.close();
    
            accu_score[1] = score[1];
            accu_score[2] = score[1] + score[2];
            IntStream.range(3, n+1).forEach(i -&gt; {
                accu_score[i] = Math.max(score[i]+score[i-1]+accu_score[i-3], score[i]+accu_score[i-2]);
            });
            System.out.print(accu_score[n]);
        }
    
    }