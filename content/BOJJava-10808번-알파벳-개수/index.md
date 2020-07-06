---
title: "[BOJ][Java] 10808번 - 알파벳 개수"
tags: [undefined]
date: 2019-12-20 16:02:18
path: blog/BOJJava-10808번-알파벳-개수
cover: ./no-image.png
excerpt: BOJJava-10808번-알파벳-개수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/99
# 문제

[백준 10808번 문제: 알파벳 개수](https://www.acmicpc.net/problem/10808)

# 문제 설명

입력한 단어의 알파벳 개수를 각각 출력하는 문제.  
알파벳 개수를 a부터 z까지 저장하는 26개 크기의 배열을 만든다.  
a가 아스키코드 번호 97이므로 0번부터 a, b, c,... 순서대로 저장하기 위해 for문을 돌며 97을 빼서 카운트한다.  
처음 만든 배열을 출력하면 끝이다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            String s = sc.next();
            sc.close();
            int alpha[] = new int[26];
    
            for (int i = 0; i &lt; s.length(); i++) 
                alpha[ s.charAt(i)-97 ]++;
    
            for (int i : alpha)
                System.out.print(i + " ");
        }
    }