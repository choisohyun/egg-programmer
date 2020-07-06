---
title: "[BOJ][Java] 11651번 - 좌표 정렬하기 2"
tags: [undefined]
date: 2019-12-08 20:38:19
path: blog/BOJJava-11651번-좌표-정렬하기-2
cover: ./no-image.png
excerpt: BOJJava-11651번-좌표-정렬하기-2
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/87
# 문제

>  
> 좌표를 다른 순서로 정렬하는 문제
> 

*   [백준 11651번: 좌표 정렬하기 2](https://www.acmicpc.net/problem/11651)

# 코드 설명

*   [백준 11650번: 좌표 정렬하기](https://www.acmicpc.net/problem/11650)에서 정렬 우선순위만 바꿔주면 된다.
*   설명은 이전글 [\[BOJ\]\[Java\] 11650번 - 좌표 정렬하기](https://egg-programmer.tistory.com/86) 참조

# 성공 코드

    import java.util.Arrays;
    import java.util.Comparator;
    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
            int n = s.nextInt();
            int loc[][] = new int[n][2];
    
            for (int i = 0; i &lt; n; i++) {
                loc[i][0] = s.nextInt();
                loc[i][1] = s.nextInt();
            }
            s.close();
    
            Arrays.sort(loc, new Comparator&lt;int[]&gt;() {
                @Override
                public int compare(int[] o1, int[] o2) {
                    if (o1[1] == o2[1])
                        return o1[0] - o2[0];
                    return o1[1] - o2[1];
                }
            });
            for (int i = 0; i &lt; n; i++) {
                System.out.println(loc[i][0] + " " + loc[i][1]);
            }
        }
    }