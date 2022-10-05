import React from "react"
import PropTypes from 'prop-types'
import {TableElements,OneTableElement} from './OneOfTransaction.styled'

export const OneTransaction = ({invoice, amount, currency}) => {
    return <TableElements>
      <OneTableElement>{invoice}</OneTableElement>
        <OneTableElement>{amount}</OneTableElement>
      <OneTableElement>{currency}</OneTableElement>
    </TableElements>
}

OneTransaction.propTypes = {
  invoice: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}