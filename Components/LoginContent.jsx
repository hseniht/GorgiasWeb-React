import React from 'react';
import {LoginForm1} from './LoginSections/LoginForm1.jsx';
import {AppProfile} from './AppProfileSections/AppProfile.jsx';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  NavLink
  // etc.
} from 'react-router-dom'


export class LoginContent extends React.Component {
  render (){
    return (

            <div>
              <div className="goBack">
                <i className="icon-left-thin"></i>
                <NavLink exact to={"/"} activeStyle={{color:"red"}}><span>Back to Gorgias</span></NavLink>
              </div>

              <LoginForm1/>

              <footer id="Footer" className="clearfix" style={{backgroundColor:"rgba(0,0,0,0.5)", position:"fixed"}}>
                <div className="footer_copy">
                  <div className="container">
                    <div className="column one" style={{marginBottom:10+"px",paddingTop:20+"px"}}>
                      <div className="copyright">
                        &copy; 2017 Gogias &amp; Co. All Rights Reserved. <a target="_blank" rel="nofollow" href="#">Gorgias</a>
                      </div>
                      <ul className="social"></ul>
                    </div>
                  </div>
                </div>
              </footer>

            </div>


    );
  }
}
