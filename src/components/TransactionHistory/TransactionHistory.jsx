import React from "react"
import PropTypes from 'prop-types'
import { Table,TableHead, TableHeadElement, TableBody, TableElements,OneTableElement } from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
     return <section>
        <Table>
            <TableHead>
                <tr>
                <TableHeadElement>Type</TableHeadElement>
                <TableHeadElement>Amount</TableHeadElement>
                <TableHeadElement>Currency</TableHeadElement>
                </tr>
             </TableHead>

             <TableBody>
                 {transactions.map(({ id, type, amount, currency }) =>
                     <TableElements key={id}>
                        <OneTableElement>{type}</OneTableElement>
                        <OneTableElement>{amount}</OneTableElement>
                        <OneTableElement>{currency}</OneTableElement>
                    </TableElements>
            )}
            </TableBody>
        </Table>
    </section>
}


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}