import React from 'react';
import {Header} from './Header.jsx'
import {ContentContact} from './ContentContact.jsx'
import {Footer} from './Footer.jsx'

export class ContactContainer extends React.Component {

  componentWillMount(){
    //To ensure page is begining at top ;)
    window.scrollTo(0,0);
  }

   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <ContentContact/>
            <Footer/>
        </div>
      );
   }
}
