---
title: "[BOJ][Java] 1003번 - 피보나치 함수"
tags: [undefined]
date: 2019-12-29 12:29:49
path: blog/BOJJava-1003번-피보나치-함수
cover: ./no-image.png
excerpt: BOJJava-1003번-피보나치-함수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/115
# 문제

[백준 1003번 문제: 피보나치 함수](https://www.acmicpc.net/problem/1003)

# 문제 설명

>  
> 단순 재귀로 피보나치 수를 구하면 왜 느릴까요? 함수 호출의 개수가 기하급수적으로 늘어나기 때문입니다.
> 

*   
    
    N번째 피보나치 수에서 0이 출력되는 횟수와 1이 출력되는 횟수를 구하는 문제
    
    
*   
    
    아래는 각 n마다 0과 1의 출력 횟수를 작성한 것이다. 
    
    

    fibo(0) --- 0이 1번 1이 0번
    fibo(1) --- 0이 0번 1이 1번
    fibo(2) --- 0이 1번 1이 1번
    fibo(3) --- 0이 1번 1이 2번
    fibo(4) --- 0이 2번 1이 3번
    fibo(5) --- 0이 3번 1이 5번
    fibo(6) --- 0이 5번 1이 8번
    fibo(7) --- 0이 8번 1번 13번
    fibo(8) --- 0이 13번 1이 21번  

*   
    
    `` fibo(n)의 1의 횟수 === fibo(n+1) 0의 횟수 ``인 것을 알 수 있다.
    
    
*   
    
    이를 활용해 0의 출력 횟수만 가지고 n일 때 0과 1의 출력 횟수를 알아낼 것이다.
    
    
*   
    
    우선 초기값은 0의 `` fibo(0)~fibo(2) `` 값으로 둔다.
    
    
    
        int cnt0 = 1;
        int cnt1 = 0;
        int cnt2 = 1;
    
    
*   
    
    n이 0과 1일 때는 초기값을 반환하면 되니 if문으로 따로 빼준다.
    
    
*   
    
    n이 2 이상일 때 아래와 같은 식을 이용해 피보나치 수를 더해 나간다.
    
    
    
        cnt0 = cnt1;
        cnt1 = cnt2;
        cnt2 = cnt0 + cnt1;
    
    

# 성공 코드

    import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.IOException;
    import java.io.InputStreamReader;
    import java.io.OutputStreamWriter;
    
    public class Main { 
    
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
            int t = Integer.parseInt(br.readLine());
            String tmp[] = new String[t];
    
            for (int i = 0; i &lt; t; i++) {
                int n = Integer.parseInt(br.readLine());
    
                tmp[i] = fiboCnt(n) + " " + fiboCnt(n+1);
                bw.write(tmp[i] + "\n");
            }
    
            br.close();
            bw.close();
        }
    
        public static int fiboCnt(int n) {
            int cnt0 = 1;
            int cnt1 = 0;
            int cnt2 = 1;
    
            if (n == 0) {
                return cnt0;
            }
            else if (n == 1) {
                return cnt1;
            }
            else {
                for (int i = 1; i &lt;= n; i++) {
                    cnt0 = cnt1;
                    cnt1 = cnt2;
                    cnt2 = cnt0 + cnt1;
                }
                return cnt0;
            }
        }
    }