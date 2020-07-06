---
title: "[BOJ][Java] 1181번 - 단어 정렬"
tags: [undefined]
date: 2019-12-20 19:56:30
path: blog/BOJJava-1181번-단어-정렬
cover: ./no-image.png
excerpt: BOJJava-1181번-단어-정렬
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/103
# 문제

[백준 1181번 문제: 단어 정렬](https://www.acmicpc.net/problem/1181)

# 문제 설명

1.   길이가 짧은 것부터
2.   길이가 같으면 사전 순으로  
    정렬하고, 같은 단어는 한 번만 출력하는 문제

# 코드 풀이

1) `` HashMap ``에 단어들을 담는다. (words)  
2) `` LinkedList ``에 HashMap의 메소드 중 하나인 entrySet을 사용해 key와 value를 모두 LinkedList로 넣는다. 여기서 entrySet에 의해 중복값이 걸러진다.  
 - 여기서 LinkedList를 사용하는 이유는 HashMap은 순서가 보장되지 않기 때문에 순서를 유지시키기 위해서이다.  
3) Collections.sort에서 Comparator를 사용해 우선순위에 따라 다르게 정렬되도록 한다.  
 - 여기서 key는 문자열, value는 문자열의 길이이다.  
 - 따라서 value가 우선순위로 정렬되고, value가 같을 때 사전순으로 정렬되를 되도록 if문을 사용했다.  
4) 정렬된 LinkedList의 key 값을 차례대로 출력한다.

# 성공 코드

    import java.util.Collections;
    import java.util.Comparator;
    import java.util.HashMap;
    import java.util.LinkedList;
    import java.util.List;
    import java.util.Map;
    import java.util.Map.Entry;
    import java.util.Scanner;
    
    public class BOJ1181 {
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            HashMap&lt;String, Integer&gt; words = new HashMap&lt;&gt;();
    
            for (int i = 0; i &lt; n; i++) {
                String str = sc.next();
                words.put(str, str.length());
            }
            sc.close();
            List&lt;Map.Entry&lt;String, Integer&gt;&gt; answer = new LinkedList&lt;&gt;(words.entrySet());
    
            Collections.sort(answer, new Comparator&lt;Map.Entry&lt;String, Integer&gt;&gt;() {
    
                @Override
                public int compare(Entry&lt;String, Integer&gt; arg0, Entry&lt;String, Integer&gt; arg1) {
                    if (arg0.getValue() == arg1.getValue())
                        return arg0.getKey().compareTo(arg1.getKey());
                    return arg0.getValue() - arg1.getValue();
                }
    
            });
            for (int i = 0; i &lt; answer.size(); i++)
                System.out.println(answer.get(i).getKey());
        }
    }