import React from 'react';
import {Header} from './Header.jsx'
import {ContentAbout} from './ContentAbout.jsx'
import {Footer} from './Footer.jsx'

export class AboutContainer extends React.Component {
   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <ContentAbout/>
            <Footer/>
        </div>
      );
   }
}
