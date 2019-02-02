import React, {Component} from 'react';
import axios from '../../axios-instances';
import {Button, Jumbotron} from 'reactstrap';
// import Buttons from "../Buttons/Buttons";
import NavLink from "react-router-dom/es/NavLink";

class FullQuote extends Component {
    state = {
        id: null,
        quote: null,
        category: null,
    };

    componentDidMount() {
            console.log(this.props);
         this.setState({id: this.props.match.params.id });
         axios.get('quotes/' + this.props.match.params.id + '.json').then(response => {
             this.setState({quote: response.data});
         });
    };

    console=()=>{
      console.log('full quote');
    };

    editHandler = id => {
        console.log(id);
        this.props.history.push('/quotes/' + id + '/edit');
    };

    deleteHandler = id => {
        if (window.confirm('Do you really want to remove this quote ?')) {
            axios.delete('quotes/' + id + '.json').then(()=>{
                this.props.history.replace('/');
            });
        }
    };

    render() {
        if (!this.state.quote) return null;

        return (
            <div className={"item-" + this.state.id}>
                <p>{this.state.quote.category}</p>
                <Jumbotron>

                    <h2 className="display-3">{this.state.quote.author}</h2>
                    <hr className="my-2" />
                    <p className="lead">{this.state.quote.quote}</p>


                </Jumbotron>
                <p className="lead float-right">
                    <NavLink to='/quotes/:id/edit'><Button color="primary" onClick={this.editHandler}>Edit Post</Button></NavLink>
                    <Button color="danger" onClick={this.deleteHandler}>Delete Post</Button>
                </p>
            </div>
        );
    }
}

export default FullQuote;