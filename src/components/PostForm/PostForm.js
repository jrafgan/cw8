import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class PostForm extends Component {
    state = {
        title: '',
        description: ''
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.submit({...this.state});
    };

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
          this.setState({title: this.props.data.title, description: this.props.data.description});
      }
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.valueChanged} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Text" style={{height: '300px'}} value={this.state.description} onChange={this.valueChanged} />
                </FormGroup>
                <Button>{this.props.data ? 'Update Post' : 'Add Post'}</Button>
            </Form>
        );
    }
}

export default PostForm;