---
title: "[BOJ][Java] 1932번 - 정수 삼각형"
tags: [undefined]
date: 2020-01-05 13:15:37
path: blog/BOJJava-1932번-정수-삼각형
cover: ./no-image.png
excerpt: BOJJava-1932번-정수-삼각형
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/122
# 문제

[백준 1932번 문제: 정수 삼각형](https://www.acmicpc.net/problem/1932)

# 문제 설명

>  
> 각 층의 모든 칸마다 최댓값을 저장하면서 동적 계획법으로 푸는 문제
> 

최대값을 찾기 위해서는 이전 열에서 최대값을 더해 나가야 한다.  
문제의 예제로 이해를 해보자

            7
          3   8
        8   1   0
      2   7   4   4
    4   5   2   6   5

맨 위의 수인 7은 제일 상단에 위치해 3과 8에 각각 7을 더해주면 된다.  
그럼 10과 15가 되어 밑의 수들에게 선택을 받게 된다.  
하지만 셋째줄의 맨 처음에 있는 8과 0은 선택의 여지가 없이 위의 수를 더해야 한다.  
1은 10과 15 중 큰 수인 15를 선택할 수 있다.  
이를 이용하여 큰 수를 축적해 나갈 수 있다. 아래 축적된 수를 보자.

            7
         10   15
       18  16   15
     20  25  20   19
    24  30  27  26  24

가장 밑에 줄에 가장 큰 수는 30이라 30이 반환되면 맞는 답이다.  
그러면 이전 문제인 [RGB거리](https://egg-programmer.tistory.com/121)와 같게 풀면 되겠다.  
앗 그런데 위에서 확인한 것과 같이 양 끝에 있는 수들은 선택의 여지가 없었다.  
그러면 예외 처리가 필요하겠다. 예외처리는 다양하게 할 수 있다.  
그 중 내가 찾은 방법은 2가지이다.

1.   양 끝의 수일 때는 최대값이 아닌 그냥 그 수를 선택해 더하게 하는 방법
2.   2차원 배열의 인덱스를 1씩 크게 만들어 0과 비교하면 자연적으로 하나의 값을 선택하게 하는 방법 

나는 2번 방법으로 풀었다. 아래의 표를 보자.  
노란색은 현재 큰 값을 선택하는 수이다.  
파란색은 선택받아야 하는 대각선의 두 수이다.  
0으로 0번 인덱스가 채워져 있기 때문에 자연적으로 7을 선택하게 된다.  
마찬가지로 1번 라인인 7도 위에 0밖에 없기 때문에 0을 더하면 자기 자신이 된다.  
 

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@bTa7Dh/btqARhHfQXs/RPJHKK6uljR1v51x0SizCk/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

이런 방식으로 반복문을 돌면 최대 누적값이 가장 아래 라인에 저장되고 이 값들 중 최대값을 구하면 된다.  
아래는 이를 작성한 코드이다.

# 성공 코드

    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
    
            int nums[][] = new int[n+1][n+1];
            for (int k = 1; k &lt;= n; k++) {
                for (int i = 1; i &lt;= k; i++) {
                    nums[k][i] = sc.nextInt();    
                }
            }
            sc.close();
    
            for (int l = 1; l &lt;= n; l++) {
                for (int j = 1; j &lt;= l; j++){
                    nums[l][j] += Math.max(nums[l-1][j], nums[l-1][j-1]);
                }
            }
    
            int max = 0;
            for (int i = 0; i &lt;= n; i++) {
                max = (nums[n][i] &gt; max) ? nums[n][i] : max;
            }
    
            System.out.print(max);
        }
    }