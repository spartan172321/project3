// Include React
import React, { Component } from 'react'

// Include the react-router module
import {BrowserRouter, Switch} from "react-router-dom";

// Grabs the Routes
import Routes from './config/routes';

// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from 'react-router-dom';

// Here we include all of the sub-components
import List from './List';
import Edit from './Edit';
import Maps from './Maps'

// Requiring our helper for making API calls
import helpers from '../utils/helpers';

// Create the Main component
class Main extends Component {
  // Here we render the component
  render() {

    return (
      <div className="Main">

        <List />

        <div className="Container">

          {/* Added this.props.children to dump all of the child components into place */}
          {this.props.children}

          {/* ROUTES that will be render to our LINKS */}
          <Route exact path="/" component={Maps} />
          <Route exact path="/edit" component={Edit} />

        </div>
          
      </div>

    )
  }
}

export default Main;