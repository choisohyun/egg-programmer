---
title: "[BOJ][Javascript/nodejs] 1991번 - 트리 순회"
tags: [undefined]
date: 2020-01-29 22:20:40
path: blog/BOJJavascriptnodejs-1991번-트리-순회
cover: ./no-image.png
excerpt: BOJJavascriptnodejs-1991번-트리-순회
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/149
# 문제

[백준 1991번 문제: 트리 순회](https://www.acmicpc.net/problem/1991)

## 알고리즘 문제를 풀 때 `` javascript ``에서 주의해야 할 사항들

1.   입력받을 때 `` prompt ``나 `` setPrompt `` 를 사용하면 __틀렸습니다__가 뜬다.
2.   `` readline ``을 통해 입력받으면 줄이 나뉘어져 있어도 무한정으로 계속 입력을 받는다.

*   예로, 입력이 8줄에서 끝난다면, 8줄 입력받은 후의 지점에서 `` close ``를 꼭 시켜줘야 한다.
*   그래서 `` while ``문을 쓰지 않아도 된다.

# 문제 설명

>  
> 이진트리의 `` 루트, 왼쪽, 오른쪽 `` 값이 계속 들어오는 값을 트리로 만들고, 트리를 `` 전위 순회, 중위 순회, 후위 순회 ``를 한 결과를 한 줄에 하나씩 출력하는 문제
> 

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@dkaelx/btqBAU4Rmnn/yKt4GDDX9SMOH2UVaUpyN0/img.gif"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

*   전위 순회(preorder) : (root -&gt; left -&gt; right) `` 1-&gt;2-&gt;4-&gt;5-&gt;3 ``
*   중위 순회(inorder) : (left -&gt; root -&gt; right) `` 4-&gt;2-&gt;5-&gt;1-&gt;3 ``
*   후위 순회(postorder) : (left -&gt; right -&gt; root) `` 4-&gt;5-&gt;2-&gt;3-&gt;1 ``

위와 같은 규칙을 가지고 각각의 순회를 하는 기능을 만들면 된다.

## 풀이

1.   `` value(root) ``, `` leftNode ``, `` rightNode ``를 생성자로 가지고 있는 `` Node `` 클래스를 만든다.
2.   `` TreeTraversal `` 클래스에는 `` insert, search, preorder, inorder, postorder `` 메소드가 있다.
3.   입력한 값들은 `` TreeTraversal의 insert `` 기능을 통해 Node에 추가된다.

*   여기서 하나의 노드는 계속해서 왼쪽과 오른쪽에 자식을 가지고 있어야 하므로 `` Node `` 클래스에서 `` leftNode와 rightNode ``의 초기값은`` null ``로 설정하였다.
*   입력할 때 `` data(root), left, right `` 값이 한 번에 한 줄에 들어와서 한 번에 넣는 것을 구현하려 했지만 null인 프로퍼티를 조회하지 말라는 에러가 났다.
*   그래서 root, left, right 순으로 차례대로 저장될 수 있도록 했다.
*   여기서 insert 기능은 처음에 root가 `` null ``일 때만 들어가게 했고, root가 null이 아닐 때는 `` search ``를 호출하도록 했다.

<ol start="3">
<li><code>search</code> 메소드를 통해 재귀적으로 부모 노드 값을 찾아 트리에 값을 추가한다.</li>
</ol>

*   여기서 많이 헤맸다.
*   재귀적으로 한다는 말은 root Node인 A부터 왼쪽과 오른쪽 노드를 계속해서 살펴 보겠다는 말이다.  
    (이 부분에서 트리가 더 커졌을 때 시간 복잡도가 커질 것 같다.)  
    (그래서 노드의 개수가 26개를 넘지 못한다는 조건이 문제에 주어진 것 같다.)
*   아무튼 그래서 처음부터 훑으며 부모 노드를 찾는다. 자기 노드의 직전 노드만 찾을 수 없는 이유는 자식 노드가 2개이기 때문에 바로 직전의 노드는 현재 노드의 부모 노드가 아닐 가능성이 있다.

    A B C
    B D .
    C E F

*   위는 예제 테스트 케이스 중 일부인데, 2번 노드는 바로 직전 노드에 B가 있어 부모 노드를 찾을 수 있지만, 3번 노드는 1번 노드에 부모가 있다.

<ol start="4">
<li>각각의 순회 순서로 재귀적으로 순회를 돈다.</li>
</ol>

*   값들은 `` result `` 생성자에 쌓인다.
*   순회를 다 돌면 `` console.log ``로 값을 출력한다.
*   `` result ``를 다시 빈 문자열로 만들어 준다. (이렇게 안 하면 모든 순회 값이 쌓이게 된다.)
*   class 안의 값을 바꾸는 게 좋아 보이지는 않아서 리팩토링을 해 봐야겠다.

## 참고

*   [Tree Traversals](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
*   [\[JAVA\]트리 순회](https://m.blog.naver.com/PostView.nhn?blogId=occidere&amp;logNo=220899936160)

# 성공 코드

    const readline = require("readline");
    
    const run = () =&gt; {
      let count = [];
      const treeTraversal = new TreeTraversal();
    
      const r = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      r.on("line", line =&gt; {
        const splitLine = line.split(" ");
        count.push(splitLine);
        const [data, left, right] = splitLine;
        if (splitLine.length === 3) {
          treeTraversal.insert(data, left, right);
        }
    
        if (count.length === Number(count[0]) + 1) {
          treeTraversal.preorder();
          console.log(treeTraversal.result);
          treeTraversal.result = "";
    
          treeTraversal.inorder();
          console.log(treeTraversal.result);
          treeTraversal.result = "";
    
          treeTraversal.postorder();
          console.log(treeTraversal.result);
          treeTraversal.result = "";
    
          r.close();
        }
      });
    
      r.on("close", () =&gt; {
        process.exit();
      });
    };
    
    class Node {
      constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
      }
    }
    
    class TreeTraversal {
      constructor() {
        this.root = null;
        this.result = "";
      }
    
      insert(data, left, right) {
        if (this.root === null) {
          if (data !== ".") this.root = new Node(data);
          if (left !== ".") this.root.leftNode = new Node(left);
          if (right !== ".") this.root.rightNode = new Node(right);
        } else {
          this.search(this.root, data, left, right);
        }
      }
    
      search(root, data, left, right) {
        if (root === null) {
          return;
        } else if (root.value === data) {
          if (left !== ".") root.leftNode = new Node(left);
          if (right !== ".") root.rightNode = new Node(right);
        } else {
          this.search(root.leftNode, data, left, right);
          this.search(root.rightNode, data, left, right);
        }
      }
    
      preorder(root = this.root) {
        this.result += root.value;
        if (root.leftNode !== null) this.preorder(root.leftNode);
        if (root.rightNode !== null) this.preorder(root.rightNode);
      }
    
      inorder(root = this.root) {
        if (root.leftNode !== null) this.inorder(root.leftNode);
        this.result += root.value;
        if (root.rightNode !== null) this.inorder(root.rightNode);
      }
    
      postorder(root = this.root) {
        if (root.leftNode !== null) this.postorder(root.leftNode);
        if (root.rightNode !== null) this.postorder(root.rightNode);
        this.result += root.value;
      }
    }
    
    run();