import React from 'react';


export class CelebGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isLoading: true,
    };

this.handleLoadMore = this.handleLoadMore.bind(this);

  }

  componentWillMount(){
    var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
    var that = this;

    var bodyData = {
      CountryID : null,
      Industries : [],
      ProfileTypeID : null,
      ProfileID : null,
      OrderType : 1,
      Tags : [],
      Location : null,
      PageNumber : 1,
      PageSize : 15,
      SubscriptionTypeID : 3
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData)
    }).then(function(response) {

      return response.json();
    })
    .then(function(data) {
      that.setState({ profiles: data.Result, isLoading:false, filteringData: bodyData });

      console.log(data);

    });
  }

  renderProfile(profileData){
    return (
      <div key={profileData.ProfileID} className="post-item isotope-item clearfix post-2277 post  format-standard has-post-thumbnail  category-lifestyle category-technology tag-video author-admin">
          <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src={profileData.ProfileImage} className="scale-with-grid wp-post-image" alt="home_journalist_blog7" />
          </div>
          <div className="post-desc-wrapper">
              <div className="post-desc">
                  <div className="post-title">
                      <h2 className="entry-title larger"><a href="content/journalist/item-11.html">{profileData.ProfileFullname}</a></h2>
                      <h2 className="entry-title larger tkFontSecondaryName" style={{marginBottom:0+"px"}}><a href="content/journalist/item-12.html">{profileData.ProfileURL}</a></h2>
                  </div>
              </div>
          </div>
      </div>
    )
  }

handleLoadMore() {
  console.log("im working");
  var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
  var that = this;

  var bodyData = this.state.filteringData;
  bodyData.PageNumber += 1;
  console.log(bodyData);


  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData)
  }).then(function(response) {

    return response.json();
  })
  .then(data => {
    const newResult = this.state.profiles.concat(data.Result);
    this.setState({ profiles:newResult, isLoading:false, filteringData: bodyData });


  });
}


  render (){
    return (
            !this.state.isLoading ?
            <div className="section mcb-section tkSection-paddingBottom-only bg-color-1">
                  <div className="section_wrapper clearfix">
                      <div className="items_group clearfix">
                          {/* One full width row*/}
                          <div className="column one column_blog ">
                              <div className="column_filters">
                                  {/* Filter Area*/}
                                  <div id="Filters" className="isotope-filters" data-parent="column_filters" style={{margin: 30+"px",fontSize: 16+"px", marginLeft: "auto",marginRight: "auto", marginTop: 30+"px",marginBottom: 30+"px",width:"fit-content"}}>

                                      <ul className="filters_buttons">
                                          <li className="label">
                                              Filter by
                                          </li>
                                          <li className="categories">
                                              <a className="open" href="#"><i className="icon-docs"></i>Categories<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="countries">
                                              <a className="open" href="#"><i className="icon-tag"></i>Countries<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="authors">
                                              <a className="open" href="#"><i className="icon-user"></i>Authors<i className="icon-down-dir"></i></a>
                                          </li>
                                      </ul>

                                      <div className="filters_wrapper">

                                          <ul className="categories">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" href="#">Show all</a>
                                              </li>
                                              <li className="hot-news">
                                                  <a data-rel=".category-hot-news" href="content/journalist/category-hot-news.html">Hot news</a>
                                              </li>
                                              <li className="lifestyle">
                                                  <a data-rel=".category-lifestyle" href="content/journalist/category-lifetime.html">Lifestyle</a>
                                              </li>
                                              <li className="news">
                                                  <a data-rel=".category-news" href="content/journalist/category-news.html">News</a>
                                              </li>
                                              <li className="sport">
                                                  <a data-rel=".category-sport" href="content/journalist/category-sport.html">Sport</a>
                                              </li>
                                              <li className="technology">
                                                  <a data-rel=".category-technology" href="content/journalist/category-technology.html">Technology</a>
                                              </li>
                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                          <ul className="countries">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" href="#">Show all</a>
                                              </li>
                                              <li className="malaysia">
                                                  <a data-rel=".tag-malaysia" href="content/journalist/tag-design.html">Malaysia</a>
                                              </li>
                                              <li className="framework">
                                                  <a data-rel=".tag-framework" href="content/journalist/tag-framework.html">Framework</a>
                                              </li>
                                              <li className="grid">
                                                  <a data-rel=".tag-grid" href="content/journalist/tag-grid.html">Grid</a>
                                              </li>
                                              <li className="motion">
                                                  <a data-rel=".tag-motion" href="content/journalist/tag-motion.html">Motion</a>
                                              </li>
                                              <li className="themeforest">
                                                  <a data-rel=".tag-themeforest" href="content/journalist/tag-themeforest.html">Themeforest</a>
                                              </li>
                                              <li className="video">
                                                  <a data-rel=".tag-video" href="content/journalist/tag-video.html">Video</a>
                                              </li>
                                              <li className="wordpress">
                                                  <a data-rel=".tag-wordpress" href="content/journalist/tag-wordpress.html">Wordpress</a>
                                              </li>
                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                          <ul className="authors">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" href="#">Show all</a>
                                              </li>
                                              <li className="admin">
                                                  <a data-rel=".author-admin" href="#">Muffin Group</a>
                                              </li>
                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                      </div>
                                  </div>

                                  <div className="blog_wrapper clearfix">
                                      <div className="posts_group lm_wrapper col-5 masonry tiles isotope">

                                          {this.state.profiles.map(item => this.renderProfile(item))}

                                      </div>
                                      {/*One full width row*/}
                                      <div className="column one pager_wrapper pager_lm" style={{paddingTop: 7+"%"}}>
                                          <a className="pager_load_more button button_js" style={{borderRadius: 30+"px",borderWidth:1+"px"}}>

                                            <span onClick={this.handleLoadMore} className="button_label" style={{padding:11+"px "+40+"px"}}>Load more</span></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            :
            <h3>Loading</h3>
    );
  }
}
