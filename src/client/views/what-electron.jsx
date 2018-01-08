import React from 'react';
import Title from '../components/Title';

class WhatElectron extends React.Component {
    constructor(props){
      super(props);
    }
    render () {
        return (
            <React.Fragment>
                <Title title="Electronjs Nedir?"/>
                <p><strong>Electron</strong>, HTML, CSS ve JavaScript ile çok platformlu masaüstü uygulamaları oluşturmak için GitHub tarafından geliştirilen bir açık kaynak kütüphanesidir. Electron bunu, Chromium ve Node.js'yi tek bir çalışma zamanında birleştirerek gerçekleştirir ve uygulamalar Mac, Windows ve Linux için paketlenebilir.</p>
                {/* <pre><code className="language-html">{"<div>Test</div>"}</code></pre> */}
            </React.Fragment>
        );
    }
}

export default WhatElectron;
