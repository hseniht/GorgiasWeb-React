import React from 'react';
import {LoginContent} from './LoginContent.jsx'
import {MasterContent} from './MasterContent.jsx'
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  // etc.
} from 'react-router-dom'

export class MainPage extends React.Component {

  componentWillMount(){
    this.setState({isLogin:false});
  }

   render() {
      return(

        <Router>

        <div>
              <Route exact path="/" component={MasterContent}/>
              <Route exact path="/login" component={LoginContent}/>
              
        </div>
      </Router>

      )
   }
}
