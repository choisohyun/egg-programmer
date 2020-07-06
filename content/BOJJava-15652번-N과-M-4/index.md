---
title: "[BOJ][Java] 15652번 - N과 M (4)"
tags: [undefined]
date: 2019-12-23 15:33:40
path: blog/BOJJava-15652번-N과-M-4
cover: ./no-image.png
excerpt: BOJJava-15652번-N과-M-4
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/110
# 문제

[백준 15652번 문제: N과 M (4)](https://www.acmicpc.net/problem/15652)

__N과 M__ 시리즈 문제 해설 보러가기

*   [\[BOJ\]\[Java\] 15649번 - N과 M (1)](https://egg-programmer.tistory.com/105)
*   [\[BOJ\]\[Java\] 15650번 - N과 M (2)](https://egg-programmer.tistory.com/108)
*   [\[BOJ\]\[Java\] 15651번 - N과 M (3)](https://egg-programmer.tistory.com/109)
*   [\[BOJ\]\[Java\] 15652번 - N과 M (4)](https://egg-programmer.tistory.com/110)

# 문제 설명

15651번 문제에서 __비내림차순__ 조건이 추가된 문제이다.  
비내림차순이므로 &lt;=를 사용하면 된다.  
오름차순 문제인 15650번과 비슷하게 재귀함수에 조건을 주면 쉽게 풀 수 있다.  
한 문제를 풀면 다른 문제들은 응용하며 풀 수 있어 문제 이해가 무엇보다 중요했던 문제 같다!

# 성공 코드

    import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.IOException;
    import java.io.InputStreamReader;
    import java.io.OutputStreamWriter;
    import java.util.StringTokenizer;
    
    public class BOJ15652 {
    
        static int[] arr;
        static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));
    
        public static void main(String[] args) throws IOException{
            BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    
            int n = Integer.parseInt(st.nextToken());    // 1부터 n까지
            int m = Integer.parseInt(st.nextToken());    // m개를 고르기
    
            arr = new int[m];
            dfs(n, m, 0);
            br.close();
            bw.close();
        }
    
        public static void dfs(int n, int m, int d) throws IOException {
            if (d == m) {
                for (int s : arr)
                    bw.write(s + " ");
                bw.write("\n");
            } else {
                for (int i = 1; i &lt;= n; i++) {
                    arr[d] = i;
    
                    if (d == 0 || arr[d-1] &lt;= i)
                        dfs(n, m, d+1);
                }
            }
        }
    
    }