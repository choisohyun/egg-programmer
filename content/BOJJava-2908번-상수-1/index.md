---
title: "[BOJ][Java] 2908번 - 상수"
tags: [undefined]
date: 2019-12-08 01:24:58
path: blog/BOJJava-2908번-상수-1
cover: ./no-image.png
excerpt: BOJJava-2908번-상수-1
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/83
# 문제

*   [백준 2908번: 상수](https://www.acmicpc.net/problem/2908)

# 문제 설명

*   입력받은 두 수를 거꾸로 뒤집어서 큰 숫자를 출력(출력도 뒤집힌 수로 출력)
*   reverse할 때는 `` StringBuffer ``를 이용했다.
*   인풋받은 두 숫자를 리벌스하면서 의미없는 코드가 반복될 것 같아 `` reverse `` 함수를 따로 만들어 줬다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int a = reverse(sc.next());
            int b = reverse(sc.next());
            sc.close();
    
            if (a &gt; b)
                System.out.println(a);
            else
                System.out.println(b);
        }
    
        public static int reverse(String str) {
            StringBuffer sb = new StringBuffer(str);
            sb = sb.reverse();
            int result = Integer.parseInt(sb.toString());
            return result;
        }
    }