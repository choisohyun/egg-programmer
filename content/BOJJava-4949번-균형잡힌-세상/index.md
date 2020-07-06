---
title: "[BOJ][Java] 4949번 - 균형잡힌 세상"
tags: [undefined]
date: 2020-02-23 00:13:03
path: blog/BOJJava-4949번-균형잡힌-세상
cover: ./no-image.png
excerpt: BOJJava-4949번-균형잡힌-세상
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/195
# 문제

[백준 4949번 문제: 균형잡힌 세상](https://www.acmicpc.net/problem/4949)

# 문제 설명

>  
> 위(괄호 문제)와 같은데 괄호의 종류가 다양해진 문제
> 

*   [\[BOJ\]\[Java\] 9012번 - 괄호](https://egg-programmer.tistory.com/192) 문제의 응용 문제이다. 
*   나는 `` 괄호 문제 ``에서 조건만 추가해서 답을 구했다.

## 추가 조건

1.   `` . ``이 오면 멈춰야 하므로 `` while ``문으로 변경했다.
2.   문자열 `` . ``이 오면 while문 중지하도록 했다.
3.   `` 소괄호() ``일 때와 `` 대괄호[] ``일 때의 조건을 분리해 스택에 쌓이고 빠질 수 있도록 했다.
4.   이 때, `` [) ``와 같은 짝이 맞지 않는 괄호가 `` true ``가 되는 것을 막기 위해 `` stack.peek() == "(" `` 조건을 추가해 주었다. 

# 성공 코드

    import java.util.Scanner;
    import java.util.Stack;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
    
            while (true){
                Stack&lt;String&gt; stack = new Stack&lt;String&gt;();
                String k = s.nextLine();
                if (k.equals(".")) break;
                boolean small = true;
                boolean big = true;
    
                for (int j = 0; j &lt; k.length(); j++){
                    if ( '(' == k.charAt(j) ) {stack.push("(");}
                    else if ( ')' == k.charAt(j) ) {
                        if (!stack.isEmpty() &amp;&amp; stack.peek() == "(") {
                            stack.pop();
                            }
                        else {
                            small = false;
                            break;
                        }
                    }
    
                    else if ( '[' == k.charAt(j) ) {stack.push("[");}
                    else if ( ']' == k.charAt(j) ) {
                        if (!stack.isEmpty() &amp;&amp; stack.peek() == "[") {
                            stack.pop();
                            }
                        else {
                            big = false;
                            break;
                        }
                    }
                }
    
    
                if (!stack.isEmpty()) small = false;
                else if (!stack.isEmpty()) big = false;
                System.out.println(small &amp;&amp; big ? "yes" : "no");
            }
        }
    
    }