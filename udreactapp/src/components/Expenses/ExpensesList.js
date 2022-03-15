import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = props => {
  
  // {/* Getting value from above json formate using array indexing */}
  //     {/* here we are using map concept to multiple the value */}
  //     {/* also used to change data dynamic */}
  //     {/* below is the javascript terinary operator syntax ':'
  //      which is used as a if here */}
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
   
  return (
  <ul className="expenses-List">
      {props.items.map((expense) => (
      <ExpenseItem
    // //we should add a key while mapping 
    // items it used to unikely identify newly added data by the used 
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
  ))}
  </ul>

  );

};

export default ExpensesList;