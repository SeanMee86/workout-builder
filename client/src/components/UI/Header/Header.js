import React from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.scss';

const Header = () => (
    <div className={classes.Heading}>
        <Link to={'/'}><h1>Workout Builder</h1></Link>
    </div>
);

export default Header;