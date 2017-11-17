import React from 'react';


export class MissionVision extends React.Component {
  render (){
    return (
                <div className="section mcb-section" style={{paddingTop:50+"px",paddingBottom:50+"px", backgroundColor:"whitesmoke", backgroundImage:"none", backgroundRepeat:"no-repeat", backgroundPosition:"center bottom"}}>
                      <div className="section_wrapper mcb-section-inner">

                          <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 0+"px auto"}}>
                              <div className="mcb-wrap-inner">

                                    <div className="column mcb-column one-third column_column ">
                                      <div className="animate " data-anim-type="fadeInUpLarge">
                                         <div className="column_attr clearfix align_center tkPanels">
                                            <h4>Our Mission</h4>
                                            <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                <div className="image_wrapper"><img className="scale-with-grid" src="images/home_surveyor_sep2.png" alt="home_surveyor_sep2" width="24" height="2"/>
                                                </div>
                                            </div>
                                            <hr className="no_line" style={{margin: 0+" auto "+30+"px"}}/>
                                            <p>
                                                Donec euismod nibh, sollicitudin quis, dictum arcu. Etiam nibh porta et, felis. Maecenas ac ligula ut arcu. In sodales eros.
                                            </p>
                                          </div>
                                      </div>
                                    </div>

                                    <div className="column mcb-column one-third column_column ">
                                      <div className="animate " data-anim-type="fadeInUp">
                                        <div className="column_attr clearfix align_center tkPanels">
                                            <h4>Our Vision</h4>
                                            <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                <div className="image_wrapper"><img className="scale-with-grid" src="images/home_surveyor_sep2.png" alt="home_surveyor_sep2" width="24" height="2"/>
                                                </div>
                                            </div>
                                            <hr className="no_line" style={{margin: 0+" auto "+30+"px"}}/>
                                            <p>
                                              Mauris sit amet, aliquam at, suscipit dolor. In molestie a, mattis id, condimentum odio a wisi. Nam non imperdiet felis, volutpat metus.
                                            </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="column mcb-column one-third column_column ">
                                        <div className="column_attr clearfix align_center" style={{padding:0+" "+10+"% "+0+" "+10+"%"}}>
                                          <div className="animate " data-anim-type="fadeInRightLarge">
                                           <div className="tklist content_slider_li_1">

                                            <div>
                                              <img width="287" height="339" className="tk fit3" src="https://gorgiasasia.blob.core.windows.net/images/profile-2382.jpg?timestamp=403" alt=""/>
                                            </div>
                                            <div className="desc" style={{height:"auto"}}>
                                                <p className="tkFont1" style={{color:"black",fontWeight:"bold",fontSize: "x-large"}}>Chris Wong</p>
                                                <p style={{color:"gray"}}>Founder</p>
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
