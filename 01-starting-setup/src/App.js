//import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense"
const App=()=> {

  
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
  //컴포넌트는 다른 컴포넌트의 변수를 직접적으로 사용할 수 없다.
  //prop를 이용하면 가능(데이터를 밖에서 받는 느낌)
}

export default App;
