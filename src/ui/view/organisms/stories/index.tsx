import React from 'react';

import Box from '@view/atoms/Box';
import Story from '@view/molecules/story';

import classes from '@view/organisms/stories/style.module.scss';

const Stories = () => {
    return (
        <Box className={classes['stories']} bordered>
            <ul className={classes['stories-scroll']}>
                <Story />
                <Story />
                <Story />
            </ul>
        </Box>
    );
};

export default Stories;
