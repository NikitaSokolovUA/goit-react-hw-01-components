import React from "react"
import PropTypes from 'prop-types'
import { OneTransaction } from "components/OneTransaction/OneTransaction"
import { Table,TableHead, TableHeadElement, TableBody } from "./TransactionHistory.styled"

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
                     <OneTransaction key={id}
                        invoice={type}
                        amount={amount}
                        currency={currency}
            />)}
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