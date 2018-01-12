import React from 'react';
import Title from '../components/Title';
import Prism from 'prismjs';

class TheEnd extends React.Component {
    constructor(props){
      super(props);
    }

    render () {
        return (
            <React.Fragment>
                <Title title="Sorusu Olan Yoksa Dağılın :)"/>
                <p>Demoyu incelemek için <a href="https://github.com/yusufakpinar/electronjs" target="_blank">buradan</a> indirebilirsiniz.</p>           
            </React.Fragment>
        );
    }
}

export default TheEnd;
