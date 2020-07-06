---
title: "[BOJ][Java] 1904번 - 01타일"
tags: [undefined]
date: 2019-12-29 12:39:28
path: blog/BOJJava-1904번-01타일
cover: ./no-image.png
excerpt: BOJJava-1904번-01타일
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/116
# 문제

[백준 1904번 문제: 01타일](https://www.acmicpc.net/problem/1904)

# 문제 설명

n의 증가로 타일 개수를 세어 봤을 때의 표이다.

<table border="1" style="border-collapse: collapse; width: 34.7674%; height: 528px;"><tbody><tr><td>* n = 1</td><td>1</td></tr><tr><td>* n = 2</td><td>2</td></tr><tr><td>* n = 3</td><td>3</td></tr><tr><td>* n = 4</td><td>5</td></tr><tr><td>* n = 5</td><td>8</td></tr><tr><td>* n = 6</td><td>13</td></tr><tr><td>* n = 7</td><td>21</td></tr><tr><td>* n = 8</td><td>34</td></tr><tr><td>* n = 9</td><td>55</td></tr><tr><td>* n = 10</td><td>89</td></tr><tr><td>* n = 11</td><td>144</td></tr><tr><td>* n = 12</td><td>233</td></tr><tr><td>* n = 13</td><td>377</td></tr><tr><td>* n = 14</td><td>610</td></tr></tbody></table>

*   `` n = n-1 + n-2 `` 구조를 띠고 있다.
*   앞에서 풀었던 피보나치 수와 비슷하게 풀면 된다. 
*   단, 주의할 것은 `` 15746 ``을 나눈 나머지 값으로 저장하면서 for문을 돌아야 한다는 것이다. 

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            sc.close();
    
            System.out.print(binary(n));
        }
    
        public static long binary(int n) {
            long nums[] = new long[n+1];
    
            for (int i = 1; i &lt;= n; i++) {
                nums[i] = (i &lt;= 2)? i : nums[i-1]+nums[i-2];
                nums[i] %= 15746;
            }
    
            return nums[n];
        }
    }