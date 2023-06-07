import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  profilePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  coverPhoto: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  profilePicture: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(1),
  },
  name: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  location: {
    marginBottom: theme.spacing(1),
  },
  bio: {
    marginBottom: theme.spacing(2),
  },
  friends: {
    marginBottom: theme.spacing(2),
  },
  friendItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  friendName: {
    marginLeft: theme.spacing(1),
  },
  posts: {},
  post: {
    marginBottom: theme.spacing(2),
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  postContent: {
    marginBottom: theme.spacing(1),
  },
  postActions: {},
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profilePage}>
      <img src="cover_photo.jpg" alt="Cover Photo" className={classes.coverPhoto} />
      <div className={classes.profileInfo}>
        <Avatar src="profile_picture.jpg" alt="Profile Picture" className={classes.profilePicture} />
        <Typography variant="h5" className={classes.name}>John Doe</Typography>
        <Typography variant="subtitle1" className={classes.location}>New York, USA</Typography>
        <Typography variant="body1" className={classes.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <div className={classes.friends}>
        <Typography variant="h6">Friends</Typography>
        <div className={classes.friendItem}>
          <Avatar src="friend1.jpg" alt="Friend 1" />
          <Typography variant="body1" className={classes.friendName}>Friend 1</Typography>
        </div>
        <div className={classes.friendItem}>
          <Avatar src="friend2.jpg" alt="Friend 2" />
          <Typography variant="body1" className={classes.friendName}>Friend 2</Typography>
        </div>
        <div className={classes.friendItem}>
          <Avatar src="friend3.jpg" alt="Friend 3" />
          <Typography variant="body1" className={classes.friendName}>Friend 3</Typography>
        </div>
      </div>
      <div className={classes.posts}>
        <Typography variant="h6">Posts</Typography>
        <div className={classes.post}>
          <div className={classes.postHeader}>
            <Avatar src="post_author.jpg" alt="Post Author" />
            <Typography variant="body1" className={classes.friendName}>John Doe</Typography>
          </div>
          <Typography variant="body1" className={classes.postContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <div className={classes.postActions}>
            <Button variant="contained">Like</Button>
            <Button variant="contained">Comment</Button>
            <Button variant="contained">Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
