import React from 'react';


import {ContactWebCover} from './ContactPageSections/1-ContactWebCover.jsx';
import {ContactTextBanner} from './ContactPageSections/2-ContactTextBanner.jsx';
import {Locations} from './ContactPageSections/3-Locations.jsx';
import {ContactForm} from './ContactPageSections/4-ContactForm.jsx';

export class ContentContact extends React.Component {
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