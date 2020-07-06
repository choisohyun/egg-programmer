---
title: "[BOJ][Java] 2750번 - 수 정렬하기"
tags: [undefined]
date: 2019-12-01 21:01:43
path: blog/BOJJava-2750번-수-정렬하기
cover: ./no-image.png
excerpt: BOJJava-2750번-수-정렬하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/72
# 문제

>  
> 시간 복잡도가 O(n²)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 삽입 정렬, 거품 정렬 등이 있습니다.
> 
>  
> [2750번 - 수 정렬하기 문제 링크](https://www.acmicpc.net/problem/2750)  
> 입력된 숫자들을 오름차순 정렬시키는 문제
> 

# 문제 설명

1.   Arrays나 Collections의 sort 기능을 통한 정렬 가능
2.   Bubble Sort 구현을 통한 정렬 가능
    
    *   Bubble Sort란? 서로 인접한 두 수를 비교하며 정렬해 나가는 방법
    *   참고 - [\[알고리즘\] 버블 정렬(bubble sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)
    
    
    

# 성공 코드

<pre><code class="language-java">import java.util.Scanner;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] arr = new int[N];

        for (int i = 0; i &lt; N; i++) 
            arr[i] = sc.nextInt();

        // 방법1
        Arrays.sort(arr);

        // 방법2 - bubble sort
        int tmp, j = 1;
        while (j &lt; N) { 
            for (int idx = 1; idx &lt; N; idx++) {

                if (arr[idx] &lt; arr[idx-1]) {
                    tmp = arr[idx];
                    arr[idx] = arr[idx-1];
                    arr[idx-1] = tmp;
                }
            } j++;
        }

        for (int i = 0; i &lt; N; i++) 
            System.out.println(arr[i]);

        sc.close();
    }

}</code></pre>