import React from "react"
import PropTypes from 'prop-types'
import { OneTransaction } from '../OneOfTransaction/OneOfTransaction'
import {TableBody} from './TransactionBody.styled'

export const TransactionsBody = ({transactions}) => {
    return <TableBody>
        {transactions.map(({id, type, amount, currency}) => <OneTransaction
            key={id}
            invoice={type}
            amount={amount}
            currency={currency}
            />)}
        
    </TableBody>
}

TransactionsBody.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
        ))
}