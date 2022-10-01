import { useState } from "react";
import Overview from "./OverviewComp";
import TransactionComponent from "./TransactionComp";

const ExpenseApp = () => {

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [transaction, setTransaction] = useState([])

    const addTransaction = (values) => {
        const data = { ...values, id: Date.now() }
        if (data.type === "expense") {
            setExpense(expense + parseFloat(data.amount))
        }
        else {
            setIncome(income + parseFloat(data.amount))
        }
        setTransaction([...transaction, data])
    }

    return (
        <section className="container">
            <Overview
                income={income}
                expense={expense}
                addTransaction={addTransaction}
            />
            <TransactionComponent transactions={transaction} />
        </section>
    );
}

export default ExpenseApp;