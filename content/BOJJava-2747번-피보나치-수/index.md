---
title: "[BOJ][Java] 2747번 - 피보나치 수"
tags: [undefined]
date: 2019-12-29 11:01:01
path: blog/BOJJava-2747번-피보나치-수
cover: ./no-image.png
excerpt: BOJJava-2747번-피보나치-수
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/113
# 문제

[백준 2747번 문제: 피보나치 수](https://www.acmicpc.net/problem/2747)

### 피보나치 수 시리즈 문제 풀이

*   [2747번. 피보나치 수 1](https://egg-programmer.tistory.com/113)
*   [2748번. 피보나치 수 2](https://egg-programmer.tistory.com/114)
*   [2749번. 피보나치 수 3](https://www.acmicpc.net/problem/2749)
*   [10826번. 피보나치 수 4](https://www.acmicpc.net/problem/10826)
*   [10870번. 피보나치 수 5](https://www.acmicpc.net/problem/10870)

# 문제 설명

동적 계획법으로 피보나치 수를 계산하는 문제  
n이 45까지 주어진다.  
최대 45까지이므로 배열을 만들 때 int형으로 만들어도 숫자 저장이 가능하다.  
1번째와 2번째 값, 즉 n의 값이 0이나 1일 때는 초기값인 0과 1을 반환해야 한다.  
n이 2 이상일 경우에는 피보나치의 식`` Fn = Fn-1 + Fn-2 ``을 따라 배열에 저장해 주면 된다. 

>  
> 처음에는 재귀함수로 풀려고 시도했지만 시간 초과가 떠서 재귀로는 풀지 못했다.
> 

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
            int n = Integer.parseInt(br.readLine());
            br.close();
    
    
            bw.write(String.valueOf(fibonacchi(n)));
            bw.close();
        }
    
        public static int fibonacchi(int n) {
            int nums[] = new int[n+1];
    
            for (int i = 0; i &lt;= n; i++) {
                nums[i] = (i &lt; 2)? i : nums[i-1]+nums[i-2];
            }
    
            return nums[n];
        }
    }