import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                   <Transaction
                        transaction={transaction}
                        key={transaction.id}
                    />
                    // Passing 'transaction' as a prop,
                    // which comes from the map function,
                    // which comes from the GlobalContext
                    // so for each one it renders a Transaction component passing a Prop
                    // and because it's a key, it needs a unique Id
                ))}
            </ul>
        </>
    )
}