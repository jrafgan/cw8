import React, {Component, Fragment} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import axios from '../../axios-instances';

class AddQuote extends Component {
    addQuote = post => {
        axios.quote('quotes.json', post).then(()=>{
            this.props.history.replace('/');
        })
    };

    render() {
        return (
            <Fragment>
                <h1>Add Quote</h1>
                <QuoteForm submit={this.addQuote} />
            </Fragment>
        );
    };
}

export default AddQuote;