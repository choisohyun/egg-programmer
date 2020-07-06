---
title: "[BOJ][Java] 9663번 - N-Queen"
tags: [undefined]
date: 2019-12-29 01:08:21
path: blog/BOJJava-9663번-N-Queen
cover: ./no-image.png
excerpt: BOJJava-9663번-N-Queen
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/112
# 문제

[백준 9663번 문제: N-Queen](https://www.acmicpc.net/problem/9663)

# 문제 설명

*   
    
    한줄에 하나의 Queen만 존재 가능하므로 1차원 배열 선언
    
    
*   
    
    N+1크기의 배열을 선언한 후 재귀로 경우의 수를 구한다.
    
    
*   
    
    int array는 선언 시 0으로 초기화되므로 배열 요소가 1부터 시작하도록 한다.
    
    >  
>     array를 0부터 채웠을 때 문제점은 아래의 표를 보면 알 수 있다.  
>     0으로 시작했을 때 디버깅한 것을 보면 값이 중복되어 들어간다. `` arr[i] == arr[row] `` 조건에 걸려 `` false ``가 리턴되었기 때문이다.  
>     ![](https://i.imgur.com/ZkAzELH.png)
>     
*   
    
    조건 1. 같은 열에 있거나
    
    
*   
    
    조건 2. 대각선에 위치할 경우를 제외하고 찾는다.
    
    
    
    *   
        
        대각선에 위치하기 위한 조건
        
        >  
>         (기준 x좌표 값 - 대각선 x좌표값)의 절대값 == (기준 y좌표 값 - 대각선 y좌표값)의 절대값  
>         x의 좌표값끼리의 절대값과  
>         y의 좌표값끼리의 절대값이  
>         같아야 한다  
>         ![](https://i.imgur.com/yN1AQIz.png)
>         
    
    
    
*   
    
    참고: [\[Java\] 백준9663 N-Queen](https://javannspring.tistory.com/179)
    
    

# 성공 코드

    
    import java.util.Scanner;
    
    public class Main {  
    static int cnt = 0;
    
    
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int n = sc.nextInt();
          sc.close();
          /* 
           * 한줄에 하나의 Queen만 존재 가능하므로 1차원 배열 선언
           * N+1크기의 배열을 선언한 후 재귀로 경우의 수를 구한다.
           * int array는 선언 시 0으로 초기화되므로 배열 요소가 1부터 시작하도록 한다.
           */        
          for (int i = 1; i &lt;= n; i++) {
              int array[] = new int[n+1];
    
              array[1] = i;
              nQueen(array, 1);
          }
          System.out.println(cnt);
      }
    
      public static void nQueen(int array[], int row) {
    
          if (row == array.length-1) {
              cnt++;
          }
          else {
              for (int i = 1; i &lt; array.length; i++) {
                  array[row+1] = i;
    
                  if (isPossible(array, row+1)) 
                      nQueen(array, row+1);
              }
          }
      }
    
      /*    
       * 조건 1. 같은 열에 있거나
       * 조건 2. 대각선에 위치할 경우를 제외하고 찾는다.
       */
      public static boolean isPossible(int[] arr, int row) {
          for (int i = 1; i &lt; row; i++) {
              if (arr[i] == arr[row] ||
                      Math.abs(i-row) == Math.abs(arr[i]-arr[row])) 
                  return false;
          }
    
          return true;
      }
    
    
    }