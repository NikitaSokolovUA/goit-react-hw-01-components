import React from "react"
import { StatTitle } from '../StatisticTitle/StatisticTitle'
import { Stats } from "../Stats/Stats"
import data from '../../Info/data'

export const Statistic = () => {
    return <div>
        <StatTitle />
        <Stats events={data} />
    </div>
}