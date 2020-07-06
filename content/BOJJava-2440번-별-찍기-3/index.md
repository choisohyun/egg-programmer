---
title: "[BOJ][Java] 2440번 - 별 찍기 - 3"
tags: [undefined]
date: 2019-12-23 15:01:35
path: blog/BOJJava-2440번-별-찍기-3
cover: ./no-image.png
excerpt: BOJJava-2440번-별-찍기-3
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/106
# 문제

[백준 2440번 문제: 별 찍기 - 3](https://www.acmicpc.net/problem/2440)

# 문제 설명

첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 찍는 문제  
이중 반복문을 통해 해결할 수 있다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            sc.close();
    
            while (n &gt; 0) {
                for (int i = n; i &gt; 0; i--) {
                    System.out.print("*");
                } 
                System.out.println();
                n--;
            }
        }
    }