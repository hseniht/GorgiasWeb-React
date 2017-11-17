import React from 'react';


export class AboutUs extends React.Component {
  render (){
    return (
          <div className="section mcb-section" style={{paddingTop:50+"px", paddingBottom:50+"px", backgroundColor:"#292929", backgroundImage:"none", backgroundRepeat:"no-repeat", backgroundPosition:"center bottom"}}>
              <div className="section_wrapper mcb-section-inner">
                  <div className="wrap mcb-wrap one  valign-top clearfix">
                      <div className="mcb-wrap-inner">
                          <div className="column mcb-column one-second column_column" style={{float:"none",textAlign:"center",margin:30+"px auto"}}>
                              <div className="column_attr clearfix">
                                <div className="animate " data-anim-type="fadeInUp">

                                  <h2 className="tkFont1">About Us</h2>
                                  <hr className="no_line" style={{margin:0+" auto "+30+"px"}}/>
                                  <p style={{color:" #999c9e"}}>
                                    Our app makes it easy for everyone to get online with stunning, professional and functional web presence. Just complete freedom to express yourself and manage your entire business online..<br />
                                  </p>
                                  <p style={{color:"#999c9e"}}>But, not just a better app – a better way of doing things. A new kind of social tech company that works hand in hand with users to do something amazing, something meaningful.</p>

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
