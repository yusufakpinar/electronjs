import React from 'react';
import Title from '../components/Title';
var Prism = require('prismjs');

// The code snippet you want to highlight, as a string
var code = "var data = 1;";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript);

class View_2 extends React.Component {
    constructor(props){
      super(props);
    }
    render () {
        return (
            <React.Fragment>
                <Title title="Electronjs Hakkında"/>
                <p><strong>Electron</strong>, Test</p>
                <pre className="language-html"><code className="language-html" dangerouslySetInnerHTML={{__html: html}}></code></pre>
            </React.Fragment>
        );
    }
}

export default View_2;
