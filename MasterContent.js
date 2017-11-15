import React from 'react';
import {Header} from './Components/Header.jsx'
import {Content} from './Components/Content.jsx'
import {Footer} from './Components/Footer.jsx'

export class MasterContent extends React.Component {
   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <Footer/>
        </div>
      );
   }
}
