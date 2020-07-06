---
title: "[LeetCode] 36번 문제 - Valid Sudoku"
tags: [undefined]
date: 2020-05-14 16:37:22
path: blog/LeetCode-36번-문제-Valid-Sudoku
cover: ./no-image.png
excerpt: LeetCode-36번-문제-Valid-Sudoku
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/239
# 문제

[36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/submissions/)

# 문제 설명

>  
> 수도쿠가 유효한지 확인하는 문제 
> 

수도쿠가 유효한지 확인하려면 `` 행, 열, 3*3 묶음 ``에 모두 중복되는 숫자가 없어야 한다.  
나는 이를 처리하기 위해 `` . ``을 제외한 숫자들을 `` Set ``에 넣어 개수를 비교하는 `` isValidColumn `` 함수를 만들었다.  
`` isValidColumn `` 는 9개의 한 묶음을 비교하기 위한 것이기 때문에 배열 9개 묶음이 있어야 한다.  
행은 원래 그대로 비교하면 되기 때문에 그대로 비교하고, 열과 3\*3은 배열 묶음으로 만들기 위해 `` rotateMatrix ``, `` extractMatrix `` 함수를 만들었다.  
마지막으로 모든 결과가 true이면 true이도록 `` every `` 메소드를 사용했다. 

# 성공 코드

<pre><code class="language-js">const isValidSudoku = (board) =&gt; {
    return board.every(column =&gt; isValidColumn(column))
        &amp;&amp; rotateMatrix(board).every(column =&gt; isValidColumn(column))
        &amp;&amp; extractMatrix(board).every(column =&gt; isValidColumn(column))  
};

const isValidColumn = (column) =&gt; {
    const onlyNums = column.filter(num =&gt; num !== ".");
    const set = new Set(onlyNums);
    return set.size === onlyNums.length;
};

const rotateMatrix = matrix =&gt; (
    matrix[0].map((column, index) =&gt; (
    matrix.map(row =&gt; row[index])
  ))
);

const extractMatrix = matrix =&gt; {
  const squares = [
    [], [], [], [], [], [], [], [], []
  ];

  matrix.forEach((row, rowIndex) =&gt; {
    row.forEach((cell, columnIndex) =&gt; {
      const squareIndex = (Math.floor(rowIndex / 3) * 3) + Math.floor(columnIndex / 3);

      squares[squareIndex].push(cell);
    })
  });

  return squares;
}</code></pre>