---
title: "[BOJ][Java] 9012번 - 괄호"
tags: [undefined]
date: 2020-02-21 11:54:04
path: blog/BOJJava-9012번-괄호
cover: ./no-image.png
excerpt: BOJJava-9012번-괄호
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/192
# 문제

[백준 9012번 문제: 괄호](https://www.acmicpc.net/problem/9012)

# 문제 설명

>  
> 주어진 문자열이 올바른 괄호열인지 판단하는 문제
> 

# 문제 풀이

1.   입력 데이터의 수(n)만큼 반복문을 돈다.
2.   빈 `` 스택 ``과 `` vps `` 판별 boolean 값을 초기값으로 둔다.
3.   문자열 하나씩 비교하기 위해 문자열 길이만큼 반복문을 돈다.
4.   `` ( ``이면 스택에 넣는다.
5.   `` ) ``이면서 스택이 비어있지 않으면 스택에 있는 마지막 요소를 pop하여 제거한다. 

*   여기서 스택에서 제거하는 이유는, `` vps ``라면 짝이 맞기 때문에 마지막에는 스택이 비워져야 맞는 것이기 때문이다. 

<ol start="6">
<li><code>)</code>이면서 스택이 비어 있으면 (가 스택에 없다는 뜻이므로 vps를 <code>false</code>로 바꾸고 for문을 멈춘다.</li>
<li>만약 반복문을 다 돌았는데 스택이 비어있지 않다면 vps를 false로 변경해 예외 처리를 해 준다.</li>
<li>vps가 true이면 <code>YES</code>, false이면 <code>NO</code>를 출력한다. </li>
</ol>

# 성공 코드

    import java.util.Scanner;
    import java.util.Stack;
    
    public class Main{
        public static void main(String[] args){
            Scanner s=new Scanner(System.in);
            int n = s.nextInt();
    
            for (int i = 0; i &lt; n; i++){
                Stack&lt;String&gt; stack = new Stack&lt;String&gt;();
                String k = s.next();
                boolean vps = true;
    
                for (int j = 0; j &lt; k.length(); j++){
                    if ( '(' == k.charAt(j) ) {stack.push("(");}
                    else if ( ')' == k.charAt(j) ) {
                        if (!stack.isEmpty()) {stack.pop();}
                        else {
                            vps = false;
                            break;
                        }
                    }
                }
                if (!stack.isEmpty()) vps = false;
                System.out.println(vps? "YES" : "NO");
            }
        }
    }