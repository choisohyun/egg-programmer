---
title: "[BOJ][Java] 15650번 - N과 M (2)"
tags: [undefined]
date: 2019-12-23 15:16:23
path: blog/BOJJava-15650번-N과-M-2
cover: ./no-image.png
excerpt: BOJJava-15650번-N과-M-2
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/108
# 문제

[백준 15649번 문제: N과 M (2)](https://www.acmicpc.net/problem/15650)

__N과 M__ 시리즈 문제 해설 보러가기

*   [\[BOJ\]\[Java\] 15649번 - N과 M (1)](https://egg-programmer.tistory.com/105)
*   [\[BOJ\]\[Java\] 15650번 - N과 M (2)](https://egg-programmer.tistory.com/108)
*   [\[BOJ\]\[Java\] 15651번 - N과 M (3)](https://egg-programmer.tistory.com/109)
*   [\[BOJ\]\[Java\] 15652번 - N과 M (4)](https://egg-programmer.tistory.com/110)

# 문제 설명

15650번 문제에서 오름차순 조건이 추가된 문제이다.

1.   수열의 첫 번째 수일 때
2.   수열의 이전 수가 현재 수보다 작을 때  
    위의 두 가지 경우에만 재귀함수를 불러올 수 있도록 if문으로 조건문을 추가해 주었다.

    if (i == 0 || arr[i-1] &lt; j)
        dfs(n, m, i+1);

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
        static int[] arr;
        static boolean[] visited;
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();    // 1부터 n까지
            int m = sc.nextInt();    // 중복 없이 m개를 고르기
            sc.close();
    
            arr = new int[m];
            visited = new boolean[n+1];
    
            dfs(n, m, 0);
        }
    
        private static void dfs(int n, int m, int i) {
            if (i == m) {
                for (int idx : arr) {
                    System.out.print(idx + " ");
                }System.out.println();
            }
            else {
                for (int j = 1; j &lt;= n; j++) {
                    if (!visited[j]) {
                        visited[j] = true;
                        arr[i] = j;
    
                        if (i == 0 || arr[i-1] &lt; j)
                            dfs(n, m, i+1);
                        visited[j] = false;
                    }
    
                }
            }
        }
    
    }