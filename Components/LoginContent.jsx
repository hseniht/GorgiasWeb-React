import React from 'react';
import {LoginForm1} from './LoginSections/LoginForm1.jsx';
import {AppProfile} from './AppProfileSections/AppProfile.jsx';


export class LoginContent extends React.Component {
  render (){
    return (

            <div>
              <div className="goBack">
                <i className="icon-left-thin"></i>
                <a href="index-GorgiasFull.html">go back to Gorgias</a>
              </div>

              <AppProfile/>

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
