---
title: "[BOJ][Java] 1149번 - RGB거리"
tags: [undefined]
date: 2020-01-05 12:04:57
path: blog/BOJJava-1149번-RGB거리
cover: ./no-image.png
excerpt: BOJJava-1149번-RGB거리
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/121
# 문제

[백준 1149번 문제: RGB거리](https://www.acmicpc.net/problem/1149)

# 문제 설명

>  
> i번째 집을 각각의 색으로 칠할 때, 1~i번째 집을 모두 칠하는 최소 비용으로 부분문제를 정의해봅시다.
> 

설명 추가 예정

# 성공 코드

    import java.util.Scanner;
    
    public class Main{
        public static void main(String[] args){
            Scanner s = new Scanner(System.in);
            int n = s.nextInt();
            int[][] rgb = new int[3][n+1];
    
            for (int i = 0; i &lt; n; i++){
                rgb[0][i] = s.nextInt();
                rgb[1][i] = s.nextInt();
                rgb[2][i] = s.nextInt();
            }
    
            for (int i = 1; i &lt; n; i++){
                rgb[0][i] += Math.min(rgb[1][i-1], rgb[2][i-1]);
                rgb[1][i] += Math.min(rgb[0][i-1], rgb[2][i-1]);
                rgb[2][i] += Math.min(rgb[1][i-1], rgb[0][i-1]);
            }
    
            System.out.println(Math.min(rgb[0][n-1], 
                                        Math.min(rgb[1][n-1], rgb[2][n-1]) ));
        }
    }