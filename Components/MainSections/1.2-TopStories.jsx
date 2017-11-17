import React from 'react';


export class TopStories extends React.Component {
  render (){
    return (
        <div className="section mcb-section full-width tkSection-paddingBottom-only">
              <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 50+"px auto"}}>
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column ">
                                <div className="column_attr clearfix" style={{padding: 0 +" "+ 8+"%"}}>
                                  <h3 className="tkFont1" style={{color:"white"}}>Top Stories</h3>
                                </div>
                              </div>
                            <div className="column mcb-column one column_slider ">
                                <div className="content_slider carousel">
                                    <ul className="content_slider_ul tk">

                                        <li className=" floatr tklist content_slider_li_1">
                                          <div>
                                            <img width="287" height="339" className="tk fit2" src="tkImages/Hyuna.jpg" alt=""/>
                                          </div>
                                          <div className="desc">
                                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                              <p className="tkBottom-p-font">24 <i className="icon-eye"></i> 8<i className="icon-comment-fa"></i></p>

                                          </div>
                                          <div className="full-card-overlay">
                                            <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>
                                          
                                          </div>
                                        </li>

                                        <li className="floatr tklist content_slider_li_1">
                                          <div>
                                            <img width="287" height="339" className="tk fit2" src="https://c1.staticflickr.com/1/373/20087838980_ee014bbcc6_b.jpg" alt=""/>
                                          </div>
                                          <div className="desc">
                                            <p>Lorem Ipsum is simply dummy text of the printing ...</p>
                                            <p className="tkBottom-p-font">24 Views</p>
                                          </div>
                                          <div className="full-card-overlay">
                                            <div className="tk tp-caption Photography-Button rev-btn ">Open In App</div>
                                          </div>
                                        </li>

                                        <li className="floatr tklist content_slider_li_1">
                                          <div>
                                            <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/albums/album-01e59f82-f07f-4ed1-8285-f5c9a0e760f1.jpg" alt=""/>
                                          </div>
                                          <div className="desc">
                                            <p>Lorem Ipsum ...</p>
                                            <p className="tkBottom-p-font">24 Views</p>
                                          </div>
                                          <div className="full-card-overlay">
                                            <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>
                                          </div>
                                        </li>

                                        <li className="floatr tklist content_slider_li_1">
                                          <div>
                                            <img width="287" height="339" className="tk fit2" src="tkImages/coverModel4.jpg" alt=""/>
                                          </div>
                                          <div className="desc">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                            <p className="tkBottom-p-font">24 Views</p>
                                          </div>
                                          <div className="full-card-overlay">
                                            <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>
                                          </div>
                                        </li>

                                        <li className="floatr tklist content_slider_li_1">
                                          <div>
                                            <img width="287" height="339" className="tk fit2" src="tkImages/profile-4992.jpg" alt=""/>
                                          </div>
                                          <div className="desc">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...</p>
                                            <p className="tkBottom-p-font">24 Views</p>
                                          </div>
                                          <div className="full-card-overlay">
                                            <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>
                                          </div>
                                        </li>

                                    </ul><a className="button button_js slider_prev" href="#"><span className="button_icon"><i className="icon-left-open-big"></i></span></a><a className="button button_js slider_next" href="#"><span className="button_icon"><i className="icon-right-open-big"></i></span></a>
                                  <div className="slider_pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    );
  }
}
