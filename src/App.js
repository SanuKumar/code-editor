import React, { useState } from 'react';
import AceEditorDiv from './AceEditor';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const [theme, setTheme] = useState('solarized_light');

  const handleCodeRun = () => {
    setSrcDoc(
      `<html>
      <body>${html}</body>
    </html>`
    );
  };
  const handleTheme = () => {
    if (theme === 'solarized_light') {
      return setTheme('solarized_dark');
    } else {
      return setTheme('solarized_light');
    }
  };

  const downloadTxtFile = () => {
    if (html === '') {
      return alert('No Code To Download');
    }
    const element = document.createElement('a');
    const file = new Blob([html], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'download.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <>
      <div className='header'>Code Editor</div>
      <div className='button-wrapper'>
        <button className='button-style' onClick={handleCodeRun}>
          Run <i className='fas fa-angle-double-right'></i>
        </button>
        <button className='button-style' onClick={handleTheme}>
          <i className='fas fa-star-half-alt'></i>
        </button>
        <button className='button-style' onClick={downloadTxtFile}>
          Download Code <i className='fa fa-download' aria-hidden='true'></i>
        </button>
      </div>
      <div className='editor-wrapper'>
        <div className='output-div'>
          <AceEditorDiv value={html} theme={theme} onChange={setHtml} />
        </div>
        <div className='output-div'>
          <iframe
            srcDoc={srcDoc}
            title='output'
            sandbox='allow-scripts'
            frameBorder='0'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </>
  );
};

export default App;
