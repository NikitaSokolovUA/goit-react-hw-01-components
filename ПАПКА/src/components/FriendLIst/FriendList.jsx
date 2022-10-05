import React from "react"
import PropTypes from 'prop-types'
import { FriendListItem } from "../FrienListItem/FrienListItem"
import { ListOfFriends } from "./FriendList.styled"



export const FriendList = ({friends}) => {
    return <ListOfFriends>
        {friends.map(friend =>
            <FriendListItem key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name} />)}
    </ListOfFriends>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    }
    ))
}