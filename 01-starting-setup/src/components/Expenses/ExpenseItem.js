import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

function ExpenseItem(props){ //app.js에서 받아온변수들을 매개변수로 사용


    let title = props.title;
    // props는 app.js에서 전달한 data들의 집합이다.

    const clickHandler = ()=>{
        title="updated"
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem; // 이 파일의 기본함수로 내보냄