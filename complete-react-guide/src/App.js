import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
import Card from './components/Card'

function App() {
  const expenses = [
    { title: 'car insurnance', amount: 3223, date: new Date(2021, 2, 28) },
    { title: 'cat insurnance', amount: 40.23, date: new Date(2021, 2, 26) },
  ]
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
    </Card>
  );
}

export default App;
