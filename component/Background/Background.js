import React from 'react';
// import styles from '../../styles/Background.module.css';
import { Black } from './Styled';

const Background = prop => (
    <>
    <Black onClick={prop.click}/>
    </>
    // <div className={styles.back} onClick={prop.click}/>
)

export default Background;