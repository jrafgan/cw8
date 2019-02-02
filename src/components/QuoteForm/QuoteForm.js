import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {CATEGORIES} from "../../Categories";

class QuoteForm extends Component {
    state = {
        category: Object.keys(CATEGORIES)[0],
        author: '',
        quote: '',
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
        console.log(this.state);
        if (prevProps.data !== this.props.data) {
            this.setState({author: this.props.data.author, quote: this.props.data.quote});
        }
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type='select' name='category' id='category' value={this.state.category}
                           onChange={this.valueChanged}>
                        {Object.keys(CATEGORIES).map(categoryId => (
                            <option value={categoryId} key={categoryId}>{CATEGORIES[categoryId]}</option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input type="text" name="author" id="author" placeholder="Author" value={this.state.author}
                           onChange={this.valueChanged}/>
                </FormGroup>
                <FormGroup>
                    <Label for="quote">Quote</Label>
                    <Input type="textarea" name="quote" id="quote" placeholder="Quote" style={{height: '300px'}}
                           value={this.state.quote} onChange={this.valueChanged}/>
                </FormGroup>
                <Button>{this.props.data ? 'Update Quote' : 'Add Quote'}</Button>
            </Form>
        );
    }
}

export default QuoteForm;