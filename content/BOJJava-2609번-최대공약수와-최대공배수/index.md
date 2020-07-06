---
title: "[BOJ][Java] 2609번 - 최대공약수와 최대공배수"
tags: [undefined]
date: 2020-02-05 19:50:53
path: blog/BOJJava-2609번-최대공약수와-최대공배수
cover: ./no-image.png
excerpt: BOJJava-2609번-최대공약수와-최대공배수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/156
# 문제

[백준 2609번 문제: 최대공약수와 최대공배수](https://www.acmicpc.net/problem/2609)

# 문제 설명

>  
> 최대공약수와 최소공배수를 구하는 문제
> 

최대공약수를 구하고 그것을 바탕으로 최소공배수를 구하면 된다.  
최대공약수와 최소공배수는 아래와 같이 큰 값에서 작은 값의 나머지 값을 구해 0이 될 때까지 반복해서 구할 수 있다. 

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@ceEPMO/btqBLHqHBJc/xkDKKwJbPGGwXpQiI5kqK1/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int first = sc.nextInt();
            int second = sc.nextInt();
            sc.close();
    
            int big = Math.max(first, second);
            int small = Math.min(first, second);
    
            System.out.println(gcd(big, small));
            System.out.println((first * second) / gcd(big, small));        
        }
    
        public static long gcd(int first, int second) {
            if (second &lt;= 0) return first;
    
            int temp = first;
            first = second;
            second = temp % second;
    
            return gcd(first, second);
        }
    
    }