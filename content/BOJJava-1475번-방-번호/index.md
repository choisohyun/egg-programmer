---
title: "[BOJ][Java] 1475번 - 방 번호"
tags: [undefined]
date: 2019-12-20 15:49:25
path: blog/BOJJava-1475번-방-번호
cover: ./no-image.png
excerpt: BOJJava-1475번-방-번호
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/97
# 문제

[백준 1475번 문제: 방 번호](https://www.acmicpc.net/problem/1475)

# 문제 설명

방 번호를 카드로 붙이려고 할 때 0부터 9까지 카드 세트가 몇 세트 필요할지 계산하는 문제  
6과 9는 서로 뒤집어서 사용할 수 있기 때문에 입력할 때부터 9를 6이라고 대체시켰다. 따라서 9가 입력되도 6이고, 6은 한 세트로 2번까지 사용할 수 있다.  
0부터 9까지인데, 9는 6이랑 같으므로 크기가 9인 배열을 만들어 번호마다 카운트를 해 준다.  
여기서 6번 카드만 2번까지 사용할 수 있으므로 6번 카드가 홀수번 등장하면 나누기 2 한 값에 1을 추가해 세트를 올바르게 추가할 수 있도록 한다.  
그리고 마지막에 정렬을 하는데, 정렬을 하는 이유는 가장 큰 값이 세트의 개수이기 때문이다.  
나는 오름차순을 시켜서 제일 마지막 인덱스의 값을 출력하도록 했다.

# 성공 코드

    import java.util.Arrays;
    import java.util.Scanner;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            String[] n = sc.next().replaceAll("9","6").split("");
            sc.close();
    
            int[] set = new int[9];
            for (String s : n) 
                set[Integer.parseInt(s)]++;        
    
            if (set[6] % 2 != 0) set[6] = set[6] / 2 + 1;
            else set[6] /= 2;
    
            Arrays.sort(set);
            System.out.print(set[8]);
        }
    }