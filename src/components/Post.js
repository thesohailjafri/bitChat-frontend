import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import moment from "moment";


function Post({ data: { body, commentCount, id, likeCount, username, createdAt } }) {
    // const {username,meta,body,likesCount,commentCount,id}=data
    return (
        <div key={id}>
            <Card fluid>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                    />
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                    <Card.Description>
                        {body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            {likeCount}
                        </Button>
                        <Button basic color='red'>
                            {commentCount}
                        </Button>
                    </div>
                </Card.Content>
            </Card>

        </div>
    );
}

export default Post;
