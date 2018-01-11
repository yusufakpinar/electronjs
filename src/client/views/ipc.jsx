import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,code2,js,js2; 

class Ipc extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `// In main process.
const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
})

// In renderer process (web page).
const {ipcRenderer} = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')`;
        js = Prism.highlight(code, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="IPC (Inter-Process Communication)"/>
                <p>Electron, process ve renderer işlemleri arasındaki seri hale getirilmiş JSON iletileri göndermek için IPC kullanır.</p>
                
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>                
            </React.Fragment>
        );
    }
}

export default Ipc;
