function TransactionComponent({ transactions }) {

    return (
        <div className="transactionList">
            <h3>Transactions</h3>
            <hr />
            {
                transactions.length === 0 ?
                    <h5>Nothing To Show</h5>
                    :
                    <>
                        <div className="tableTitles">
                            <span>Row</span>
                            <span>Type</span>
                            <span>Amount</span>
                            <span>Description</span>
                            {/*
                            {Object.keys(transactions[0]).map((row, index) => {
                                return <span key={index}>
                                    {row}
                                </span>
                            })}
                            */}
                        </div>
                        {
                            transactions.map((transaction, index) => {
                                return <div className="tableStuff" key={transaction.id}>
                                    <p>{index + 1}</p>
                                    <p className={`${transaction.type === "expense" ? "expense" : "income"}`}>{transaction.type}</p>
                                    <p>{transaction.amount} $</p>
                                    <p>{transaction.description}</p>
                                </div>
                            })


                        }
                    </>
            }
        </div>
    );
}

export default TransactionComponent;