import React,{useState} from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import styles from "./App.module.css";
import Blockly from "blockly";

const MY_TOOLBOX={
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "controls_if"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext"
    },
    {
      "kind": "block",
      "type": "logic_compare"
    },
    {
      "kind": "block",
      "type": "math_number"
    },
    {
      "kind": "block",
      "type": "math_arithmetic"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "text_print"
    },
  ]
}
const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

function App() {
  const [xml, setXml] = useState();
  const [javascriptCode, setJavascriptCode] = useState("");
  
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <>
    <BlocklyWorkspace
      className={styles.canvas} // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
      initialXml={initialXml}
      onXmlChange={setXml}
      onWorkspaceChange={workspaceDidChange}
    />
    <pre id="generated-xml">{xml}</pre>
      <textarea
        id="code"
        value={javascriptCode}
        style={{ height: "200px", width: "400px" }}
        readOnly
      ></textarea>
    </>
  )
}

export default App;
