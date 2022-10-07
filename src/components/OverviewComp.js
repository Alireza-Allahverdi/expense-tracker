import { Fragment, useState } from "react";
import TransactionForm from "./TransactionForm";

const Overview = ({ income, expense, addTransaction }) => {

    const [trFormState, setTrFormState] = useState(false)

    const setFormToFalse = () => {
        setTrFormState(false)
    }

    return (
        <Fragment>
            <div className="balanceSection">
                <p>Balance : {income - expense} $</p>
                <button className={`${trFormState ? "cancel" : ""}`} onClick={() => setTrFormState(!trFormState)}>
                    {
                        !trFormState ? "Add Transaction"
                            : "Cancel"
                    }
                </button>
            </div>
            {
                trFormState &&
                <TransactionForm
                    addTransaction={addTransaction}
                    changeForm={setFormToFalse}
                />
            }
            <div className="resultSection">
                <div>Income <span className="incIndicator">{income} $</span></div>
                <div>Expense <span className="expIndicator">{expense} $</span></div>
            </div>
        </Fragment>
    );
}

export default Overview;