---
title: "[BOJ][Java] 2441번 - 별 찍기 - 4"
tags: [undefined]
date: 2019-12-23 15:05:26
path: blog/BOJJava-2441번-별-찍기-4
cover: ./no-image.png
excerpt: BOJJava-2441번-별-찍기-4
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/107
# 문제

[백준 2441번 문제: 별 찍기 - 4](https://www.acmicpc.net/problem/2441)

# 문제 설명

첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 오른쪽 정렬로 찍는 문제  
[\[BOJ\]\[Java\] 2440번 - 별 찍기 - 3](https://egg-programmer.tistory.com/106) 문제에서 별을 찍는 횟수를 N에서 뺀 개수만큼 공백이 출력되는 반복문을 추가하면 된다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            sc.close();
    
            for (int i = 1; i &lt;= n; ++i) {
                for (int j = 1; j &lt;= i - 1; ++j) {
                    System.out.print(" ");
                }
                for (int j = 1; j &lt;= n - i + 1; ++j) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
    }