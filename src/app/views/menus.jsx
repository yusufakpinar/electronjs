import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,js; 

class Menus extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `const {app, Menu} = require('electron')

const template = [
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Test',
                click () { require('electron').shell.openExternal('https://electron.atom.io') }
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {role: 'minimize'},
            {role: 'close'}
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click () { require('electron').shell.openExternal('https://electron.atom.io') }
            }
        ]
    }
];
        
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)`;
        js = Prism.highlight(code, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Menus"/>
                <p>Yerel uygulama menüleri ve bağlam menüleri oluşturmamızı sağlar.</p>
                
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>                
            </React.Fragment>
        );
    }
}

export default Menus;
