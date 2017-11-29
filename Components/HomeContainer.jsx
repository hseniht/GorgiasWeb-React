import React from 'react';
import {Header} from './Header.jsx'
import {Content} from './Content.jsx'
import {Footer} from './Footer.jsx'

export class HomeContainer extends React.Component {

  componentWillMount(){
    //To ensure page is begining at top ;)
    window.scrollTo(0,0);
  }

   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
      );
   }
}
