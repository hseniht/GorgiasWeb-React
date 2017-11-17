import React from 'react';
import {WhatIsGorgias} from './MainSections/1-WhatIsGorgias.jsx';
import {TopStories} from './MainSections/1.2-TopStories.jsx';
import {WhyBecomeGorgias} from './MainSections/3-WhyBecomeGorgias.jsx';
import {AppDownload} from './MainSections/4-AppDownload.jsx';
import {WhoIsGorgias} from './MainSections/2-WhoIsGorgias.jsx';
import {CelebGrid} from './MainSections/2.1-CelebGrid.jsx';

import {ContactWebCover} from './ContactSections/1-ContactWebCover.jsx';
import {ContactTextBanner} from './ContactSections/2-ContactTextBanner.jsx';
import {Locations} from './ContactSections/3-Locations.jsx';
import {ContactForm} from './ContactSections/4-ContactForm.jsx';


export class Content extends React.Component {
  render (){
    return (
          <div id="Content" style={{backgroundColor:"#292929"}}>
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">

                    <ContactWebCover/>
                    <ContactTextBanner/>
                    <Locations/>
                    <ContactForm/>
                  </div>
                </div>
              </div>
            </div>

    );
  }
}
