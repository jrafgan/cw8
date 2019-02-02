import React, {Component, Fragment} from 'react';
import axios from "../../axios-instances";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

class EditQuote extends Component {
    state = {
        id: '',
        post: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            axios.get('quotes/' + id + '.json').then(response => {
                this.setState({id, quote: response.data});
            });
        }
    };

    editQuote = post => {
        axios.put('quotes/' + this.props.match.params.id + '.json', post).then(response => {
            this.props.history.push('/');
            this.setState({quote: response.data});
        });
        console.log('EDIT MODE', post);
    };

    render() {
        const postInfo = {...this.state.post, id: this.state.id};
        return (
            <Fragment>
                <h1>Edit Post</h1>
                <QuoteForm data={postInfo} submit={this.editQuote} />
            </Fragment>
        );
    };
}

export default EditQuote;