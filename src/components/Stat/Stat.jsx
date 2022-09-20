import React from "react"
import PropTypes from 'prop-types'
import {ItemList, NameLabel, Percentage} from './Stat.styled'

export const Stat = ({label, percentage, color}) => {
    return <ItemList style={{backgroundColor: color}}>
        <NameLabel> {label} </NameLabel>
        <Percentage> {percentage} %</Percentage>
    </ItemList>
}

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string,
}