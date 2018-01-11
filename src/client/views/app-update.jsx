import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

class AppUpdate extends React.Component {
    constructor(props){
      super(props);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Updating Application"/>
                <p>Bir Electron uygulamasını güncellemenin birkaç yolu vardır. En kolay ve resmen desteklenen yerleşik <a href="https://github.com/Squirrel" target="_blank">Squirrel</a> framework'ü ve Electron'un <a href="https://electronjs.org/docs/api/auto-updater" target="_blank">autoUpdater</a> modülünden yararlanılır.</p>
                <p>AutoUpdater modülü, Squirrel framework'ü için arabirim sağlar.</p>
                

                <p className="note">Detaylı bilgi için <a href="https://electronjs.org/docs/tutorial/updates" target="_blank">tıklayınız</a>.</p>              
            </React.Fragment>
        );
    }
}

export default AppUpdate;
