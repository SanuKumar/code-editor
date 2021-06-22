import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';

const AceEditorDiv = ({ editorContent, theme, onChange }) => {
  const editorStyles = {
    height: '100vh',
    width: 'auto',
  };

  return (
    <div>
      <AceEditor
        fontSize={12}
        mode='markdown'
        theme={`${theme}`}
        name='editor'
        style={editorStyles}
        value={editorContent}
        onChange={onChange}
        editorProps={{ $blockScrolling: true }}
        orientation='below'
      />
    </div>
  );
};

export default AceEditorDiv;
