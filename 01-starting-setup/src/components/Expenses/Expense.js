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
    console.log(filteredYear);
    console.log(props.items.filter(expense=>expense.date.getFullYear()==filteredYear));
    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onAddSelect={selectYear} />
            {props.items.filter(expense=>expense.date.getFullYear()==filteredYear).map(
                (expense)=>
                <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}>  
                </ExpenseItem>)}
            </Card> 
            {/* filter+map chain */}
        </div>
    )
    
}

export default Expense;