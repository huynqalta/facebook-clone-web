import React from 'react';

import Box from '@view/atoms/Box';
import Text from '@view/atoms/Text';

import classes from '@view/molecules/Post/style.module.scss';
import Post from '@entities/post';

interface IProps {
    post: Post
}

const PostActions = (props: IProps) => {

    const { post } = props

    return (
        <Box className={classes['status']}>
            <Text fontWeight="bold">
                <a href="#">thaihoanganh</a>
            </Text>
            &nbsp;
            <Text>
                {post.caption}
            </Text>
        </Box>
    );
};

export default PostActions;
