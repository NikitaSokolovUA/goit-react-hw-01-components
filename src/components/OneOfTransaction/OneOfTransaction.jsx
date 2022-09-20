import React from "react"

export const OneTransaction = ({invoice, amount, currency}) => {
    return <tr>
      <td>{invoice}</td>
        <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}