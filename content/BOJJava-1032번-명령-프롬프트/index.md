---
title: "[BOJ][Java] 1032번 - 명령 프롬프트"
tags: [undefined]
date: 2019-12-20 18:27:48
path: blog/BOJJava-1032번-명령-프롬프트
cover: ./no-image.png
excerpt: BOJJava-1032번-명령-프롬프트
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/102
# 문제

[백준 1032번 문제: 명령 프롬프트](https://www.acmicpc.net/problem/1032)

# 문제 설명

n개의 파일명을 입력받아 중복되지 않은 파일명의 부분을 ?로 출력하는 문제  
처음에 문제를 제대로 안읽어서 파일명이 3개만 입력되는줄알고 하드코딩을 했다가 틀렸다ㅠ  
제한시간이 2초라서 처음 입력된 값에 차례대로 하나씩 비교하게끔 했다.  
일반 `` String ``으로 값을 받으면 값을 중간에 바꾸기가 번거로워서 `` StringBuilder ``를 사용해서 다른 값이 나오면 `` setCharAt() ``을 이용해 ?로 바꿔 주었다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            StringBuilder first = new StringBuilder(sc.next());
    
            for (int j = 1; j &lt; n; j++) {
                StringBuilder temp = new StringBuilder(sc.next());
    
                for (int i = 0; i &lt; first.length(); i++) {
                    if (first.charAt(i) != temp.charAt(i)) {
                        first.setCharAt(i, '?');;
                    }
                }
            }
            sc.close();
            System.out.print(first);
        }
    }