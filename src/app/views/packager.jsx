import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code,js; 

class Packager extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code = `electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]`;
        js = Prism.highlight(code, Prism.languages.javascript);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Electron Packager"/>
                <p>Electron uygulamamızı bütün platformlara özel paketlememizi sağlayan bir araçtır.</p>
                
                <pre className="language-javascript">
                    <code className="language-javascript" dangerouslySetInnerHTML={{__html: js}}></code>
                </pre>  

                <p className="note">Dökümantasyona ulaşmak için <a href="https://github.com/electron-userland/electron-packager/blob/master/docs/api.md" target="_blank">tıklayınız</a>.</p>              
            </React.Fragment>
        );
    }
}

export default Packager;
