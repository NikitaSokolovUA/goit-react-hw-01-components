import React from "react"
import PropTypes from 'prop-types'
import { Title, List, ItemList, NameLabel, Percentage } from "./Statistics.styled"
import { getRandomHexColor } from '../../utils/RandomColor'

export const Statistics = ({title, statistics}) => {
    return  <section>
        {title && <Title>{title}</Title>}
        <List>
            {statistics.map(({id, label, percentage}) =>
                 <ItemList key={id}  style={{backgroundColor: getRandomHexColor()}}>
                    <NameLabel> {label} </NameLabel>
                    <Percentage> {percentage} %</Percentage>
                </ItemList>
            )}
        </List>
        </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
    
}