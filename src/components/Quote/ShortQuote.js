import React from 'react';
import { Card, Button, CardTitle, CardText} from 'reactstrap';

const ShortQuote = props => {

    return (

        <Card body>

            <CardText>{props.quote}</CardText>
            <CardTitle>{props.author}</CardTitle>

            <p className="lead float-right">
                <Button color="primary" onClick={() => this.editHandler(this.state.id)}>Edit Post</Button>
                <Button color="danger" onClick={() => this.deleteHandler(this.state.id)}>Delete Post</Button>
            </p>
        </Card>
    );
};

export default ShortQuote;