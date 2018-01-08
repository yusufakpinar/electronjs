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

                <h2>Desteklenen Platformlar</h2>
                <p><strong>MacOS :</strong> MacOS için sadece 64bit ve en az macOS 10.9 sürümü desteklenmektedir.</p>
                <p><strong>Windows :</strong> Windows 7 ve sonraki sürümleri desteklenir, eski işletim sistemleri desteklenmez. Windows için ia32 (x86) ve x64 (amd64) sistemi desteklenmektedir. Windows'un ARM versiyonu şimdilik desteklenmemektedir.</p>
                <p><strong>Linux :</strong> Fedora 21, Debian 8, Ubuntu 12.04 ve sonrası sürümlerini desteklemektedir.</p>
                {/* <pre><code className="language-html">{"<div>Test</div>"}</code></pre> */}
            </React.Fragment>
        );
    }
}

export default WhatElectron;
