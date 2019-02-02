import React, {Component} from 'react';
import axios from '../../axios-instances';
import { Jumbotron, Button } from 'reactstrap';

class FullQuote extends Component {
    state = {
        id: null,
        post: null,
    };

    componentDidMount() {
        this.setState({id: this.props.match.params.id });
        axios.get('quotes/' + this.props.match.params.id + '.json').then(response => {
            this.setState({post: response.data});
        });
    };

    editHandler = id => {
        console.log(id);
        this.props.history.push('/quotes/' + id + '/edit');
    };

    deleteHandler = id => {
        if (window.confirm('Do you really want to remove this post ?')) {
            axios.delete('quotes/' + id + '.json').then(()=>{
                alert('Пост удален !');
                this.props.history.replace('/');
            });
        }
    };

    render() {
        if (!this.state.post) return null;

        return (
            <div className={"item-" + this.state.id}>
                <Jumbotron>
                    <h2 className="display-3">{this.state.post.author}</h2>
                    <hr className="my-2" />
                    <p className="lead">{this.state.post.quote}</p>


                </Jumbotron>
                <p className="lead float-right">
                    <Button color="primary" onClick={() => this.editHandler(this.state.id)}>Edit Post</Button>
                    <Button color="danger" onClick={() => this.deleteHandler(this.state.id)}>Delete Post</Button>
                </p>
            </div>
        );
    }
}

export default FullQuote;