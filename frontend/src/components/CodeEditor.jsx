import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div style={{ border: "1px solid #333", borderRadius: "5px" }}>
      <Editor
        height="420px"
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"

        // 🔥 Improve typing experience
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          tabSize: 2,
        }}

        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default CodeEditor;