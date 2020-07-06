---
title: "[BOJ][Java] 1100번 - 하얀 칸"
tags: [undefined]
date: 2019-12-20 16:17:39
path: blog/BOJJava-1100번-하얀-칸
cover: ./no-image.png
excerpt: BOJJava-1100번-하얀-칸
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/101
# 문제

[백준 1100번 문제: 하얀 칸](https://www.acmicpc.net/problem/1100)

# 문제 설명

가장 위의 칸(0,0)이 하얀색이고, 하얀색은 검정색과 번갈아가며 칠해진다면, 하얀색 위에 있는 F는 몇 개일지 구하는 문제

하얀색 말의 조건

*   홀수번재 열일 때 홀수번째 행
*   짝수번째 열일 때 짝수번째 열  
    조건이 위와 같기 때문에 하얀색 말의 행열 번호의 합은 언제나 짝수이다.  
    이를 이용해 풀어도 된다.  
    나는 그냥 위의 조건을 if문과 for문을 활용해서 풀었다. 위 조건일 때 F가 등장하면 1씩 증가하게끔 해줬다.

# 성공 코드

    import java.util.Scanner;
    
    public class BOJ1100 {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            String[] chase = new String[8];
            int cnt = 0;
    
            for (int i = 0; i &lt; chase.length; i++) {
                chase[i] = sc.next();
                if (i % 2 == 0) {
                    for (int j = 0; j &lt; chase[i].length(); j++) {
                        if (j % 2 == 0 &amp;&amp; chase[i].charAt(j) == 'F')
                            cnt++;
                    }
                }
                else {
                    for (int j = 0; j &lt; chase[i].length(); j++) {
                        if (j % 2 == 1 &amp;&amp; chase[i].charAt(j) == 'F')
                            cnt++;
                    }
                }
            }
            sc.close();
            System.out.print(cnt);
        }
    }