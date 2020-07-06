---
title: "[BOJ][Java] 10828번 - 스택"
tags: [undefined]
date: 2020-02-21 11:28:28
path: blog/BOJJava-10828번-스택
cover: ./no-image.png
excerpt: BOJJava-10828번-스택
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/190
# 문제

[백준 10828번 문제: 스택](https://www.acmicpc.net/problem/10828)

# 문제 설명

>  
> 스택의 개념을 익히고 실습하는 문제  
> 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하는 문제
> 

스택을 선언하고 5개의 명령어(push, pop, size, empty, top)를 구분지어 각각의 명령어에 해당하는 값을 출력하도록 한다.  
Java에는 스택이라는 자료구조를 사용할 수 있어서 import만 시키면 거의 동일한 명령어를 사용할 수 있다. 

# 성공 코드

    import java.util.Scanner;
    import java.util.Stack;
    
    public class Main{
        public static void main(String[] args){
            Scanner s=new Scanner(System.in);
            int n = s.nextInt();
            Stack&lt;Integer&gt; stack = new Stack&lt;Integer&gt;();
    
            for (int i = 0; i &lt; n; i++){
                String k = s.next();
    
                if (k.equals("push")){
                    stack.push(s.nextInt());
                }
                else if (k.equals("pop")){
                    if (stack.isEmpty()) { System.out.println(-1); }
                    else { System.out.println(stack.pop()); }
                }
                else if (k.equals("size")){
                    System.out.println(stack.size());
                }
                else if (k.equals("empty")){
                    if (stack.isEmpty()) { System.out.println(1); }
                    else { System.out.println(0); }
                }
                else if (k.equals("top")){
                    if (stack.isEmpty()) {System.out.println(-1);}
                    else {System.out.println(stack.peek());}
                }
            }
        }
    }