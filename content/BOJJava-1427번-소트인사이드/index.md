---
title: "[BOJ][Java] 1427번 - 소트인사이드"
tags: [undefined]
date: 2019-12-08 16:02:04
path: blog/BOJJava-1427번-소트인사이드
cover: ./no-image.png
excerpt: BOJJava-1427번-소트인사이드
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/85
# 문제

>  
> 숫자를 정렬하는 문제
> 

*   [백준 1427번: 소트인사이드](https://www.acmicpc.net/problem/1427)

# 코드 설명

*   입력값을 문자열로 한글자씩 배열에 넣음
*   이걸 다시 한글자씩 숫자로 바꿔서 저장해줌
*   `` Arrays.sort() ``를 이용해 오름차순 정렬
*   원하는 출력값은 내림차순한 숫자이므로 뒤에서부터 차례대로 출력해줌

# 성공 코드

    import java.util.Arrays;
    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
            String[] n = s.next().split("");
            s.close();
    
            solution(n);
        }
    
        public static void solution(String[] n) {
            int[] toInt = new int[n.length];
            int idx = 0;
    
            for (String num : n) {
                toInt[idx] = Integer.parseInt(num);
                idx++;
            }
            Arrays.sort(toInt);
            for (int i = toInt.length-1; i &gt;= 0; i--) {
                System.out.print(toInt[i]);
            }
        }
    }