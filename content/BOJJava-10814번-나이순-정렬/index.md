---
title: "[BOJ][Java] 10814번 - 나이순 정렬"
tags: [undefined]
date: 2019-12-20 20:03:28
path: blog/BOJJava-10814번-나이순-정렬
cover: ./no-image.png
excerpt: BOJJava-10814번-나이순-정렬
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/104
# 문제

[백준 10814번 문제: 나이순 정렬](https://www.acmicpc.net/problem/10814)

# 문제 &amp; 코드 설명

정렬 조건

1) 나이  
2) 가입 순서

여기서 주의해야 할 점은 __가입 순서__이다. HashMap은 순서가 보장되지 않기 때문에 입력한대로 저장하기 위해서 이중 배열을 사용했다.  
그리고 Arrays.sort에 Comparator를 사용해 나이를 기준으로 정렬했다.  
가입 순서는 처음 입력한 순서만 유지되면 되므로 따로 순서를 저장할 필요는 없었다.

# 성공 코드

    import java.util.Arrays;
    import java.util.Comparator;
    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            String[][] member = new String[n][2];
    
            for (int i = 0; i &lt; n; i++) {
                member[i][0] = sc.next();
                member[i][1] = sc.next();
            }
            sc.close();
    
            Arrays.sort(member, new Comparator&lt;String[]&gt;() {
    
                @Override
                public int compare(String[] o1, String[] o2) {
                    return Integer.compare(Integer.parseInt(o1[0]), Integer.parseInt(o2[0]));
                }
    
            });
    
            for (int i = 0; i &lt; n; i++)
                System.out.println(member[i][0] + " " + member[i][1]);
        }
    }