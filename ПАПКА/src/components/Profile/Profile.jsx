import PropTypes from 'prop-types'
import React from "react";
import {Avatar, Profiler, Description, Name, Tag, Location, StatsList, StatsItem, StatsLabel, StatsQuantity} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <Profiler>
  <Description>
    <Avatar
      src={avatar}
      alt= {`${username} avatar`}
    />
    <Name >{username}</Name>
    <Tag >@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <StatsList >
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity >{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity >{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity >{stats.likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
</Profiler>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
}