import React from 'react';

import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';

const PostCountComment = () => {
    return (
        <Box className={classes['count-comment']}>
            <a href='#'>
                <Text color='secondary'>Xem tất cả 99 bình luận</Text>
            </a>
        </Box>
    );
};

export default PostCountComment;
