import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
     <ExpensesChart expenses={filteredExpenses} />
     <ExpensesList items={filteredExpenses} />

{/* instead on using the below hardcoded ExpenseItem to 
display the title,amount & date we can use the abopve map concept or an array concept 
the above is used to display n number of values bt below only gives what we gives or hardcoded*/}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      /> */}
    
    </Card>
    </div>
 
  );
};

export default Expenses;
