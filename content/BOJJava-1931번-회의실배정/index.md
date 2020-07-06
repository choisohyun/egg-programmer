---
title: "[BOJ][Java] 1931번 - 회의실배정"
tags: [undefined]
date: 2020-01-12 12:52:19
path: blog/BOJJava-1931번-회의실배정
cover: ./no-image.png
excerpt: BOJJava-1931번-회의실배정
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/127
# 문제

[백준 1931번 문제: 회의실배정](https://www.acmicpc.net/problem/1931)

# 문제 설명

>  
> 가능한 한 많은 구간을 선택하는 문제
> 

일단 `` 그리디 알고리즘 ``은 정해진 기준에서 `` 현재 ``의 가장 최상의 값을 찾아나가는 알고리즘이다.  
그럼 회의실배정 문제에서 최상의 값을 찾을 수 있는 기준은 어떻게 잡을 수 있을까? 

1.   회의가 `` 끝나는 시간 ``을 최대한 작은 수부터 골라야 한다. 
2.   회의 끝나는 시간이 같다면 회의 `` 시작 시간 ``이 작은 수부터 골라야 한다. 

# 성공 코드

    import java.util.Arrays;
    import java.util.Comparator;
    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int time[][] = new int[n][2];
    
            for (int i = 0; i &lt; n; i++) {
                time[i][0] = sc.nextInt(); // start
                time[i][1] = sc.nextInt(); // end
            }
            sc.close();
    
            System.out.print(solution(time));
        }
    
        private static int solution(int[][] time) {
            int result = 0;
    
            Arrays.sort(time, new Comparator&lt;int[]&gt;() {
    
                @Override
                public int compare(int[] o1, int[] o2) {
                    if (o1[1] == o2[1])
                        return o1[0] - o2[0]; // start time 기준
                    return o1[1] - o2[1]; // end time 기준으로 정렬
                }
    
            });
    
            int last = 0;
            for (int i = 0; i &lt; time.length; i++) {
                if (last &lt;= time[i][0]) {
                    last = time[i][1];
                    result++;
                }
            }
    
            return result;
        }
    
    }