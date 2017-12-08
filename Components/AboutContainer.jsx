import React from 'react';
import {Header} from './Header.jsx'
import {ContentAbout} from './ContentAbout.jsx'
import {Footer} from './Footer.jsx'

export class AboutContainer extends React.Component {

  componentWillMount(){
    //To ensure page is begining at top ;)
    window.scrollTo(0,0);
  }


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