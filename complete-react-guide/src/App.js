import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
import Card from './components/UI/Card'

function App() {
  const expenses = [
    { title: 'car insurnance', amount: 3223, date: new Date(2021, 2, 28) },
    { title: 'cat insurnance', amount: 40.23, date: new Date(2021, 2, 26) },
  ]

  const addExpenseHandler = expense => {
    console.log('app.js')
    console.log(expense)
  }

  return (
    <Card className="App">

     <ExpenseItem 
     title={expenses[0].title}
     amount={expenses[0].amount}
     date={expenses[0].date}
      > </ExpenseItem>
         <ExpenseItem 
     title={expenses[1].title}
     amount={expenses[1].amount}
     date={expenses[1].date}
      > </ExpenseItem>

    <NewExpense onAddExpense={addExpenseHandler}/>
    </Card>
  );
}

export default App;
