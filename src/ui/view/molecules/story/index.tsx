import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Text from '@view/atoms/Text';
import Modal from '@view/atoms/Modal';

import classes from '@view/molecules/story/style.module.scss';

const Story = () => {
    const [state, setState] = useState(() => {
        return {
            isActive: true,
            isLoading: false,
        };
    });

    useEffect(() => {
        if (state.isLoading) {
            setTimeout(() => {
                setState((prevState) => {
                    return { ...prevState, isActive: false, isLoading: false };
                });
            }, 4000);
        }
    }, [state.isLoading]);

    const handleClick = () => {
        setState((prevState) => {
            return { ...prevState, isLoading: true };
        });
    };

    return (
        <Box className={classes['story-container']}>
            <Button
                className={classnames(classes['story'], state.isActive && classes['story-active'])}
                onClick={handleClick}
            >
                <Box className={classes['story-avatar']}>
                    <Avatar
                        story
                        storyLoading={state.isLoading}
                        storyActive={state.isActive}
                        size="large"
                        src="https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/112331157_764326777646280_8349960478372336396_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_ohc=h5_ux_YvNv4AX_AVMAM&tp=1&oh=abdd12562bcd3e294a77deb17ff61372&oe=603457D9"
                    />
                </Box>
                <Box className={classes['story-name']}>
                    <div>thaihoanganh</div>
                </Box>
            </Button>
        </Box>
    );
};

export default Story;
