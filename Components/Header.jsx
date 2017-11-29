import React from 'react';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  NavLink
  // etc.
} from 'react-router-dom'

import {LoginContent} from './LoginContent.jsx'
import {HomeContainer} from './HomeContainer.jsx'

export class Header extends React.Component {
  render (){
    return (
        <div id="Header_wrapper" className="bg-parallax" data-enllax-ratio="0.3">
          <header id="Header">
              <div className="header_placeholder"></div>

              <div id="Top_bar">
                  <div className="container">
                      <div className="column one">
                          <div className="top_bar_left clearfix">
                              <div className="logo">
                                  <a id="logo" href="index-musician.html" title="BeMusician - BeTheme">

                                    <h3 style={{color:"white",marginTop: 10+"px"}}>Gorgias</h3>
                                  </a>
                              </div>
                              <div className="menu_wrapper">
                                  <nav id="menu" className="menu-main-menu-container">
                                      <ul id="menu-main-menu" className="menu tk">
                                          <li >
                                              <NavLink exact to={"/"} activeStyle={{color:"red"}}><span>New Gorgias</span></NavLink>
                                          </li>
                                          <li>
                                            <Link to={"/login"}><span>Login</span></Link>
                                          </li>
                                          <li>
                                            <NavLink to={"/contact"} activeClassName={"activee"}><span>Contact</span></NavLink>
                                          </li>
                                          <li>
                                            <NavLink to={"/terms"} activeClassName={"activee"}><span>Terms</span></NavLink>
                                          </li>
                                          <li>
                                            <NavLink to={"/about"} activeClassName={"activee"}><span>About</span></NavLink>
                                          </li>
                                      </ul>
                                  </nav><a className="responsive-menu-toggle" href="#"><i className="icon-menu-fine"></i></a>
                              </div>
                              <div className="secondary_menu_wrapper"></div>
                              <div className="banner_wrapper"></div>
                              <div className="search_wrapper">
                                  <form method="get" id="searchform" action="#">
                                      <i className="icon_search icon-search-fine"></i><a href="#" className="icon_close"><i className="icon-cancel-fine"></i></a>
                                      <input type="text" className="field" name="s" id="s" placeholder="Enter your search" />
                                      <input type="submit" className="submit" value="" style={{display:"none"}} />
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



          </header>

        </div>
    );
  }
}
