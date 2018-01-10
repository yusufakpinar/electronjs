import React from 'react';
import {Link} from 'react-router-dom';
import {ipcRenderer} from 'electron';

class Intro extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isShow: true
      };

      this.onClose = this.onClose.bind(this);
    }

    componentDidMount(){
      ipcRenderer.on('start', (event, arg) => {
        console.log(this.refs.intro.context.router.history);
        this.refs.intro.context.router.history.push('/');
        this.onClose();
      })
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
            <Link ref="intro" id="intro" onClick={this.onClose} className={(this.state.isShow ? "" : "animated fadeOut")} to="/">
              <div className="center-verticle">
                <img src="static/img/logo.svg" alt="Electron Sunumu"/>
                <h1>BAŞLA</h1>
              </div>
            </Link>
        );
    }
}

export default Intro;
