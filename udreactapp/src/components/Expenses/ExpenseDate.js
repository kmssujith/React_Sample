import './ExpenseDate.css'
//using props to get date from app.js
const ExpenseDate = (props) => {
    //props.date returns the date
    //   {/* we cant pass expenseDate directly so we use .toISOString() */}
    //toLocaleString used to get date as a string value
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    // return used to return the below html code to the output file (expenseItem.js)
return (
    
     <div className="expense-date" >
      <div className="expense-dat__month" >{month}</div>
      <div className="expense-dat__year" >{year}</div>
      <div className="expense-dat__day" >{day}</div>   
     </div>
   );
};

export default ExpenseDate;