---
title: "[React] props와 state의 차이"
tags: [undefined]
date: 2020-04-20 21:56:50
path: blog/React-props와-state의-차이
cover: ./no-image.png
excerpt: React-props와-state의-차이
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/224
>  
> 리액트는 컴포넌트 단위로 나눠서 작업하기에 최적화되어 있다.  
> 그래서 작은 컴포넌트 단위로 잘개 쪼개서 작업하고 또 합쳐서 큰 컴포넌트에 들어갈 수도 있다. 부모와 자식이 존재할 수 있다는 것이다.
> 

이런 사전 지식을 알고 나서 props와 state를 인지하게 되면 둘의 차이를 보다 쉽게 알 수 있다.

*   참고: 본 블로그의 리액트 사용 예시는 모두 리액트 훅스(함수형)를 사용하고 있습니다. 틀린 내용이 있다면 댓글로 피드백 부탁드립니다 :)

## props란?

*   자식 컴포넌트에서 상속받아 쓰는 `` 부모 컴포넌트의 상태 값 ``
*   사용 예시

        function Welcome(props) {  // 자식 컴포넌트
          return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
        }
    
        function App() {  // 부모 컴포넌트
          return (
            &lt;div&gt;
              &lt;Welcome name="Sara" /&gt;
              &lt;Welcome name="Cahal" /&gt;
              &lt;Welcome name="Edite" /&gt;
            &lt;/div&gt;
          );
        }
    
        ReactDOM.render(  
          &lt;App /&gt;,  // 부모 컴포넌트를 렌더링 
          document.getElementById('root')
        );

## state란?

*   현재 컴포넌트에서 변하는 상태 값
*   사용 예시

        import React, { useState } from 'react';
    
        function Example() {
          // Example 컴포넌트에서 변하는 상태 값인 count,
          // count를 업데이트 시켜주는 setCount
          const [count, setCount] = useState(0);
    
          return (
            &lt;div&gt;
              &lt;p&gt;You clicked {count} times&lt;/p&gt;
              &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Click me
              &lt;/button&gt;
            &lt;/div&gt;
          );
        }

## 사용 예시 참조

*   [리액트 공식 홈페이지](https://reactjs.org/docs/components-and-props.html)