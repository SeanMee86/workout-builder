import React from 'react';
import { Link } from "react-router-dom";

import classes from './Header.module.scss';

import siteLogo from '../../../shared/images/gym-1048852_1280.png';

const Header = () => (
    <div className={classes.Heading}>
        <Link to={'/'}>
            <img className={classes.HeaderLogo} src={siteLogo} alt=""/>
            <h1>Workout Builder</h1>
        </Link>
    </div>
);

export default Header;