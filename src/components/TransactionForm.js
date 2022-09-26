import { useState } from "react";

const TransactionForm = (props) => {
    const [fieldValue, setFieldValue] = useState({
        type: "expense",
        amount: '',
        description: ""
    })

    const inputsChangeHandler = (e) => {
        setFieldValue({
            ...fieldValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.addTransaction(fieldValue)
        props.changeForm()
    }

    return (
        <form className="transactionForm" onSubmit={submitHandler}>
            <h3>Transaction Form</h3>
            <input
                type="number"
                name="amount"
                value={fieldValue.amount}
                placeholder="Amount"
                onChange={inputsChangeHandler}
            />
            <input
                type="text"
                name="description"
                value={fieldValue.description}
                placeholder="Description"
                onChange={inputsChangeHandler}
            />
            <div className="radioBtn">
                <label>
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        checked={fieldValue.type === "expense"}
                        onChange={inputsChangeHandler}
                    />
                    Expense
                </label>
                <label>
                    <input
                        type="radio"
                        value="income"
                        name="type"
                        checked={fieldValue.type === "income"}
                        onChange={inputsChangeHandler}
                    />
                    Income
                </label>
            </div>
            <button>Add</button>
        </form>
    );
}

export default TransactionForm;