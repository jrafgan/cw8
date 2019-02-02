import React, { Component } from 'react';
import './App.css';
import NavLink from "react-router-dom/es/NavLink";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo_div">Quotes Central</div>
          <div className="menu_div">
            <NavLink to='/quotes'>Quotes</NavLink>
            <span>|</span>
            <NavLink to='/new_quotes'>Submit new quote</NavLink>
          </div>
        </header>
        <div className="body">
          <div className="left_side_bar">
            <ul>
              <li>All</li>
              <li>Star Wars</li>
              <li>Famous People</li>
              <li>Saying</li>
              <li>Humor</li>
              <li>Motivational</li>
            </ul>
          </div>
          <div className="main_bar">
            <div className="title">All</div>
            <div className="quotes"><div className='quote_text'>qvhqourhvqvquhuvhqwdoivhpor</div><div className='buttons_div'><button>Edit</button><button>Delete</button></div></div>
            <div className="quotes"><div className='quote_text'>qvhqourhvqvquhuvhqwdoivhpor</div><div className='buttons_div'><button>Edit</button><button>Delete</button></div></div>
            <div className="quotes"><div className='quote_text'>qvhqourhvqvquhuvhqwdoivhpor</div><div className='buttons_div'><button>Edit</button><button>Delete</button></div></div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={PostList}/>
          <Route path="/posts/add" exact render={(props) => <AddPost {...props} />}/>
          <Route path="/posts/:id" exact render={(props) => <FullPost {...props}/>}/>
          <Route path="/posts/:id/edit"  render={(props) => <EditPost {...props} />}/>
          <Route path="/about" exact render={() => <h1>About</h1>}/>
          <Route path="/contact" exact component={FullPost}/>
        </Switch>
      </div>
    );
  }
}

export default App;
