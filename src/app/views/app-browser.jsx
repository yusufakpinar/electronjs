import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';
import {ipcRenderer} from 'electron';

let code,code2,code3,js,js2,js3; 

class AppBrowser extends React.Component {
    constructor(props){
      super(props);

      this.openWin = this.openWin.bind(this);
    }

    componentWillMount(){
        code = `const {app} = require('electron')
app.on('window-all-closed', () => {
    app.quit()
})`;
        js = Prism.highlight(code, Prism.languages.javascript);

        code2 = `mainWindow = new BrowserWindow({
    title: "Electron Sunum",
    width: 800,
    height: 600,
    show: true,
    fullscreen: default,
    frame: false
});
win.loadURL('file://[__dirname]/index.html');
win.loadURL('https://github.com');`;
        js2 = Prism.highlight(code2, Prism.languages.javascript);
        
        code3 = `let top = new BrowserWindow()
let child = new BrowserWindow({parent: top})
child.show()
top.show()`;
        js3 = Prism.highlight(code3, Prism.languages.javascript);
    }

    openWin(){
        ipcRenderer.send('childOpen', 'open');
    }

    render () {
        return (
            <React.Fragment>
                <Title title="App, BrowserWindow"/>
                <h2>App</h2>
                <p>Uygulamamızın ana süreçlerini oluşturmamızı ve kontrol etmemizi sağlar.</p>
                
                <p>Aşağıdaki örnek, son pencere kapatıldığı zaman uygulamadan nasıl çıkılacağını göstermektedir:</p>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>

                <h2>BrowserWindow</h2>
                <p>Ugulamamızın pencerelerini oluşturmak ve kontrol etmemizi sağlar.</p>

                <h3>Örnek:</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js2}}></code>
                </pre>

                <h3>Örnek Child Window:</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js3}}></code>
                </pre>
                <p><a onClick={this.openWin} href="javascript:void(0);">Child Window Open</a></p>

                
            </React.Fragment>
        );
    }
}

export default AppBrowser;
