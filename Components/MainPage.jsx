import React from 'react';
import {LoginContent} from './LoginContent.jsx'
import {HomeContainer} from './HomeContainer.jsx'
import {AboutContainer} from './AboutContainer.jsx'
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  browserHistory
  // etc.
} from 'react-router-dom'

export class MainPage extends React.Component {

  componentWillMount(){
    this.setState({isLogin:false});
  }

   render() {
      return(

        <Router history={browserHistory}>

        <div>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path="/login" component={LoginContent}/>
              <Route exact path="/about" component={AboutContainer}/>
        </div>
      </Router>

      )
   }
}
