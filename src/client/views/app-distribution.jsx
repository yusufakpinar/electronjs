import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

let code1,code2,code3,code4,text1,text2,text3,text4; 

class AppDistribution extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        code1 = `electron/Electron.app/Contents/Resources/app/
├── package.json
├── main.js
└── index.html`;
        text1 = Prism.highlight(code1, Prism.languages.html);

        code2 = `electron/resources/app
├── package.json
├── main.js
└── index.html`;
        text2 = Prism.highlight(code2, Prism.languages.html);

        code3 = `electron/Electron.app/Contents/Resources/
└── app.asar`;
        text3 = Prism.highlight(code3, Prism.languages.html);

        code4 = `electron/resources/
└── app.asar`;
        text4 = Prism.highlight(code4, Prism.languages.html);
    
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Applications Distribution"/>
                <p>Uygulamanızı Electron ile dağıtmak için, Electron'un <a href="https://github.com/electron/electron/releases" target="_blank">prebuilt binaries</a> önceden oluşturulmuş dosyalarını dosyalarını indireniz gerekir. Sonra, klasör <code>app</code> olarak adlandırılmalı ve Electron'un kaynaklarına yerleştirilmelidir aşağıdaki örneklerde gösterildiği gibi. Konumunu Electron'un önceden hazırlanmış ikili dosyaları örneklerde <code>elektron /</code> ile altında gösterilir.</p>
                
                <h3>MacOS üzerinde:</h3>
                <pre className="language-html">
                    <code className="language-html" dangerouslySetInnerHTML={{__html: text1}}></code>
                </pre>

                <h3>Windows ve Linux üzerinde:</h3>
                <pre className="language-html">
                    <code className="language-html" dangerouslySetInnerHTML={{__html: text2}}></code>
                </pre>    

                <h2>Packaging Your App into a File</h2>
                <p>Tüm kaynak dosyalarını kopyalayarak uygulamanızın nakliyesinin yanı sıra, uygulamanızın kaynak kodunu kullanıcılara göstermemek için uygulamanızı bir asar arşivine paketleyebilirsiniz.</p>

                <h3>MacOS üzerinde:</h3>
                <pre className="language-html">
                    <code className="language-html" dangerouslySetInnerHTML={{__html: text3}}></code>
                </pre>

                <h3>Windows ve Linux üzerinde:</h3>
                <pre className="language-html">
                    <code className="language-html" dangerouslySetInnerHTML={{__html: text4}}></code>
                </pre> 

                <p className="note">Daha fazla detay <a href="https://electronjs.org/docs/tutorial/application-packaging" target="_blank">Application packaging</a> içinde bulunabilir.</p>

                <h2>Paketleme araçları</h2>   
                <p>Uygulamanızı manuel olarak paketlemenin yanı sıra, üçüncü parti aracıların sizin için paketleme araçları:</p>

                <ul>
                    <li><a href="https://github.com/electron-userland/electron-forge" target="_blank">electron-forge</a></li>
                    <li><a href="https://github.com/electron-userland/electron-builder" target="_blank">electron-builder</a></li>
                    <li><a href="https://github.com/electron-userland/electron-packager" target="_blank">electron-packager</a></li>
                </ul>      
            </React.Fragment>
        );
    }
}

export default AppDistribution;
