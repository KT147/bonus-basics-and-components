import './ExpenseDate.css'

function ExpenseDate({expense}) {
  return (
    <div className="expense-date">
        <div className="expense-date__month">{expense.date.toLocaleString('en-US', {month: 'long'})}</div>
        <div className="expense-date__day">{expense.date.toLocaleString('en-US', {day: '2-digit'})}</div>
        <div className="expense-date__year">{expense.date.getFullYear()}</div>
    </div>
  )
}

export default ExpenseDate