import React from 'react'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styles from './NoMatch.module.css'
import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div className={`${styles.noMatch} flexContent`}>
      <h1>
        Page not found <SentimentVeryDissatisfiedIcon />
      </h1>
      <Link to="/"> Go to main page</Link>
    </div>
  )
}
