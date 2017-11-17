import React from 'react';


export class CelebGrid extends React.Component {
  render (){
    return (
            <div class="section mcb-section tkSection-paddingBottom-only bg-color-1">
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
                                          <li className="tags">
                                              <a className="open" href="#"><i className="icon-tag"></i>Tags<i className="icon-down-dir"></i></a>
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

                                          <ul className="tags">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" href="#">Show all</a>
                                              </li>
                                              <li className="design">
                                                  <a data-rel=".tag-design" href="content/journalist/tag-design.html">Design</a>
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

                                  <div className="blog_wrapper isotope_wrapper clearfix">
                                      <div className="posts_group lm_wrapper col-5 masonry tiles isotope">

                                          <div className="post-item isotope-item clearfix post-2277 post  format-standard has-post-thumbnail  category-lifestyle category-technology tag-video ">
                                              <div className="date_label">
                                                  May 8, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="tkImages/profile-4992.jpg" className="scale-with-grid wp-post-image" alt="home_journalist_blog7" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">May 8, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-lifetime.html" rel="category tag">Lifestyle</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="content/journalist/category-technology.html" rel="category tag">Technology</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-11.html">陳白白</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          <p className="big">
                                                              Grid 1 Nunc felis. Curabitur ac ipsum. Pellentesque nibh ultricies est. Maecenas consequat, augue a venenatis risus. Ut id mollis vel, lacinia quam. Praesent blandit malesuada. Suspendisse commodo
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2279 post  format-standard has-post-thumbnail  category-technology tag-motion tag-video">
                                              <div className="date_label">
                                                  May 7, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-2863.jpg?timestamp=887" className="scale-with-grid wp-post-image" alt="home_journalist_blog14" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">May 7, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-technology.html" rel="category tag">Technology</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger" style={{marginBottom:0+"px"}}><a href="content/journalist/item-12.html">Serene Khoo</a></h2>
                                                          <h2 className="entry-title larger tkFontSecondaryName" style={{marginBottom:0+"px"}}><a href="content/journalist/item-12.html">Serene Khoo</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vella ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2281 post  format-standard has-post-thumbnail  category-technology ">
                                              <div className="date_label">
                                                  May 6, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-4125.jpg?timestamp=305" className="scale-with-grid wp-post-image" alt="home_journalist_blog10" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">May 6, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-technology.html" rel="category tag">Technology</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-13.html">Grid 3</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          <p className="big">
                                                              Aliquam adipiscing felis tincidunt eget, euismod pede eu cursus at, suscipit a, lorem. Morbi sodales wisi placerat eget, elementum eu, ullamcorper ac
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2289 post  format-standard has-post-thumbnail  category-sport category-technology tag-design ">
                                              <div className="date_label">
                                                  May 4, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-3301.jpg?timestamp=887" className="scale-with-grid wp-post-image" alt="home_journalist_blog13" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">May 4, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-sport.html" rel="category tag">Sport</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="content/journalist/category-technology.html" rel="category tag">Technology</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-3.html">Grid 4</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Donec tempus, urna risus nec mauris. Lorem ipsum primis in nulla ac arcu vitae augue. Vivamus nec elit a dui. Morbi id leo nec dui. Maecenas.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2291 post  format-standard has-post-thumbnail  category-lifestyle ">
                                              <div className="date_label">
                                                  May 1, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-2861.jpg?timestamp=887" className="scale-with-grid wp-post-image" alt="home_journalist_blog12" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">May 1, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-lifetime.html" rel="category tag">Lifestyle</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-4.html">Grid 5</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Sed justo vulputate et, lobortis augue quam quam sed sem. Sed sed leo ac nunc sit amet leo. Integer faucibus orci sit amet quam felis vitae justo.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2295 post  format-standard has-post-thumbnail  category-lifestyle  category-technology tag-motion tag-video">
                                              <div className="date_label">
                                                  April 29, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-3302.jpg?timestamp=305" className="scale-with-grid wp-post-image" alt="home_journalist_blog8" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">April 29, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-lifetime.html" rel="category tag">Lifestyle</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="content/journalist/category-news.html" rel="category tag">News</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="content/journalist/category-technology.html" rel="category tag">Technology</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-6.html">Grid 7</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Phasellus vitae ornare varius, quam nunc, tempus purus. Pellentesque malesuada arcu magna, gravida at, convallis ac, accumsan lorem.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2297 post  format-standard has-post-thumbnail  category-sport  ">
                                              <div className="date_label">
                                                  April 28, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-4118.jpg?timestamp=887" className="scale-with-grid wp-post-image" alt="home_journalist_blog9" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">April 28, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-news.html" rel="category tag">News</a>
                                                                          </li>
                                                                          <li>
                                                                              <a href="content/journalist/category-sport.html" rel="category tag">Sport</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-7.html">Grid 8</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Donec est. Vivamus iaculis, diam eu arcu congue eleifend. Vestibulum commodo ligula ut augue. Maecenas pretium, diam id pharetra.
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="post-item isotope-item clearfix post-2356 post  format-standard has-post-thumbnail  category-sport tag-design">
                                              <div className="date_label">
                                                  March 12, 2014
                                              </div>
                                              <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src="https://gorgiasasia.blob.core.windows.net/images/profile-2382.jpg?timestamp=305" className="scale-with-grid wp-post-image" alt="home_journalist_blog6" />
                                              </div>
                                              <div className="post-desc-wrapper">
                                                  <div className="post-desc">
                                                      <div className="post-head">
                                                          <div className="post-meta clearfix">
                                                              <div className="author-date hidden">
                                                                  <span className="vcard author post-author"><span className="label">Published by </span><i className="icon-user"></i> <span className="fn"><a href="#">Muffin Group</a></span></span><span className="date"><span className="label">at </span><i className="icon-clock"></i> <span className="post-date updated">March 12, 2014</span></span>
                                                              </div>
                                                              <div className="category">
                                                                  <span className="cat-btn">Categories <i className="icon-down-dir"></i></span>
                                                                  <div className="cat-wrapper">
                                                                      <ul className="post-categories">
                                                                          <li>
                                                                              <a href="content/journalist/category-sport.html" rel="category tag">Sport</a>
                                                                          </li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="post-title">
                                                          <h2 className="entry-title larger"><a href="content/journalist/item-17.html">Grid 9</a></h2>
                                                      </div>
                                                      <div className="post-excerpt">
                                                          Praesent consequat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum massa dui sed nulla ut nulla a mi. Fusce wisi nibh [&hellip;]
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                      {/*One full width row*/}
                                      <div className="column one pager_wrapper pager_lm" style={{paddingTop: 7+"%"}}>
                                          <a className="pager_load_more button button_js" href="#" style={{borderRadius: 30+"px",borderWidth:1+"px"}}>

                                            <span className="button_label" style={{padding:11+"px "+40+"px"}}>Load more</span></a>
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
