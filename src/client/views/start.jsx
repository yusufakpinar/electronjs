import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code1,code2,code3,html,json,js;

class Start extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code1 = "your-app/\n"+ 
                "├── package.json\n"+
                "├── main.js\n"+
                "└── index.html\n";
        html = Prism.highlight(code1, Prism.languages.html);
        code2 = '{\n'+
                    '   "name"    : "your-app",\n'+
                    '   "version" : "0.1.0",\n'+
                    '   "main"    : "main.js"\n'+
                '}';
        json = Prism.highlight(code2, Prism.languages.javascript);
        code3 = `const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.`;
        js = Prism.highlight(code3, Prism.languages.javascript);

    }

    render () {
        return (
            <React.Fragment>
                <Title title="Electron'a Giriş"/>
                <p>Genellikle, bir Electron uygulaması şöyle yapılandırılır:</p>
                
                <pre className="language-html">
                    <code className="language-html" dangerouslySetInnerHTML={{__html: html}}></code>
                </pre>

                <h3>package.json</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: json}}></code>
                </pre>

                <h3>main.js</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>
            </React.Fragment>
        );
    }
}

export default Start;
