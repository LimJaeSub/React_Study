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

    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
      });


    let expensesContent = <p>No Expenses found.</p>

    if(filteredExpenses.length>0){
        expensesContent = filteredExpenses.map(
            (expense)=>
            <ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}>  
            </ExpenseItem>)
    }
    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear} 
            onAddSelect={selectYear} 
            />
            {expensesContent}
            </Card> 
            {/* filter+map chain */}
        </div>
    )
    
}

export default Expense;