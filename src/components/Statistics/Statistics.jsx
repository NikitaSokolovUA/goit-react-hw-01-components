import React from "react"
import PropTypes from 'prop-types'
import { Title, List } from "./Statistics.styled"
import { Statistic  } from "components/Statistic/Statistic"
import { getRandomHexColor } from '../../utils/RandomColor'

export const Statistics = ({title, statistics}) => {
    return  <section>
        <Title>{title}</Title>
        <List>
           { statistics.map(statistic =>
                <Statistic key={statistic.id}
                    label={statistic.label}
                    percentage={statistic.percentage}
                    color={getRandomHexColor()} /> )}
        </List>
        </section>
}

Statistics.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
    
}