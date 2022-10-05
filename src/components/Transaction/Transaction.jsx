import React from "react"
import { TransactionsHead } from "../TransactionsHead/TransactionsHead"
import { TransactionsBody } from "../TransactionsBody/TransactionsBody"
import transactions from '../../Info/transactions'
import {Table} from './Transaction.styled'

export const Transactions = () => {
    return <section>
        <Table>
            <TransactionsHead />
            <TransactionsBody transactions={ transactions } />
        </Table>
    </section>
}