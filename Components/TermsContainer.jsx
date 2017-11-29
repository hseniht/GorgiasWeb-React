import React from 'react';
import {Header} from './Header.jsx'
import {ContentTerms} from './ContentTerms.jsx'
import {Footer} from './Footer.jsx'

export class TermsContainer extends React.Component {
   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <ContentTerms/>
            <Footer/>
        </div>
      );
   }
}
