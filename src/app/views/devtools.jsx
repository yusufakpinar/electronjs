import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,code2,js,js2; 

class DevTools extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `# Install Devtron
$ npm i -D devtron

// Run the following from the Console tab of your app's DevTools
require('devtron').install()
// You should now see a Devtron tab added to the DevTools`;
        js = Prism.highlight(code, Prism.languages.javascript);

        code2 = `# Install
$ npm i electron-devtools-installer -D

// Page Import
import installExtension, {
    EMBER_INSPECTOR, REACT_DEVELOPER_TOOLS,
    BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
    ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
    REDUX_DEVTOOLS, REACT_PERF,
    CYCLEJS_DEVTOOL, MOBX_DEVTOOLS,
    APOLLO_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

// Run the following from the Console tab of your app's DevTools
installExtension(REACT_DEVELOPER_TOOLS)
// You should now see a Devtron tab added to the DevTools`;
        js2 = Prism.highlight(code2, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="DevTools Kurulumu"/>
                <p>Chrome için yazılmış bütün tool'lar electron için kullanılabilir.</p>
                <p>Electron'a özel yazılan <strong>Devtron</strong> uygulamalarınızı denetlemenize, izlemenize ve hata ayıklamanıza yardımcı olan açık kaynaklı bir araçtır. </p>
                
                <h3>Örnek:</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>

                <p>Devtron dışındaki diğer tool'ları Electron'da kullanabilmek için öncelikle Chrome tarayıcısında indirmeniz, dosya sistemi yolunu bulmanız ve ardından <code>BrowserWindow.addDevToolsExtension(extension)</code> API'sını çağırarak yüklemeniz gerekir. </p>
                <p>Ya da <a href="https://github.com/MarshallOfSound/electron-devtools-installer" target="_blank">electron-devtools-installer</a> kurularak istenilen tool yüklenebilir.</p>
                <h3>Örnek:</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js2}}></code>
                </pre>
                
            </React.Fragment>
        );
    }
}

export default DevTools;
