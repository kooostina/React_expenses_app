import ExpenseItem from "./ExpenseItem";
import "./ExpensesItems.css";

function ExpensesItems(props) {
  const items = props.items || [];
  console.log(items);
  return (
    <div className="expenses">
      {items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default ExpensesItems;
