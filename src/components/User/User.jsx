import PropTypes from 'prop-types'
import React from "react"
import user from '../../Info/user'
import { Profile } from "../Profile/Profile"
import { ProfileSection } from './User.styled'

const {username, tag, location, avatar, stats} = user

export const User = () => {
  return <ProfileSection>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats} />
  </ProfileSection>
}

User.propTypes = {
    user: PropTypes.objectOf(PropTypes.exact(
        {
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.objectOf(PropTypes.number),
        }
    )),
}