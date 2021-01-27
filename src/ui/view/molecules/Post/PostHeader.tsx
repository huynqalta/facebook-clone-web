import React from 'react';

import Avatar from '@view/atoms/Avatar';
import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Icon from '@view/atoms/Icon';
import Text from '@view/atoms/Text';
import PostEntities from '@entities/post';

import classes from '@view/molecules/Post/style.module.scss';

interface IProps {
    post: PostEntities
}

const PostHeader = (props: IProps) => {

    const { post } = props

    return (
        <Box className={classes['post-header']} bordered>
            <Box className={classes['header-avatar']}>
                <Avatar src={post.author.avatar} />
            </Box>
            <Box className={classes['header-title']}>
                <a href="/#">
                    <Text fontWeight="bold">{post.author.fullName}</Text>
                </a>
            </Box>
            <Box className={classes['header-extra']}>
                <Button>
                    <Icon>
                        <circle
                            clipRule="evenodd"
                            cx="8"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                        <circle
                            clipRule="evenodd"
                            cx="24"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                        <circle
                            clipRule="evenodd"
                            cx="40"
                            cy="24"
                            fillRule="evenodd"
                            r="4.5"
                        ></circle>
                    </Icon>
                </Button>
            </Box>
        </Box>
    );
};

export default PostHeader;
