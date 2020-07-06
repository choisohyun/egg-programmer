---
title: "[BOJ][Java] 15651번 - N과 M (3)"
tags: [undefined]
date: 2019-12-23 15:28:01
path: blog/BOJJava-15651번-N과-M-3
cover: ./no-image.png
excerpt: BOJJava-15651번-N과-M-3
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/109
# 문제

[백준 15651번 문제: N과 M (3)](https://www.acmicpc.net/problem/15651)

__N과 M__ 시리즈 문제 해설 보러가기

*   [\[BOJ\]\[Java\] 15649번 - N과 M (1)](https://egg-programmer.tistory.com/105)
*   [\[BOJ\]\[Java\] 15650번 - N과 M (2)](https://egg-programmer.tistory.com/108)
*   [\[BOJ\]\[Java\] 15651번 - N과 M (3)](https://egg-programmer.tistory.com/109)
*   [\[BOJ\]\[Java\] 15652번 - N과 M (4)](https://egg-programmer.tistory.com/110)

# 문제 설명

1부터 n까지 중복 관계 없이 m개를 고르는 문제  
15649번 문제에서 중복을 체크할 필요가 없어졌다.  
그래서 앞의 문제들과는 다르게 방문 여부를 체크하는 visited 배열을 쓰지 않아도 됐다.  
그리고 Scanner를 사용하면 시간 초과로 실패가 나와서 BufferedReader, BufferedWriter를 사용했다.

# 성공 코드

    import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.InputStreamReader;
    import java.io.OutputStreamWriter;
    import java.io.IOException;
    import java.util.StringTokenizer;
    
    public class Main {
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
                    dfs(n, m, d+1);
                }
            }
        }
    }