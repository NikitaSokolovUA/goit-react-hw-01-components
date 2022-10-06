import React from "react"
import profile from '../Info/user'
import statistics from '../Info/data' 
import friends from '../Info/friends'
import transactions from '../Info/transactions'
import { Profile } from "./Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "./FriendLIst/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"




export const App = () => {
  return <div>
    <Profile  profile={ profile } />
    <Statistics statistics={ statistics } />
    <FriendList friends={ friends } />
    <TransactionHistory transactions={ transactions } />
  </div>
}

