---
title: "[BOJ][Java] 2108번 - 통계학"
tags: [undefined]
date: 2019-12-08 23:02:31
path: blog/BOJJava-2108번-통계학
cover: ./no-image.png
excerpt: BOJJava-2108번-통계학
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/88
# 문제

*   [백준 2108번: 통계학](https://www.acmicpc.net/problem/2108)
*   산술평균, 중앙값, 최빈값, 범위를 구하는 문제

# 풀이 설명

*   최빈값을 구하는 조건이 까다로워서 두가지 방법으로 풀었다.
*   첫번째 방법은 필요 이상으로 복잡해서 시간제한에도 아슬아슬하게 맞았다.  
    1) 최빈값 구할 때 HqshMap, LinkedList, Comparator 사용  
    2) 최빈값 구할 때 ArrayList 사용 (참고: <https://qlyh8.tistory.com/139>)

# 성공 코드

1) 최빈값 구할 때 HqshMap, LinkedList, Comparator 사용

    public class Main {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader((System.in))); 
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));
            int n = Integer.parseInt(br.readLine());
            int[] nums = new int[n];
    
            for (int i = 0; i &lt; n; i++) {
                nums[i] = Integer.parseInt(br.readLine());
            }
            br.close();
            Arrays.sort(nums);
    
            bw.write(mean(nums) + "\n");
            bw.write(median(nums) + "\n");
            bw.write(mode(nums, n) + "\n");
            bw.write(diff(nums) + "\n");
            bw.close();
        }
    
        public static int mean(int[] nums) {
            double sum = 0.0;
            for (int num : nums)
                sum += num;
    
            return (int) Math.round(sum / nums.length);
        }
    
        public static int median(int[] nums) {
            return nums[ nums.length / 2 ];
        }
    
        public static int mode(int[] nums, int n) {
            boolean visited[] = new boolean[n];
            Arrays.fill(visited, false);
    
            // 입력숫자, 숫자의 개수
            HashMap&lt;Integer, Integer&gt; modes = new HashMap&lt;&gt;();
    
            if (n == 1) return nums[0];
            else {
                for (int i = 0; i &lt; n; i++) {
                    if (visited[i] == true)
                        continue;
    
                    int cnt = 1;
                    for (int j = i+1; j &lt; n; j++) {
                        if (nums[i] == nums[j]) {
                            visited[j] = true;
                            cnt++;
                        }
                    }
                    modes.put(nums[i], cnt);
                }
                List&lt;Map.Entry&lt;Integer, Integer&gt;&gt; answer = new LinkedList&lt;&gt;(modes.entrySet());
    
                Collections.sort(answer, new Comparator&lt;Map.Entry&lt;Integer, Integer&gt;&gt;() {
                    @Override
                    //key: 입력한 숫자 값들
                    //value: key 값들의 개수
                    public int compare(Entry&lt;Integer, Integer&gt; arg0, Entry&lt;Integer, Integer&gt; arg1) {
                        if (arg0.getValue() == arg1.getValue())
                            return arg0.getKey() - arg1.getKey();
                        return arg1.getValue() - arg0.getValue();
                    }
                });
    
                if (answer.get(0).getValue() == answer.get(1).getValue())
                    return answer.get(1).getKey();
                else
                    return answer.get(0).getKey();
            }
        }
    
        public static int diff(int[] nums) {
            // 최댓값, 최솟값 찾기
            int max = -4001;
            int min = 4001;
    
            for (int i = 0; i &lt; nums.length; i++) {
                if (max &lt; nums[i]) max = nums[i];
                if (min &gt; nums[i]) min = nums[i];
            }
            return max - min;
        }
    }

2) 최빈값 구할 때 ArrayList 사용

    public class Main {
    
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader((System.in))); 
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter((System.out)));
            int n = Integer.parseInt(br.readLine());
            int[] nums = new int[n];
             int visited[] = new int[8001];
           double sum = 0.0;
    
            for (int i = 0; i &lt; n; i++) {
                nums[i] = Integer.parseInt(br.readLine());
                visited[nums[i] + 4000]++;
                sum += nums[i];                                                                                                                                                                                                                  
            }
            br.close();
            Arrays.sort(nums);
    
            bw.write((int) Math.round(sum/n) + "\n");
            bw.write(nums[n/2] + "\n");
            if (n == 1) 
                bw.write(nums[0] + "\n");
            else 
                bw.write(mode(visited) + "\n");
            bw.write(nums[n-1] - nums[0] + "\n");
            bw.close();
        }
    
        public static int mode(int[] visited) {
            ArrayList&lt;Integer&gt; modes = new ArrayList&lt;&gt;();        
            int maxMode = 0;
    
            for (int i = 0; i &lt;= 8000; i++) {
                if (visited[maxMode] &lt; visited[i]) {
                    maxMode = i;
                    modes.clear();
                }
                else if (visited[i] != 0 &amp;&amp; visited[i] == visited[maxMode]) {
                    modes.add(i - 4000);
                }
            }
            if (modes.size() != 0) 
                return modes.get(0);
            else 
                return maxMode - 4000;
        }
    }