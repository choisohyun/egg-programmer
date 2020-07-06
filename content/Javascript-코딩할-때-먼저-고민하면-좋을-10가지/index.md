---
title: "[Javascript] 코딩할 때 먼저 고민하면 좋을 10가지"
tags: [undefined]
date: 2020-03-29 15:22:05
path: blog/Javascript-코딩할-때-먼저-고민하면-좋을-10가지
cover: ./no-image.png
excerpt: Javascript-코딩할-때-먼저-고민하면-좋을-10가지
---
글이 정상적으로 보이지 않는다면 아래 주소로 접속해 주세요.
https://egg-programmer.tistory.com/213
>  
> 프로젝트를 진행하고 코드리뷰를 받으면서 공통적으로 여러 번 받거나 다수에게 남겨진 코드리뷰 피드백을 정리해 보았다.  
> 경험적으로 지키지 않아 좋지 않은 결과를 가져온 부분에 대해서도 작성했다.  
> 다음 프로젝트에서는 잊지 않고 적용해 보기 위함이다.
> 

## 1. env(환경변수) 활용하기

*   `` dotenv `` 라는 npm 라이브러리를 설치하고 프로젝트 루트에 .env 파일을 만들어 환경변수를 넣을 수 있다. 이를 활용하여 매직넘버를 줄이자.
*   env에는 __API 주소__ 등이 포함될 수 있다.

## 2. 커밋 단위를 작게작게 줄이자

*   함수 하나가 동작이 된다면 커밋을 날리는 습관을 들여 보자.
*   `` 함수 = 하나의 기능 ``으로 생각하고 함수가 완료되면 커밋을 보낸다면, 커밋 로그를 보다 자세하게 기록할 수 있다.

<div class="imageblock dual" style="text-align: center;"><table border="0" cellpadding="0" cellspacing="5" style="margin: 0 auto;"><tr><td><img src="http://cfs.tistory.com/attach/3366738/kage@mYtnJ/btqCZ0Q3gS7/3DyUEYsemapNn55i0fleSK/img.png"/><p class="cap1">data-origin-width="0" data-origin-height="0"</p></td><td><a href="https://egg-programmer.tistory.com/attachment/"><img alt="" src="https://t1.daumcdn.net/tistory_admin/assets/blog/20200615170305/blogs/image/extension/unknown.gif?_version_=20200615170305" style="vertical-align: middle;"> invalid-file</img></a></td></tr></table></div>

*   위의 이미지는 나의 일주일 동안 프로젝트 레포에 커밋한 수와 문자 수인데, 쓴 코드에 비해 커밋이 다소 작았다는 생각이 든다.

## 3. 커밋을 할 때는 오류가 없는 상태여야 한다.

*   다른 협업자가 내 오류 코드를 사용하게 될 수 있다. 오류가 있는지 없는지 확인해야 한다.
*   오류보다는 미구현이 낫다. (개인적인 생각)

## 4. 많이 쓰이는 기능은 함수화시켜서 util.js, common.js에 따로 저장해 두자

*   Vanilla JS로 코딩할 때 자신만의 라이브러리를 만들어 볼 수 있다.
*   util이나 common에 함수를 만들 때는 범용적인 역할을 할수록 다양한 프로젝트에서 활용할 수 있다.
*   기능이 작더라도 추상화된다면 좋다.

__util이나 common 에 따로 만들어 두면 유용한 기능__

*   `` querySelector ``
*   `` querySelectorAll ``
*   `` fetch 요청 함수 `` - 에러 처리까지 포함하여 만들면 더욱 좋다.
*   `` 타겟을 지정해 스타일을 변경하는 함수 ``
*   기타 프로젝트에서 여러 번 동일하게 작동하는 함수

## 5. 커밋 시 불필요한 코드 삭제하기

*   특히 `` console.log `` 나 `` 주석 `` 은 지우고 커밋한다.

## 6. 매직넘버 상수화시키기

*   `` 0, 3, "문자열" `` =&gt; 모두 매직넘버이다.
*   이런 매직넘버는 `` LIMIT_SIZE, MIN_COUNT, MESSAGE `` 등과 같이 상수화해서 저장시켜 활용하기
*   상수들은 __constants.js__ 로 따로 저장하기도 한다.

## 7. early return하기

*   if문에 에러 상황을 작성하고, 에러 상황이라면 빨리 리턴하게 만들자.
*   else if 나 else 문을 없애고, 불필요한 추가적인 행동을 안 하게 할 수 있다.
*   아래와 같은 예시를 참고할 수 있다.

        // 안 좋은 예
        const checkId = () =&gt; {
            if (isValid(a, b)) {
                successFn();
            }
            else {
                return;
            }
        }
    
        // 좋은 예
        const checkId= (a, b) =&gt; {
            if (!isValid(a, b)) return;
            successFn();
        }

## 8. 객체 형태 다양하게 활용하기

*   Destructuring을 사용하면 불필요하게 객체 참조 길이를 줄이고, 가독성도 높일 수 있다. 따로 선언해 주지 않아도 객체의 이름으로 변수를 사용할 수도 있다.
*   아래와 같은 상수를 담은 변수가 있다고 할 때 Destructuring으로 어떻게 활용할 수 있는지 살펴보자.

        const formInfo = {
            id: "sohyun4283",
            password: "qwertu123",
            name: "Hoo"
        }
    
        // 사용하는 변수만 Destructuring하기
        const templating = ({name}) =&gt; {
            return `&lt;li&gt;${name}&lt;/li&gt;`;
        };

*   더 다양한 예시는 [모던 자바스크립트](%5Bhttps://github.com/dangen-effy/modern-javascript/blob/master/README.md#destructuring-assignment%5D(https://github.com/dangen-effy/modern-javascript/blob/master/README.md#destructuring-assignment))에서 볼 수 있다.

## 9. switch문이 불편하다면 객체를 활용하기

*   다음과 같이 객체를 만들어 사용하면, switch나 if문으로 분기처리 할 필요 없이 간편하게 함수를 찾아갈 수 있다.

        const _map = {
          "email" : checkEmail,
          "pswd1" : checkPswd1
        }
    
        const checkInputName = ({id, value}) =&gt; {
            _map[id](value);
        }
    
        const checkEmail = (value) =&gt; regex.test(value);

## 10. 네이밍은 어려운 것이 맞으나 제대로 생각하기

*   함수, 변수 네이밍은 모두에게 어려운 작업이다.
*   그렇다고 __test1, test2, checkN__ 와 같은 의미를 알 수 없는 네이밍을 계속 쓰다 보면 나중에 바꾸기도 더 어려워 진다. (나조차 헷갈려 지는 내 코드가 된다.)
*   함수는 `` 동사+명사 `` 로 이름을 꼭 짓는다는 자신만의 일관성 있는 규칙을 지키면서 네이밍을 고민하면서 하는 것이 좋다.
*   오픈소스 네이밍이나 네이밍 팁을 참고하는 것도 네이밍하는 데 도움이 된다.