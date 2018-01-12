import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,js; 

class Shortcuts extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `const {app, globalShortcut} = require('electron')

app.on('ready', () => {
    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
    })

    if (!ret) {
    console.log('registration failed')
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('CommandOrControl+X')

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
})`;
        js = Prism.highlight(code, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Shortcuts"/>
                <p><strong>globalShortcut</strong> uygulamanın klavye event'larını algılar.</p>
                <p className="note">Kısayol evrenseldir; uygulamanın klavye odağı olmasa bile çalışacaktır. Yalnızca uygulama içinde geçerli olması için <strong>Menu</strong> modulündan yararlanılabilir. Ayrıca kısayollar için <a href="https://github.com/ccampbell/mousetrap" target="_blank">Mousetrap</a> kütüphanesini kullanabilirsiniz.</p>
                
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>           

                     
            </React.Fragment>
        );
    }
}

export default Shortcuts;
