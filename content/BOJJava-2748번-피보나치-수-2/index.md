---
title: "[BOJ][Java] 2748번 - 피보나치 수 2"
tags: [undefined]
date: 2019-12-29 11:13:10
path: blog/BOJJava-2748번-피보나치-수-2
cover: ./no-image.png
excerpt: BOJJava-2748번-피보나치-수-2
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/114
# 문제

\[백준 2748번 문제: 피보나치 수 2\](<https://www.acmicpc.net/problem/2748>)

### 피보나치 수 시리즈 문제 풀이

*   [2747번. 피보나치 수 1](https://egg-programmer.tistory.com/113)
*   [2748번. 피보나치 수 2](https://egg-programmer.tistory.com/114)
*   [2749번. 피보나치 수 3](https://www.acmicpc.net/problem/2749)
*   [10826번. 피보나치 수 4](https://www.acmicpc.net/problem/10826)
*   [10870번. 피보나치 수 5](https://www.acmicpc.net/problem/10870)

# 문제 설명

피보나치 수를 동적 계획법으로 구하는 문제  
피보나치 수 1번 문제와 동일한 문제이다.  
다른 점은 n이 45에서 90으로 증가했다는 점이다.  
이 때문에 수를 저장하는 배열이 `` long `` 형태여야 한다. 

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
    
        public static long fibonacchi(int n) {
            long nums[] = new long[n+1];
    
            for (int i = 0; i &lt;= n; i++) {
                nums[i] = (i &lt; 2)? i : nums[i-1]+nums[i-2];
            }
    
            return nums[n];
        }
    }