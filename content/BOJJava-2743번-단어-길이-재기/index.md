---
title: "[BOJ][Java] 2743번 - 단어 길이 재기"
tags: [undefined]
date: 2019-12-20 15:51:50
path: blog/BOJJava-2743번-단어-길이-재기
cover: ./no-image.png
excerpt: BOJJava-2743번-단어-길이-재기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/98
# 문제

[백준 2743번 문제: 단어 길이 재기](https://www.acmicpc.net/problem/2743)

# 문제 설명

단어가 몇 글자인지 출력하는 문제  
`` length() `` 를 이용해 입력 글자의 길이를 출력하면 된다.

# 성공 코드

    import java.util.Scanner;
    
    public class BOJ2743 {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.print(sc.next().length());
            sc.close();    
        }
    }