import React from "react"
import PropTypes from 'prop-types'
import { Stat } from '../Stat/Stat'
import { List } from './Stats.styled'
import { getRandomHexColor } from '../../utils/RandomColor'

export const Stats = ({ events }) => {
    return <List>
        {events.map(event =>
            <Stat key={event.id}
                label={event.label}
                percentage={event.percentage}
                color={getRandomHexColor() } /> 
       )}
    </List>
}

Stats.propTypes = {
    events: PropTypes.objectOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }))
}

