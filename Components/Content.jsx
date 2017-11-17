import React from 'react';
import {WhatIsGorgias} from '../Components/sections/1-WhatIsGorgias.jsx';
import {TopStories} from '../Components/sections/1.2-TopStories.jsx';
import {WhyBecomeGorgias} from '../Components/sections/3-WhyBecomeGorgias.jsx';
import {AppDownload} from '../Components/sections/4-AppDownload.jsx';
import {WhoIsGorgias} from '../Components/sections/2-WhoIsGorgias.jsx';
import {CelebGrid} from '../Components/sections/2.1-CelebGrid.jsx';

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
