import PropTypes from 'prop-types'
import React from "react";
import {Avatar, Profiler, Description, Name, Tag, Location, StatsList, StatsItem, StatsLabel, StatsQuantity, Card} from './Profile.styled'

export const Profile = ({profile:{username, tag, location, avatar, stats:{followers, views, likes}}}) => {
  return  <Card>
  <Profiler>
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
      <StatsQuantity >{followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity >{views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity >{likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
</Profiler>
    </Card>
}

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
    })
}


