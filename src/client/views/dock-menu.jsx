import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,js; 

class DockMenu extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `const {app, Menu} = require('electron')

const dockMenu = Menu.buildFromTemplate([
    {label: 'New Window', click () { console.log('New Window') }},
    {label: 'New Window with Settings',
    submenu: [
        {label: 'Basic'},
        {label: 'Pro'}
    ]
    },
    {label: 'New Command...'}
])
app.dock.setMenu(dockMenu)`;
        js = Prism.highlight(code, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Desktop Environment Integration"/>
                <p>Farklı işletim sistemlerini masaüstünü entegre etmek için farklı özellikler sunar uygulamaları masaüstü ortamlarına dönüştürür. Örneğin, Windows'ta, uygulama kısayollarını görev çubuğunun görev listesine koyabilir ve Mac'te uygulamaları, dock menüsüne özel bir menüye yerleştirebilir.</p>
                
                <h3>Custom Dock Menu</h3>
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>                
            </React.Fragment>
        );
    }
}

export default DockMenu;
