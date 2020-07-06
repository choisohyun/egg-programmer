---
title: "[BOJ][Java] 2751번 - 수 정렬하기 2"
tags: [undefined]
date: 2019-12-01 21:53:05
path: blog/BOJJava-2751번-수-정렬하기-2-1
cover: ./no-image.png
excerpt: BOJJava-2751번-수-정렬하기-2-1
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/73
# 문제

>  
> 시간 복잡도가 O(nlogn)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 병합 정렬, 힙 정렬 등이 있지만, 어려운 알고리즘이므로 지금은 언어에 내장된 정렬 함수를 쓰는 것을 추천드립니다.
> 
>  
> [2751번 - 수 정렬하기 2 문제 링크](https://www.acmicpc.net/problem/2751)  
> 입력된 숫자들을 오름차순 정렬시키는 문제(단, 시간복잡도가 O(nlogn)여야 함)
> 

# 문제 설명

*   
    
    [2750번 - 수 정렬하기 문제](https://www.acmicpc.net/problem/2750)와 같은 문제지만 시간복잡도 제한이 늘었다.
    
    
*   
    
    2750번 문제를 풀 때 방식인 bubble sort나 Arrays.sort를 사용한다면 __시간 초과__가 뜨게 될 수 있다.
    
    
*   
    
    \*\*기본적으로 시간복잡도를 줄여야 하는 문제에서는 Scanner를 이용한 입출력보다는 Buffer를 이용한 입출력을 쓰는 것이 좋다.
    
    
*   
    
    시간복잡도 관련 참고글 - [각 언어별 input method 비교](https://algospot.com/forum/read/2496/)
    
    
    
    문제 풀이 방법
    
    

1.   
    
    Priority Queue 사용
    
    
    
    *   우선순위 큐란? 일반적인 큐와 같은 FIFO가 아닌 키값의 크기에 의해 in, out이 결정되는 큐
    *   heap아란? 우선순위 큐의 한 종류, 완전 이진트리, mqx heap, min heap
    *   참고 - [히프(heap)와 우선순위 큐(priority queue)](http://blog.naver.com/PostView.nhn?blogId=qbxlvnf11&amp;logNo=221371083949&amp;parentCategoryNo=&amp;categoryNo=21&amp;viewDate=&amp;isShowPopularPosts=true&amp;from=search)
    
    
    
2.   
    
    Merge Sort 사용
    
    
    
    *   Merge Sort란? 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법
    *   분할 정복 알고리즘의 하나, 안정 정렬에 속함
    *   참고 - [\[알고리즘\] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
    
    
    
3.   
    
    Quick sort 사용
    
    
    
    *   Quick Sort란? 하나의 리스트를 피벗(pivot)을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법
    *   분할 정복 알고리즘의 하나, 매우 빠른 수행 속도
    *   참고 - [\[알고리즘\] 퀵 정렬(quick sort)이란](https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html)
    
    
    
4.   
    
    TreeSet 사용
    
    
    
    *   TreeSet이란? 이진검색트리 형태로 데이터를 저장하는 컬랙션 클래스
    *   중복을 허용하지 않기 때문에 중복이 있는 정렬에서는 사용할 수 없다.
    *   참고 - [자바 TreeSet](https://m.blog.naver.com/PostView.nhn?blogId=pgh7092&amp;logNo=221079158610&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F)
    
    
    
5.   
    
    Collections.sort 사용
    
    
    
    *   입출력을 모두 Buffer로 해줌
    
    
    

# 성공 코드

1.   Priority Queue, Quick sort, Merge Sort 사용

*   [백준 \#2751 / 수 정렬하기 2(우선순위 큐, Merge, Quick Sort)](https://do-rang.tistory.com/61) 참고

<ol start="2">
<li><p>TreeSet 사용</p>
<pre><code class="language-java">import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.TreeSet;
import java.io.IOException;

public class Main {  
    public static void main(String\[\] args) throws IOException{  
    BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));  
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));  
    StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        TreeSet&lt;Integer&gt; ts = new TreeSet&lt;&gt;();

        for (int i = 0; i &lt; N; i++)
            ts.add(Integer.parseInt(br.readLine()));

        for (int i : ts)
            bw.write(i + "\n");

        br.close(); bw.close();
    }
}</code></pre>
</li>
<li><p>Collections.sort 사용 (입출력을 Buffered를 사용함)</p>
</li>
</ol>

<pre><code class="language-java">import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.ArrayList; 
import java.util.Collections;

public class Main{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));
        int n = Integer.parseInt(br.readLine());
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;Integer&gt;();

        for (int i = 0; i &lt; n; i++) 
            arr.add(Integer.parseInt(br.readLine()));

        Collections.sort(arr);

        for (int i = 0; i &lt; n; i++)
            bw.write(arr.get(i) + "\n");
        bw.flush(); bw.close();
    }
}</code></pre>