import React from 'react';

export class LoginForm1 extends React.Component {
  render (){
    return (
        <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content">
                {/*login*/}
                <div className="section dark" id="featured" style={{height: 100+"vh", backgroundImage:"url(https://www.wallpaperup.com/uploads/wallpapers/2015/09/22/808178/00e8bff9f8589282d95264db8916df89.jpg)", backgroundRepeat:"no-repeat", backgroundPosition:"center top", backgroundSize:"cover"}}>
                    <div className="section_wrapper clearfix">
                      <div className="items_group clearfix" style={{height: 100+"vh"}}>
                         <div id="tk-modal-form" style={{color: "#de0083"}}>
                           <div className="animate " data-anim-type="fadeIn">
                            <div id="tk-overlay-form">
                               <form>

                                    <label className="login-label tkFont1 tkFont-Form">Email:</label>
                                    <i className="icon-user inputIcons"></i>
                                    <input type="email" style={{textAlign: "left"}} placeholder="Username or email" onfocus="this.placeholder=''" onblur="this.placeholder='Username or email'" required=""/>

                                    <label className="login-label tkFont1 tkFont-Form">Password:</label>
                                    <i className="icon-lock inputIcons"></i>
                                    <input type="password" style={{textAlign:"left"}} ng-model="loginData.password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'" required=""/>

                                    <div className="column one" style={{margin:0}}>
                                        <input type="submit" value="Login" id="submit" className="tkFont-Bold" onClick="return check_values();"/>
                                    </div>
                                    <a href="#" className="forget" ng-click="toggleLayout(2)">Forgot Password?</a>
                                    {/*error messsage*/}
                                    <div className="login-action error-message ng-binding">
                                        <span className="tkFontSmall" style={{color:"#ff0088"}}>The user name or password is incorrect.</span>
                                    </div>
                                </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>

    );
  }
}
