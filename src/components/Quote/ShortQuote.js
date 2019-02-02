import React from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';
// import Buttons from "../Buttons/Buttons";
import NavLink from "react-router-dom/es/NavLink";

const ShortQuote = props => {
    console.log(props);
    return (

        <Card body>

            <CardText>{props.quote}</CardText>
            <CardTitle>{props.author}</CardTitle>

            <p className="lead float-right">
                <NavLink to='/quotes/:id/edit'><Button color="primary">Edit Post</Button></NavLink>
                <NavLink to='/quotes/:id/edit'><Button color="danger">Delete Post</Button></NavLink>
            </p>
        </Card>
    );
};

export default ShortQuote;