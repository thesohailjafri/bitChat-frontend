import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react';


import Post from "../components/Post";
function Home() {
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

    return (
        <div className='ui container'>
            <Grid columns={3}>
                <Grid.Row>
                    <h1>Recent Post</h1>
                </Grid.Row>
                <Grid.Row>
                    {loading ?
                        <h1>Loading</h1>
                        :
                        (posts &&
                            posts.map((post) =>
                                <Grid.Column>
                                    <Post data={post} />
                                </Grid.Column>
                            )
                        )}
                </Grid.Row>
            </Grid>
            {loading ?
                <h1>Loading</h1>
                :
                (posts && posts.map((post) => <Post key={post.id} data={post} />)
                )}

        </div>
    );
}

const FETCH_POSTS_QUERY = gql`
{
    getPosts{
    id
    body
    createdAt
    username
    likeCount
    commentCount
    likes{
        username
    }
    comments{
        id
        username
        createdAt
        body
    }
    }
}
`;

export default Home;
