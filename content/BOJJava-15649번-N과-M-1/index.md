---
title: "[BOJ][Java] 15649번 - N과 M (1)"
tags: [undefined]
date: 2019-12-20 22:53:38
path: blog/BOJJava-15649번-N과-M-1
cover: ./no-image.png
excerpt: BOJJava-15649번-N과-M-1
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/105
# 문제

[백준 15649번 문제: N과 M (1)](https://www.acmicpc.net/problem/15649)

__N과 M__ 시리즈 문제 해설 보러가기

*   [\[BOJ\]\[Java\] 15649번 - N과 M (1)](https://egg-programmer.tistory.com/105)
*   [\[BOJ\]\[Java\] 15650번 - N과 M (2)](https://egg-programmer.tistory.com/108)
*   [\[BOJ\]\[Java\] 15651번 - N과 M (3)](https://egg-programmer.tistory.com/109)
*   [\[BOJ\]\[Java\] 15652번 - N과 M (4)](https://egg-programmer.tistory.com/110)

자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

*   1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

# 문제 설명

DFS(깊이 우선 탐색)를 사용해 백트래킹을 진행했다.

*   DFS: 루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법, 대표적인 완전 탐색 방법, DFS 는 모든곳을 방문하기 때문에 굳이 목표지점이 있지 않는 경로로 빠져서 비효율적인 결과 초래 가능
*   백트래킹: DFS에 가지치기 (Pruning) 를 통해 가도되지 않는 루트는 고려하지 않고 탐색하는 완전탐색 기법

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@cL0M0M/btqABSgf3F1/WPIBOyVgfe6xLWPqFd2grk/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@bnPbbP/btqABRPdZoQ/nsh3FViapp1ARC1vQ0XYlK/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

*   참고:  
    [\[알고리즘\] 깊이 우선 탐색(DFS)이란](https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html)  
    [\[알고리즘\] 백트래킹 (Backtracking) 알고리즘](https://thd0011.tistory.com/19)  
    [\[실전 알고리즘\] 0x07강 - 백트래킹, 시뮬레이션](https://blog.encrypted.gg/732)

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
        static int[] arr;
        static boolean[] visit;
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();    // 1부터 n까지
            int m = sc.nextInt();    // 중복 없이 m개를 고르기
            sc.close();
            arr = new int[m];
            visit = new boolean[n+1];        
            dfs(n, m, 0);
        }
    
        public static void dfs(int n, int m, int d) {
            if (d == m) {
                for (int s : arr)
                    System.out.print(s + " ");
                System.out.println("");
            } else {
                for (int i = 1; i &lt;= n; i++) {
                    if (!visit[i]) {
                        visit[i] = true;
                        arr[d] = i;
                        dfs(n, m, d+1);
                        visit[i] = false;
                    }
                }
            }
        }
    }