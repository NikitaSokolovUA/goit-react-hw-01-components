import React from "react"
import {TableHead,TableHeadElement} from './TransactionHead.styled'

export const TransactionsHead = () => {
    return  <TableHead>
    <tr>
      <TableHeadElement>Type</TableHeadElement>
      <TableHeadElement>Amount</TableHeadElement>
      <TableHeadElement>Currency</TableHeadElement>
    </tr>
  </TableHead>
}