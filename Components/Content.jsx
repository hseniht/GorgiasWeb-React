import React from 'react';
import {WhatIsGorgias} from './MainSections/1-WhatIsGorgias.jsx';
import {TopStories} from './MainSections/1.2-TopStories.jsx';
import {WhyBecomeGorgias} from './MainSections/3-WhyBecomeGorgias.jsx';
import {AppDownload} from './MainSections/4-AppDownload.jsx';
import {WhoIsGorgias} from './MainSections/2-WhoIsGorgias.jsx';
import {CelebGrid} from './MainSections/2.1-CelebGrid.jsx';

import {ContactWebCover} from './ContactPageSections/1-ContactWebCover.jsx';
import {ContactTextBanner} from './ContactPageSections/2-ContactTextBanner.jsx';
import {Locations} from './ContactPageSections/3-Locations.jsx';
import {ContactForm} from './ContactPageSections/4-ContactForm.jsx';

import {PrivacyPolicy} from './TermsPageSections/1-PrivacyPolicy.jsx';

import {AboutHeadingCover} from './AboutPageSection/1-AboutHeadingCover.jsx';
import {AboutUs} from './AboutPageSection/2-AboutUs.jsx';
import {OurStory} from './AboutPageSection/3-OurStory.jsx';
import {MissionVision} from './AboutPageSection/4-MissionVision.jsx';
import {ImageBanner} from './AboutPageSection/5-ImageBanner.jsx';
import {TextTilesPanels} from './AboutPageSection/6-TextTilesPanels.jsx';
import {Teams} from './AboutPageSection/7-Teams.jsx';
import {AppDownloadBanner} from './AboutPageSection/8-AppDownloadBanner.jsx';


export class Content extends React.Component {
  render (){
    return (
          <div id="Content" style={{backgroundColor:"#292929"}}>
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">

                    <WhoIsGorgias/>
                    <CelebGrid/>

                  </div>
                </div>
              </div>
            </div>

    );
  }
}
