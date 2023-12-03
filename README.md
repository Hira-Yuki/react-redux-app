# Redux 복습

부트캠프에서는 가볍게 훑고만 지나갔던 개념을 다지기 위한 간단한 프로젝트입니다.
기본적인 Redux 사용법을 복습하고 Redux Middleware와 Thunk를 다시 학습합니다.

Redux 기본 개념을 이해하고 Redux를 사용한 프로젝트의 코드를 읽고 이해할 수 있는 것을 목표로 합니다.

## counter

기본적인 Redux 기능을 이용해서 + 버튼을 클릭하면 숫자 1이 증가하고 - 버튼을 클릭하면 숫자 1이 감소하는 간단한 기능 구현 

## todos

combineReducers를 이용해서 새로운 상태를 관리하는 리듀서를 추가하는 기능 구현

## Providers

상태 값을 컴포넌트에 각각 전달하는 것이 아닌 Provider를 설정하는 것으로 하위 컴포넌트에서도 상태를 구독할 수 있도록 설정할 수 있음

## useSelector, useDispatch

useSelector, useDispatch Hook을 이용해서 컴포넌트에 상태 값을 가져오고 Reducer로 Action을 전달

## Redux Middleware

액션을 Reducer로 전달하기 전 거쳐가는 중간 단계, 기본적인 redux의 데이터 흐름에서는 action을 전달하는 과정에서 다른 로직을 처리할 수 없기 때문에 Middleware를 이용해서 중간에 코드를 실행할 수 있도록 할 수 있음.
비동기 처리, 에러 처리, logging등 다양한 역할을 수행할 수 있도록 함.

## Redux-Thunk

Middleware의 일종으로 비동기 작업을 할 때 많이 사용하는 방법이다.
Thunk가 하는 일은 dispatch하는 Action이 객체인지 함수인지를 분류하고 객체인 경우 reducer로 전달하고 함수인 경우 콜백 함수를 실행하고 완료되기를 기다린 후 다시 일반적인 dispatch를 시도합니다.