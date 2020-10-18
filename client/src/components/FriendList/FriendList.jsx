import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
}));

const FriendList = ({ className }) => {
  const classes = useStyles();
  return <Box className={clsx([classes.mainContainer, className])}></Box>;
};

export { FriendList };
