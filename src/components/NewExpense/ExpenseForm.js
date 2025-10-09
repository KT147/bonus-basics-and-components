import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({onSaveExpenseData}) {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function titleChangeHandler(event) {
    setData((prevState) => ({ ...prevState, title: event.target.value }));
  }

  function amountChangeHandler(event) {
    setData((prevState) => ({ ...prevState, amount: event.target.value }));
  }

  function dateChangeHandler(event) {
    setData((prevState) => ({ ...prevState, date: event.target.value}));
  }

  function submitHandler(event) {
    event.preventDefault()
    const expenseData = {
      ...data,
      date: new Date(data.date), // <-- teisenda string Date objektiks siin
    };
    setData({
      title:'',
      amount:'',
      date:'',
    })
    onSaveExpenseData(expenseData)
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" value={data.title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountChangeHandler} type="number" value={data.amount} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChangeHandler} type="date" value={data.date} min="2019-01-01" max="2025-10-10" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
