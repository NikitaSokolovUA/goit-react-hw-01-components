import React from "react"
import PropTypes from 'prop-types'
import {ListItem, FriendName, OnlineIcon, Avatar} from './Friend.styled'

export const Friend = ({avatar, isOnline, name}) => {
    return <ListItem >
        <OnlineIcon isOnline={ isOnline } />
        <Avatar  src={avatar} alt="User avatar" width="48"  height="48"/>
        <FriendName>{name}</FriendName>
</ListItem>
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}