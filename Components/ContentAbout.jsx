import React from 'react';

import {AboutHeadingCover} from './AboutPageSection/1-AboutHeadingCover.jsx';
import {AboutUs} from './AboutPageSection/2-AboutUs.jsx';
import {OurStory} from './AboutPageSection/3-OurStory.jsx';
import {MissionVision} from './AboutPageSection/4-MissionVision.jsx';
import {ImageBanner} from './AboutPageSection/5-ImageBanner.jsx';
import {TextTilesPanels} from './AboutPageSection/6-TextTilesPanels.jsx';
import {Teams} from './AboutPageSection/7-Teams.jsx';
import {AppDownloadBanner} from './AboutPageSection/8-AppDownloadBanner.jsx';


export class ContentAbout extends React.Component {
  render (){
    return (
          <div id="Content" style={{backgroundColor:"#292929"}}>
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">

                    <AboutHeadingCover/>
                    <AboutUs/>
                    <OurStory/>
                    <MissionVision/>
                    <ImageBanner/>
                    <TextTilesPanels/>
                    <Teams/>
                    <AppDownloadBanner/>

                  </div>
                </div>
              </div>
            </div>

    );
  }
}
