---
title: "[BOJ][Java] 1316번 - 그룹 단어 체커"
tags: [undefined]
date: 2019-12-20 14:16:33
path: blog/BOJJava-1316번-그룹-단어-체커
cover: ./no-image.png
excerpt: BOJJava-1316번-그룹-단어-체커
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/95
# 문제

[백준 1316번 문제: 그룹 단어 체커](https://www.acmicpc.net/problem/1316)

# 문제 설명

입력받은 문자들의 그룹 단어 개수를 계산해 줘야 하는 문제  
이전에 방문 여부를 저장하기 위해 크기가 26인 boolean 배열을 이용한다.  
입력받은 문자열의 길이만큼 for문을 돈다.  
이전 문자와 같지 않은 문자가 등장했는데, 방문했던 문자라면 그룹단어가 아니다.  
그룹단어가 아니면 처음 입력받은 개수에서 1씩 빠지기 때문에 결과적으로 그룹단어의 개수가 출력되게 된다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
            int n = s.nextInt();
            int cnt = n;
    
            for (int i = 0; i &lt; n; i++) {
                String[] str = s.next().split("");
                boolean[] exi = new boolean[26];
    
                for (int idx = 1; idx &lt; str.length; idx++) {
                    if (!str[idx-1].equals(str[idx]) 
                            &amp;&amp; exi[str[idx].charAt(0) - 97] == true) {
                        cnt--;
                        break;
                    }
                    exi[str[idx-1].charAt(0) - 97] = true;
                }
            }
            s.close();
            System.out.print(cnt);
        }
    }