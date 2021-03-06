import React from 'react';


export class TopStories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isLoading: true,
    };
  }

  componentWillMount(){
    var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Stories/Latest/10/1";
    var that = this;

    fetch(url)
      .then(function(response) {

        return response.json();
      })
      .then(function(data) {
        that.setState({ items: data.Result.Items, isLoading:false });
        console.log(that.state.items);
      });
  }

  renderStory(story){
    return (
      <li key={story.AlbumID} className="floatr tklist content_slider_li" style={{width:200 + "px", float:"left",}}>
        <div>
          <img width="287" height="339" className="tk fit2" src={story.cdnAlbumCover} alt=""/>
        </div>
        <div className="desc">
          <p>{story.AlbumName}</p>
          <p className="tkBottom-p-font">24</p>
        </div>
        <div className="full-card-overlay">
          <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>

        </div>
      </li>
    )
  }

  render (){
    return (
      !this.state.isLoading ?
      <div className="section mcb-section full-width tkSection-paddingBottom-only">
        <div className="section_wrapper mcb-section-inner">
          <div className="wrap mcb-wrap one  valign-top clearfix">
            <div className="mcb-wrap-inner">
              <div className="column mcb-column one column_column ">
                <div className="column_attr clearfix" style={{padding: 0 +" "+ 8+"%"}}>
                  <h3 className="tkFont1" style={{color:"white"}}>Top Stories</h3>
                </div>
              </div>
              <div className="column mcb-column one column_slider ">
                <div className="content_slider carousel">

                  <ul className="content_slider_ulio tk">
                    {this.state.items.map(item => this.renderStory(item))}
                  </ul>
                  <a className="button button_js slider_prev" href="#"><span className="button_icon"><i className="icon-left-open-big"></i></span></a><a className="button button_js slider_next" href="#"><span className="button_icon"><i className="icon-right-open-big"></i></span></a>
                  <div className="slider_pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        : <h3>Loading</h3>
    );
  }
}
