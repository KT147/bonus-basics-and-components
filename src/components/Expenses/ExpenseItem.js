import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ filteredExpenses }) {
  return (
    <>
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.map((expense) => (
        <Card key={expense.id} className="expense-item">
          <div>
            <ExpenseDate expense={expense} />
          </div>
          <div className="expense-item__description">
            <h2>{expense.title}</h2>
            <div className="expense-item__price">${expense.amount}</div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default ExpenseItem;
