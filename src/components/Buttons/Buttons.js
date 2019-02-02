import React, {Fragment} from 'react';
import NavLink from "../Quote/FullQuote";
import {Button} from "reactstrap";

const Buttons = () => {
    return (
        <Fragment>
            <NavLink to='/quotes/:id/edit'><Button color="primary">Edit Post</Button></NavLink>
            <NavLink to='/quotes/:id/edit'><Button color="danger">Delete Post</Button></NavLink>
        </Fragment>
    );
};

export default Buttons;