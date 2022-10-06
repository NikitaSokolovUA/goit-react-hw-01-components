import React from "react"
import PropTypes from 'prop-types'
import {ItemList, NameLabel, Percentage} from './Statistic.styled'

export const Statistic = ({label, percentage, color}) => {
    return <ItemList style={{backgroundColor: color}}>
        <NameLabel> {label} </NameLabel>
        <Percentage> {percentage} %</Percentage>
    </ItemList>
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string,
}