---
title: "[BOJ][Java] 10773번 - 제로"
tags: [undefined]
date: 2020-02-21 11:43:10
path: blog/BOJJava-10773번-제로
cover: ./no-image.png
excerpt: BOJJava-10773번-제로
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/191
# 문제

[백준 10773번 문제: 제로](https://www.acmicpc.net/problem/10773)

# 문제 설명

>  
> 가장 최근에 쓴 수를 지우는 문제
> 

Stack을 이용해 푸는 문제이다. 

# 풀이 과정

1.   k만큼 반복문을 돌면서 그 값이 0인지 아닌지를 판별한다.
2.   0이 아니면 stack에 넣고 0이면 pop하여 가장 최신의 값을 뺀다.
3.   최종 값을 계산하기 위해 stack이 비어있는지 확인한다.
4.   비어 있으면 0을 출력한다.
5.   값이 있으면 모든 숫자를 pop하면서 더하고 더한 값을 출력한다.

# 성공 코드

    import java.util.Scanner;
    import java.util.Stack;
    
    public class Main{
        public static void main(String[] args){
            Scanner s=new Scanner(System.in);
            int k, sum;
            k = s.nextInt();
            Stack&lt;Integer&gt; stack = new Stack&lt;Integer&gt;();
            sum = 0;
    
            for (int i = 0; i &lt; k; i++){
                int n = s.nextInt();
    
                if (n != 0) { stack.push(n); }
                else { stack.pop(); }
            }
    
            if (stack.isEmpty()) {System.out.print(0);}
            else {
                while (stack.size() &gt; 0) sum += stack.pop();
                System.out.print(sum);
            }
        }
    }