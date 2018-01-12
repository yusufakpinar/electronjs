import React from 'react';
import Title from '../components/Title';

class Applications extends React.Component {
    constructor(props){
      super(props);
    }
    render () {
        return (
            <React.Fragment>
                <Title title="Electronjs İle Yazılmış Popüler Uygulamalar"/>
                <p><strong>Electron</strong> ile şuanda 467 tane uygulama yazılmıştır. Bunlardan en popüler olanları; </p>
                <ul>
                    <li>Slack</li>
                    <li>Skype</li>
                    <li>Hyper</li>
                    <li>Vs Code</li>
                    <li>Atom</li>
                    <li>Postman</li>
                    <li>GitHub Desktop</li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Applications;
