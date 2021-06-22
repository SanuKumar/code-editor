import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = ({ value, onChange, theme, language }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: theme,
          lineNumbers: true,
        }}
      />
    </>
  );
};

export default Editor;
