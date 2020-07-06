---
title: "[BOJ][Java] 10989번 - 수 정렬하기 3"
tags: [undefined]
date: 2019-12-01 22:16:25
path: blog/BOJJava-10989번-수-정렬하기-3
cover: ./no-image.png
excerpt: BOJJava-10989번-수-정렬하기-3
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/74
# 문제

>  
> __수의 범위가 작다면__ 카운팅 정렬을 사용하여 더욱 빠르게 정렬할 수 있습니다.
> 
>  
> [10989번 - 수 정렬하기 3](https://www.acmicpc.net/problem/10989)  
> 입력된 숫자들을 오름차순 정렬시키는 문제  
> 카운팅정렬 사용하기
> 

# 문제 설명

*   Counting Sort란? 중복되는 숫자의 개수를 세어 정렬하는 방식>  
>     수의 범위가 커질수록 시간복잡도가 커져 __비효율적__임
>     
>     
>     1.   정렬할 배열에서 최댓값을 구함
>     2.   0부터 최댓값까지 각 숫자가 몇 번 등장하는지 카운팅함
>     3.   카운팅을 바탕으로 누적카운팅을 함
>     4.   누적카운팅은 곧 정렬될 배열의 인덱스가 됨. 뒤에서부터 차례대로 인덱스 값을 계산해 정렬하면 완성  
>         참고 - [Counting Sort : 계수 정렬](https://bowbowbow.tistory.com/8)  
>         [Counting Sort 시뮬레이션 하기](http://www.cs.miami.edu/home/burt/learning/Csc517.091/workbook/countingsort.html)
>     
>     
>     

# 성공 코드

    import java.io.BufferedReader;
    import java.io.BufferedWriter;
    import java.io.InputStreamReader;
    import java.io.OutputStreamWriter;
    import java.io.IOException;
    
    public class Main {
    
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));
    
            int N = Integer.parseInt(br.readLine());
            int[] arr = new int[N];
    
            for (int i = 0; i &lt; N; i++)
                arr[i] = Integer.parseInt(br.readLine());
            int []ans = countingSort(arr);
    
            // 출력
            for (int n : ans)
                bw.write(n + "\n");
            br.close();
            bw.close();
        }
    
        public static int[] countingSort(int[] nums) {
            // 최댓값 찾기
            int max = 0;
            for (int i = 0; i &lt; nums.length; i++) 
                if (max &lt; nums[i])
                    max = nums[i];
    
            int[] ans = new int[nums.length];    //정렬 배열
            int[] cnt = new int[max+1];            //원수 개수 저장 배열
    
            // 각 원소 개수 저장
            for (int i :  nums) cnt[i]++;
    
            // 원소 누적 개수 저장
            for (int i = 1; i &lt; cnt.length; i++) 
                cnt[i] += cnt[i-1];
    
            // cnt 배열을 이용한 정렬
            for (int i = nums.length-1; i &gt;= 0; i--)
                ans[--cnt[ nums[i] ]] = nums[i];
    
            return ans;
        }
    }