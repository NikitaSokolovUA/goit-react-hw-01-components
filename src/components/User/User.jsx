import PropTypes from 'prop-types'
import React from "react"
import {username, tag, location, avatar, stats} from '../../Info/user'
import { Profile } from "../Profile/Profile"

export const User = () => {
  return <div>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats} />
  </div>
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