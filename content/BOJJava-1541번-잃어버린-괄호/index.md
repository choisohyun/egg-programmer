---
title: "[BOJ][Java] 1541번 - 잃어버린 괄호"
tags: [undefined]
date: 2020-01-19 13:07:06
path: blog/BOJJava-1541번-잃어버린-괄호
cover: ./no-image.png
excerpt: BOJJava-1541번-잃어버린-괄호
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/135
# 문제

[백준 1541번 문제: 잃어버린 괄호](https://www.acmicpc.net/problem/1541)

# 문제 설명

>  
> 식의 값을 가능한 한 작게 만드는 문제
> 

`` - ``를 기준으로 - 연산을 하는데, 이 때 연산하는 값은 `` + ``연산이 된 값들이다.  
그래서 처음에 -로 나눠서 배열에 넣고 나머지 +로 연결된 문자열은 `` plus `` 리스트에 +로 나눠서 정수형으로 변형해서 담아준다.  
단, 배열의 첫 번째 값은 무조건 더해 줘야 해서 예외 처리를 해 줬다.  
배열의 첫 번째 값이 아니면 빼주면 된다. 

# 성공 코드

    import java.util.Arrays;
    import java.util.List;
    import java.util.Scanner;
    import java.util.stream.Collectors;
    
    public class Main {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            String input[] = sc.next().split("-");
            sc.close();
    
            System.out.print(calculator(input));
        }
    
        public static int calculator(String[] input) {
            int result = 0;
    
            for (int number = 0; number &lt; input.length; number++) {
                List&lt;Integer&gt; plus = Arrays.stream(input[number].split("\\+"))
                        .map(Integer::parseInt)
                        .collect(Collectors.toList());
    
                if (number != 0) {
                    result -= plus.stream().reduce(0, Integer::sum);
                }
                else {
                    result += plus.stream().reduce(0, Integer::sum);
                }
            }
            return result;
        }
    
    }