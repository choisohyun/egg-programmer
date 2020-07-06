---
title: "[BOJ][Java] 5086번 - 배수와 약수"
tags: [undefined]
date: 2020-01-19 13:12:19
path: blog/BOJJava-5086번-배수와-약수
cover: ./no-image.png
excerpt: BOJJava-5086번-배수와-약수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/136
# 문제

[백준 5086번 문제: 배수와 약수](https://www.acmicpc.net/problem/5086)

# 문제 설명

>  
> 배수와 약수를 배우는 문제
> 

말 그대로 배수와 약수, 둘 다 아닌 것을 판별해야 하는 문제이다. 

1.   `` Scanner ``로 각 줄의 첫번째 수와 두번째 수를 `` first, second `` 변수에 담는다.
2.   만약 `` first, second `` 모두 0이면 반복문을 멈춘다
3.   두 수는 `` judgeNumber `` 함수에서 수 판별을 받는다.
4.   if문으로 각 수들이 조건에 따라 나눠지는지 판별해 결과를 `` result `` 변수에 담아 반환한다.

# 성공 코드

    import java.util.Scanner;
    
    public class BOJ5086 {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            StringBuilder sb = new StringBuilder();
    
            while (true) {
                int first = sc.nextInt();
                int second = sc.nextInt();
    
                if (first == 0 &amp;&amp; second == 0) break;
                sb.append(judgeNumber(first, second) + "\n");
            }
            sc.close();
            System.out.println(sb);
        }
    
        public static String judgeNumber(int first, int second) {
            String result = "";
    
            if (second % first == 0) {
                result = "factor";
            }
            else if (first % second == 0) {
                result = "multiple";
            }
            else {
                result = "neither";
            }
    
            return result;
        }
    
    }