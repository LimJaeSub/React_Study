import ExpenseItem from './ExpenseItem.js';
import React ,{useState} from 'react';
import './Expense.css';
import Card from '../UI/Card.js'
import ExpenseFilter from './ExpenseFilter.js';

function Expense(props){
    const expenses = props.items;

    const [filteredYear,setFilteredYear] = useState('2020');
    const selectYear = (year)=>{
        setFilteredYear(year);
    }
    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onAddSelect={selectYear} />
            {props.items.map(
                expense=><ExpenseItem title={expense.title} 
                amount={expense.amount} 
                date={expense.date}></ExpenseItem>)}
            </Card>
        </div>
    )
    
}

export default Expense;