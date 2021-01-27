import React from 'react';

import Box from '@view/atoms/Box';

import classes from '@view/molecules/NavBar/style.module.scss';

const NavBarLogo = () => {
    return (
        <Box className={classes['nav-bar-logo']}>
            <a href="/#">
                <Box className={classes['nav-bar-logo-image']}>
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt="Logo"
                    />
                </Box>
            </a>
        </Box>
    );
};

export default NavBarLogo;
