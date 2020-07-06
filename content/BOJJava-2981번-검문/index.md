---
title: "[BOJ][Java] 2981번 - 검문"
tags: [undefined]
date: 2020-02-05 20:58:52
path: blog/BOJJava-2981번-검문
cover: ./no-image.png
excerpt: BOJJava-2981번-검문
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/157
# 문제

[백준 2981번 문제: 검문](https://www.acmicpc.net/problem/2981)

# 문제 설명

>  
> N개의 수를 M으로 나누었을 때, 나머지가 전부 같은 M을 찾는 문제
> 

도저히 모르겠다. 아무래도 js로 다시 풀어야겠다. 

# 성공 코드(참고: <https://pangsblog.tistory.com/62>)

<pre><code class="language-java">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));

        int n = Integer.parseInt(br.readLine());
        int numbers[] = new int[n];

        for (int i = 0; i &lt; n; i++) {
            numbers[i] = Integer.parseInt(br.readLine());
        }
        br.close();
        Arrays.sort(numbers);

        int gcdNum = numbers[1] - numbers[0];

        for(int i=2; i &lt; n; i++) {
            int dist1 = numbers[i] - numbers[i-1];

            gcdNum = gcd(gcdNum, dist1);
        }

        searchM(gcdNum);
    }

    public static int gcd(int first, int second) {
        if (second &lt;= 0) return first;

        int temp = first;
        first = second;
        second = temp % second;

        return gcd(first, second);
    }

    public static void searchM(int number) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        list.add(number);

        for (int i = 2; i &lt;= Math.sqrt(number); i++) {
            if (number % i == 0) {
                if (i == number / i) {
                    list.add(i);
                }
                else {
                    list.add(i);
                    list.add(number / i);
                }
            }
        }
        Collections.sort(list);

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i &lt; list.size(); i++) {
            sb.append(list.get(i) + " ");
        }
        System.out.println(sb.toString());
    }        
}</code></pre>