import React, { useState, useEffect, createRef } from 'react';

import Box from '@view/atoms/Box';
import Button from '@view/atoms/Button';
import Icon from '@view/atoms/Icon';

import classes from '@view/molecules/Post/style.module.scss';
import Post from '@entities/post';

const data = [
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-7.fna.fbcdn.net/v/t51.2885-15/e35/95885690_1421863111330911_9048723727107482200_n.jpg?_nc_ht=instagram.fsgn5-7.fna.fbcdn.net&_nc_cat=103&_nc_ohc=cGjNUTFLAAgAX8jJmaQ&tp=1&oh=cd7bcb2d33375eecc52b00c9946289d0&oe=60362437',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-7.fna.fbcdn.net/v/t51.2885-15/e35/95991531_270376381021119_6718057815186742790_n.jpg?_nc_ht=instagram.fsgn5-7.fna.fbcdn.net&_nc_cat=103&_nc_ohc=wy6cAmXqhDUAX_K91mg&tp=1&oh=40ea5b9748fb2774cca41b2e5f573168&oe=603498F5',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-2.fna.fbcdn.net/v/t51.2885-15/e35/95882421_240004957343321_8999944239191344809_n.jpg?_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=uR47Ht8Gaz4AX_McO76&tp=1&oh=5dd7b905aa7425336da246d30b00fdc6&oe=6035D362',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-6.fna.fbcdn.net/v/t51.2885-15/e35/95929288_231056738314518_2473896807698491766_n.jpg?_nc_ht=instagram.fsgn5-6.fna.fbcdn.net&_nc_cat=106&_nc_ohc=B1bfjJhywxgAX9jj2YE&tp=1&oh=663f8c3de42a825685f9d0584fd07b36&oe=6036D712',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-2.fna.fbcdn.net/v/t51.2885-15/e35/96021765_235955437508717_8063992430886655552_n.jpg?_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=i6xnj48x8yAAX82KXiF&tp=1&oh=0de72400ea22008a2f5b687a7225b538&oe=60355692',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-15/e35/96538054_468699177245137_1119302853970707524_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Y-3a7-x0aMMAX8JS7Nv&tp=1&oh=526b89fad2518095896f71bea49d8abc&oe=60366B55',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-5.fna.fbcdn.net/v/t51.2885-15/e35/95876661_847069119124596_987462989479708367_n.jpg?_nc_ht=instagram.fsgn5-5.fna.fbcdn.net&_nc_cat=100&_nc_ohc=H-5AIsleEWAAX_CFQr7&tp=1&oh=8ecb6d20923187b78600e249abf62874&oe=60336A4A',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-15/e35/95952035_704072237007463_6829925267138376413_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=0Sgpyd9rbf0AX-OX8D3&tp=1&oh=5c74a69050b3354dec5a22f7d778ad22&oe=60369092',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-15/e35/95869906_615657105825439_6782294931736989012_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=sIzvy-99BvwAX_z6a33&tp=1&oh=3c1b27ea5d4b42a7c0e429ba47d80037&oe=60357177',
    },
    {
        type: 'image',
        src:
            'https://instagram.fsgn5-4.fna.fbcdn.net/v/t51.2885-15/e35/96408920_227795548527854_7378047339220026009_n.jpg?_nc_ht=instagram.fsgn5-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=AkgspND_5uEAX8cFVA5&tp=1&oh=6fdfb718c7ac39edfea2420471556732&oe=60360004',
    },
];

interface IProps {
    post: Post
}

const PostContent = (props: IProps) => {

    const { post } = props

    const ref: React.LegacyRef<HTMLDivElement> = createRef();
    const [state, setState] = useState(() => {
        return {
            keyActive: 1,
            styleWidth: 600,
        };
    });

    useEffect(() => {
        setState((prevState) => {
            return { ...prevState, styleWidth: ref.current.clientWidth + 2 };
        });
    }, []);

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        type: 'left' | 'right'
    ) => {
        event.stopPropagation();
        setState((prevState) => {
            return {
                ...prevState,
                keyActive: type === 'left' ? prevState.keyActive - 1 : prevState.keyActive + 1,
            };
        });
    };

    return (
        <Box className={classes['post-content']}>
            <Box
                className={classes['post-content-scroll']}
                style={{ transform: `translateX(-${(state.keyActive - 1) * state.styleWidth}px)` }}
            >
                {post.medias.map((value, index) => {
                    return (
                        <Box key={index} className={classes['content-item']}>
                            <img src={value} alt="" />
                        </Box>
                    );
                })}
            </Box>
            <div className={classes['content-overlay']} ref={ref}>
                {state.keyActive > 1 && (
                    <Box className={classes['arrow-left']}>
                        <Button variant="contained" onClick={(event) => handleClick(event, 'left')}>
                            {'<'}
                        </Button>
                    </Box>
                )}
                {state.keyActive < data.length && (
                    <Box className={classes['arrow-right']}>
                        <Button
                            variant="contained"
                            onClick={(event) => handleClick(event, 'right')}
                        >
                            {'>'}
                        </Button>
                    </Box>
                )}
            </div>
        </Box>
    );
};

export default PostContent;
