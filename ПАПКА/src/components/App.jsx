import React from "react"
import { User } from "./User/User"
import { Statistic } from './Statistic/Statistic'
import { Friends } from "./Friends/Friends"
import { Transactions } from "./Transaction/Transaction"




export const App = () => {
  return <div>
    <User />
    <Statistic />
    <Friends />
    <Transactions />
  </div>
}

