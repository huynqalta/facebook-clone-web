import React from 'react';

import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';

const PostActions = () => {
    return (
        <Box className={classes['count-heart']}>
            <Button>
                <Text>1999 lượt thích</Text>
            </Button>
        </Box>
    );
};

export default PostActions;
