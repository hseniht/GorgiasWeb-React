import React from 'react';
import {WhatIsGorgias} from './MainSections/1-WhatIsGorgias.jsx';
import {TopStories} from './MainSections/1.2-TopStories.jsx';
import {WhyBecomeGorgias} from './MainSections/3-WhyBecomeGorgias.jsx';
import {AppDownload} from './MainSections/4-AppDownload.jsx';
import {WhoIsGorgias} from './MainSections/2-WhoIsGorgias.jsx';
import {CelebGrid} from './MainSections/2.1-CelebGrid.jsx';

export class Content extends React.Component {
  render (){
    return (
          <div id="Content" style={{backgroundColor:"#292929"}}>
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">

                    <WhatIsGorgias/>
                    <TopStories/>
                    <WhoIsGorgias/>
                    <CelebGrid/>
                    <WhyBecomeGorgias/>
                    <AppDownload/>

                  </div>
                </div>
              </div>
            </div>

    );
  }
}
