---
title: "[BOJ][Java] 2902번 - KMP는 왜 KMP일까?"
tags: [undefined]
date: 2019-12-20 16:06:37
path: blog/BOJJava-2902번-KMP는-왜-KMP일까
cover: ./no-image.png
excerpt: BOJJava-2902번-KMP는-왜-KMP일까
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/100
# 문제

[백준 2902번 문제: KMP는 왜 KMP일까?](https://www.acmicpc.net/problem/2902)

# 문제 설명

입력된 이름들의 첫 글자만 모아서 출력하는 문제  
이름이 -로 구문되어 있으므로 입력받으면서 `` split("-") ``을 이용해 배열에 저장한다.  
그리고 각각의 요소마다 첫 글자만 String으로 누적해서 저장하고 최종 값을 출력한다.

# 성공 코드

    import java.util.Scanner;
    
    public class BOJ2902 {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            String[] longName = sc.next().split("-");
            sc.close();
            String answer = "";
    
            for (String name : longName) 
                answer += String.valueOf(name.charAt(0));
            System.out.print(answer);
        }
    }