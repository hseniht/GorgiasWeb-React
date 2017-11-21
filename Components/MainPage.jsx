import React from 'react';
import {LoginContent} from './LoginContent.jsx'
import {MasterContent} from './MasterContent.jsx'


export class MainPage extends React.Component {

  componentWillMount(){
    this.setState({isLogin:true});
  }

   render() {
      return(
        <div>
              {this.state.isLogin ? <LoginContent/> : <MasterContent/>}
        </div>
      )
   }
}
