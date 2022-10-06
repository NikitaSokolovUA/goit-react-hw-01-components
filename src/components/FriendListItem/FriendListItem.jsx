import React from "react"
import PropTypes from 'prop-types'
import {ListItem, FriendName, OnlineIcon, Avatar} from './FriendListItem.styled'

export const FriendListItem = ({avatar, isOnline, name}) => {
    return <ListItem >
        <OnlineIcon isOnline={ isOnline } />
        <Avatar  src={avatar} alt="User avatar" width="48"  height="48"/>
        <FriendName>{name}</FriendName>
</ListItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}