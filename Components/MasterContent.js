import React from 'react';
import {Header} from './Header.jsx'
import {Content} from './Content.jsx'
import {Footer} from './Footer.jsx'

export class MasterContent extends React.Component {
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
