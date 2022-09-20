import React from "react"
import {OneTransaction} from '../OneOfTransaction/OneOfTransaction'

export const TransactionsBody = ({transactions}) => {
    return <tbody>
        {transactions.map(transaction => <OneTransaction
            key={transaction.id}
            invoice={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            />)}
        
    </tbody>
}