import React, {Component} from 'react';
import ShortQuote from "../../components/Quote/ShortQuote";
import axios from '../../axios-instances';
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
                    category={item.category}
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
                        {this.state.quotes.map((item, index)=>{
                            return <li key={index}><NavLink onClick={this.readHandler} to={'/quotes/' + item.id + '&' + item.category + '&' + item.author + '&' + item.quote}>{item.category}</NavLink></li>
                        })}
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