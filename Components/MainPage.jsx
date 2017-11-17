import React from 'react';
import {LoginContent} from './LoginContent.jsx'
import {MasterContent} from './MasterContent.js'


export class MainPage extends React.Component {

  componentWillMount(){
    this.setState({isLogin:false});
  }


   render() {
      return(
        <div>
              {this.state.isLogin ? <LoginContent/> : <MasterContent/>}
        </div>
      )
   }
}
