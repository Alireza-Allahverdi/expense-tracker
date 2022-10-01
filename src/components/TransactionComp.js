import { useEffect, useState } from "react";

function TransactionComponent({ transactions }) {
    
    const [searchBox, setSearchBox] = useState("")
    const [filteredTrans, setFilteredTrans] = useState(transactions)

    const searchResults = (search) => {
        if (!search || search === "") {
            setFilteredTrans(transactions)
            return
        }
        const filteredItems = transactions.filter((tr) => tr.description.toLowerCase().includes(search))
        setFilteredTrans(filteredItems)
    }

    const changeHandler = (e) => {
        setSearchBox(e.target.value)
        searchResults(e.target.value)
    }

    useEffect(() => {
        searchResults(searchBox)
    }, [transactions])

    return (
        <div className="transactionList">
            <div className="titleAndSearch">
                <h3>Transactions</h3>
                <input
                    type="text"
                    value={searchBox}
                    onChange={changeHandler}
                    placeholder="search transactions..."
                />
            </div>
            <hr />
            {
                filteredTrans.length === 0 ?
                    <h5>Nothing To Show</h5>
                    :
                    <>
                        <div className="tableTitles">
                            <span>Row</span>
                            <span>Type</span>
                            <span>Amount</span>
                            <span>Description</span>
                            {/* IF THE DATA DIDN'T INCLUDE THE ID:
                            {Object.keys(transactions[0]).map((row, index) => {
                                return <span key={index}>
                                    {row}
                                </span>
                            })}
                            */}
                        </div>
                        <div className="tableBody">
                            {
                                filteredTrans.map((transaction, index) => {
                                    return <div className="tableStuff" key={transaction.id}>
                                        <p>{index + 1}</p>
                                        <p className={`${transaction.type === "expense" ? "expense" : "income"}`}>{transaction.type}</p>
                                        <p>{transaction.amount} $</p>
                                        <p>{transaction.description}</p>
                                    </div>
                                })
                            }

                        </div>
                    </>
            }
        </div>
    );
}

export default TransactionComponent;