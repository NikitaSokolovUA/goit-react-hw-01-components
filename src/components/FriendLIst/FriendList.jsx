import React from "react"
import PropTypes from 'prop-types'
import { FriendListItem } from "../FriendListItem/FriendListItem"
import {  ListOfFriends } from "./FriendList.styled"



export const FriendList = ({friends}) => {
    return <section>
        <ListOfFriends>
            {friends.map(({id, avatar, isOnline, name}) =>
                    <FriendListItem key={id}
                        avatar={avatar}
                        isOnline={isOnline}
                        name={name} />
                
            )}
        </ListOfFriends>
    </section>
}

FriendList.propTypes = {  
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired, 
    }))
         
}