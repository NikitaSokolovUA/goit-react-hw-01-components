import React from "react"
import { TransactionsHead } from "../TransactionsHead/TransactionsHead"
import { TransactionsBody } from "../TransactionsBody/TransactionsBody"
import transactions from '../../Info/transactions'

export const Transactions = () => {
    return <section>
        <table>
            <TransactionsHead />
            <TransactionsBody transactions={ transactions } />
        </table>
    </section>
}