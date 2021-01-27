import React from 'react';

import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Icon from '@view/atoms/Icon';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';

const PostAddComment = () => {
    return (
        <Box className={classes['add-comment']} bordered>
            <Box className={classes['add-comment-input']}>
                <input type="text" placeholder="Thêm bình luận" />
            </Box>
            <Box className={classes['add-comment-submit']}>
                <Button>Đăng</Button>
            </Box>
        </Box>
    );
};

export default PostAddComment;
