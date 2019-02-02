import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Header from "./components/Header/Header";
import AddQuote from "./containers/AddQuote/AddQuote";
import './App.css';
import AllQuotes from "./containers/AllQuotes/AllQuotes";
import FullQuote from "./components/Quote/FullQuote";
import EditQuote from "./containers/EditQuote/EditQuote";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Container>
              <Switch>
                  <Route path="/" exact component={AllQuotes}/>
                  <Route path="/quotes/add" exact render={(props) => <AddQuote {...props} />}/>
                  <Route path="/quotes/:id&:category&:author&:quote" exact render={(props) => <FullQuote {...props}/>}/>
                  <Route path="/quotes/:id/edit"  render={(props) => <EditQuote {...props} />}/>
                  <Route path="/about" exact render={() => <h1>About</h1>}/>
                  <Route path="/contact" exact component={FullQuote}/>
              </Switch>

          </Container>
      </div>
    );
  }
}

export default App;
