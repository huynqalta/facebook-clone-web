import React from 'react';


import NavBarLogo from '@view/molecules/NavBar/NavBarLogo';
import NavBarMenu from '@view/molecules/NavBar/NavBarMenu';

import classes from '@view/molecules/NavBar/style.module.scss';

const NavBar = () => {
    return (
        <div className={classes['nav-bar']}>
            <NavBarLogo />
            <NavBarMenu />
        </div>
    );
};

export default NavBar;
