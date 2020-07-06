---
title: "[BOJ][Java] 11650번 - 좌표 정렬하기"
tags: [undefined]
date: 2019-12-08 17:28:10
path: blog/BOJJava-11650번-좌표-정렬하기
cover: ./no-image.png
excerpt: BOJJava-11650번-좌표-정렬하기
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/86
# 문제

>  
> 좌표를 정렬하는 문제
> 

*   [백준 11650번: 좌표 정렬하기](https://www.acmicpc.net/problem/11650)

# 코드 설명

*   참고:  
    [\[Java\] == equals() compareTo() 차이와 사용법](https://gmlwjd9405.github.io/2018/10/06/java-==-and-equals.html)  
    [\[Java\] Comparable와 Comparator의 차이와 사용법](https://gmlwjd9405.github.io/2018/09/06/java-comparable-and-comparator.html)  
    [자바 Comparable, Comparator 하면 '정렬'을 떠올려라, 자바 객체 정렬의 '기준'을 정하는 방법! (비교랑 다릅니다!)](https://jeong-pro.tistory.com/173)  
    [Comparator, Comparable Interfaces](https://defacto-standard.tistory.com/90)

*   이해가 쉽지 않아서 블로그들을 많이 참고했다.
*   한 마디로 정리하면 이번 문제에서는 정렬 기준이 2개일 때 사용하는 것이 `` Comparator ``, 기본적인 정렬 기준을 사용하는것이 `` Comparable ``인 것이다.

# 성공 코드

    import java.util.Arrays;
    import java.util.Comparator;
    import java.util.Scanner;
    
    public class BOJ11650 {
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
            int n = s.nextInt();
            int loc[][] = new int[n][2];
    
            for (int i = 0; i &lt; n; i++) {
                loc[i][0] = s.nextInt();
                loc[i][1] = s.nextInt();
            }
            s.close();
            solution(loc);
        }
    
        public static void solution(int[][] loc) {
            Arrays.sort(loc, new Comparator&lt;int[]&gt;() {
                @Override
                public int compare(int[] o1, int[] o2) {
                    if (o1[0] == o2[0])
                        return o1[1] - o2[1];
                    return o1[0] - o2[0];
                }
            });
            for (int i = 0; i &lt; loc.length; i++) {
                System.out.println(loc[i][0] + " " + loc[i][1]);
            }        
        }
    }