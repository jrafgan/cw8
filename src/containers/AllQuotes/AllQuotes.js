import React, {Component, Fragment} from 'react';
import ShortQuote from "../../components/Quote/ShortQuote";
import axios from '../../axios-instances';
import {CATEGORIES} from "../../Categories";
import './AllQuotes.css'
import NavLink from "react-router-dom/es/NavLink";

class AllQuotes extends Component {
    state = {
        quotes: []
    };

    componentDidMount() {
        axios.get('quotes.json').then(response => {
            const quotes = Object.keys(response.data).map(id => {
                console.log({...response.data[id], id});
                return {...response.data[id], id};
            });
            this.setState({quotes: quotes});
            console.log(this.state);
        });

    };

    readHandler= id => {
      this.props.history.push('/quotes/' + id);
    };

    render() {
        if (!this.state.quotes) return null;

        const quotes = this.state.quotes.map(item=>(

                <ShortQuote
                    key={item.id}
                    author={item.author}
                    quote={item.quote}
                    readClicked={() => this.readHandler(item.id)}

                />

            ));
        console.log(this.state);
        return (
            <div className='main_div'>
                <div className='leftBar'>
                    <ul>
                        <p>All</p>
                        <li><NavLink onClick={this.readHandler} to='/star_wars'>Star Wars</NavLink></li>
                        <li><NavLink onClick={this.readHandler} to='/famous_people'>Famous People</NavLink></li>
                        <li><NavLink onClick={this.readHandler} to='/saying'>Saying</NavLink></li>
                        <li><NavLink onClick={this.readHandler} to='/humor'>Humor</NavLink></li>
                        <li><NavLink onClick={this.readHandler} to='/motivational'>Motivational</NavLink></li>
                    </ul>
                </div>
                <div className="quotes_list">
                    {quotes}
                </div>
            </div>
        );
    }
}

export default AllQuotes;