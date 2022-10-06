import React from "react"
import user from '../Info/user'
import statistics from '../Info/data' 
import friends from '../Info/friends'
import transactions from '../Info/transactions'
import { Profile } from "./Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "./FriendLIst/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"




export const App = () => {
  return <>
    <Profile    username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
    <Statistics title="Upload stats" statistics={ statistics } />
    <FriendList friends={ friends } />
    <TransactionHistory transactions={ transactions } />
  </>
}
