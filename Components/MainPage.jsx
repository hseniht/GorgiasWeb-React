import React from 'react';
import {LoginContent} from './LoginContent.jsx'
import {HomeContainer} from './HomeContainer.jsx'
import {AboutContainer} from './AboutContainer.jsx'
import {TermsContainer} from './TermsContainer.jsx'
import {ContactContainer} from './ContactContainer.jsx'
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

        <Router onUpdate={()=> window.scrollTo(0,0)} history={browserHistory}>
            <div>
                <Route exact path="/" component={HomeContainer}/>
                <Route exact path="/login" component={LoginContent}/>
                <Route exact path="/about" component={AboutContainer}/>
                <Route exact path="/terms" component={TermsContainer}/>
                <Route exact path="/contact" component={ContactContainer}/>
           </div>
       </Router>

      )
   }
}
