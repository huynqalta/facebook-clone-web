import React from 'react';

import Layout from '@view/organisms/layout';

import Header from '@view/organisms/Header';
import Stories from '@view/organisms/stories';
import PostList from '@view/organisms/PostList';

const Home = () => {
    return (
        <Layout>
            <Layout.Header>
                <Header />
            </Layout.Header>

            <Layout.Main>
                <Stories />
                <PostList />
            </Layout.Main>
        </Layout>
    );
};

export default Home;
