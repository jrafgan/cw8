import React from 'react';
import { Card, Button, CardTitle, CardText} from 'reactstrap';

const ShortPost = props => {
    return (
        <Card body>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <Button onClick={props.readClicked}>Read</Button>
        </Card>
    );
};

export default ShortPost;