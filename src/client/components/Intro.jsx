import React from 'react';
import {Link} from 'react-router-dom';

class Intro extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isShow: true
      };

      this.onClose = this.onClose.bind(this);
    }

    onClose(){
      console.log(this);
      //debugger;
      //location.pathname = "/";
      this.setState({isShow: false});
      console.log(location);
      //style={{display:"none"}}
    }

    render () {
        return (
            <div ref="intro" id="intro" onClick={this.onClose} className={(this.state.isShow ? "" : "hide")}>
              <div className="center-verticle">
                <img src="static/img/logo.svg" alt="Electron Sunumu"/>
                <h1>BAŞLA</h1>
                <Link to="/">Electron Nedir?</Link>
              </div>
            </div>
        );
    }
}

export default Intro;
