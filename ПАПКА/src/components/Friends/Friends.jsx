import React from "react"
import friends  from '../../Info/friends'
import { FriendList } from "../FriendLIst/FriendList"

export const Friends = () => {
    return <section>
        <FriendList friends={ friends } />
    </section>
}

