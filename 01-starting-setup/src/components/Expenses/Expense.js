import React ,{useState} from 'react';
import './Expense.css';
import Card from '../UI/Card.js'
import ExpenseFilter from './ExpenseFilter.js';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expense(props){
    //const expenses = props.items;

    const [filteredYear,setFilteredYear] = useState('2020');
    const selectYear = (year)=>{
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
      });



    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear} 
            onAddSelect={selectYear} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
            </Card> 
            {/* filter+map chain */}
        </div>
    )
    
}

export default Expense;