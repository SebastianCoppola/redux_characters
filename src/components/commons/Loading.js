import React from 'react';
import { CircularProgress } from '@mui/material';

const style = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },
    spinner: {
        color: 'black',
    }
  };

export default function Loading() {


    return (
        <div className={style.root}>
            <CircularProgress size={'5rem'} thickness={2.5}/>
        </div>
    )
}