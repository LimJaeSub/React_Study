import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

// 프리젠테이셔널
import Counter from '../component/Counters';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일함.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook.
  const dispatch = useDispatch();
  
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      // 프리젠테이셔널 컴포넌트에 필요한 값을 props로 전달해준다.
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;