import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react";


function Expenses({expenses}) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseItem filteredExpenses={filteredExpenses} expenses={expenses} />
    </Card>
  )
}

export default Expenses