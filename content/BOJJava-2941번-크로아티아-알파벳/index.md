---
title: "[BOJ][Java] 2941번 - 크로아티아 알파벳"
tags: [undefined]
date: 2019-12-20 14:40:13
path: blog/BOJJava-2941번-크로아티아-알파벳
cover: ./no-image.png
excerpt: BOJJava-2941번-크로아티아-알파벳
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/96
# 문제

[백준 2941번 문제: 크로아티아 알파벳](https://www.acmicpc.net/problem/2941)

# 문제 설명

문제에 제시된 크로아티아 알파벳 표를 이용해 입력된 단어의 크로아티아 알파벳 개수를 찾는 문제.  
크로아티아 알파벳이 3글자로 표현되는 경우도 있어서 표의 크로아티아 글자 배열을 따로 만들었다.  
크로아티아 배열을 활용해 for문을 돌며 `` contains() ``를 사용해 문자열에 크로아티아어가 존재하면 임의의 문자열인 1로 바꿔주었다.  
단순히 크로아티아어 한글자의 의미이기 때문에 한 글자라면 어떤 문자도 상관 없다.  
for문이 끝나면 최종 문자열의 길이를 출력하면 된다.

# 성공 코드

<pre><code class="language-java">import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        sc.close();
        String[] croatia = {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};

        for (int i = 0; i &lt; croatia.length; i++) {
            if (str.contains(croatia[i]))
                str = str.replaceAll(croatia[i], "1");        
        }
        System.out.print(str.length());
    }
}</code></pre>