import React from 'react';

import Box from '@view/atoms/Box';

import NavBar from '@view/molecules/NavBar';

import classes from './style.module.scss';

const Header = () => {
    return (
        <Box className={classes['header']} bordered>
            <NavBar />
        </Box>
    );
};

export default Header;
