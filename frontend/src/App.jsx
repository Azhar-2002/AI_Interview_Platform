import { useState } from "react";
import axios from "axios";
import { Analytics } from "@vercel/analytics/react";
import Login from "./components/Login";
import Register from "./components/Register";
import CodeEditor from "./components/CodeEditor";
import Output from "./components/Output";

function App() {
   const [page, setPage] = useState("login");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [code, setCode] = useState("console.log('Hello Azhar');");
  const [output, setOutput] = useState("");
 

  const runCode = async () => {
    try {
      const res = await axios.post(
        "https://ai-interview-platform-coeo.onrender.com/api/code/run",
        { code, language: "javascript" },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setOutput(res.data.output);
    } catch (err) {
      console.log(err);
      setOutput("Error running code");
    }
  };

  // 👇 if not logged in
if (!token) {
  if (page === "login") {
    return <Login setToken={setToken} goToRegister={() => setPage("register")} />;
  } else {
    return <Register goToLogin={() => setPage("login")} />;
  }
}

  // 👇 main app
  return (
  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

    {/* 🔥 TOP BANNER */}
    <div style={styles.banner}>
      🚀 Working on multi-language support beyond JavaScript. 
      Exploring Ollama for local AI integration (OpenAI-like models are paid).
    </div>

    {/* 🔥 HEADER */}
    <div style={styles.header}>
      <h2>AI Interview Platform(Only JavaScript Support)</h2>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
        }}
        style={styles.logoutBtn}
      >
        Logout
      </button>
    </div>

    {/* 🔥 MAIN CONTENT */}
    <div style={styles.mainContainer}>

      {/* LEFT → CODE EDITOR */}
      <div style={styles.editorSection}>
        <div stylre={{ flex: 1, overflow: "hidden" }}>
          <CodeEditor code={code} setCode={setCode} />
        </div>
        

        <button onClick={runCode} style={styles.runBtn}>
          Run Code
        </button>
      </div>

      {/* RIGHT → OUTPUT */}
      <div style={styles.outputSection}>
        <h3>Output</h3>
        <pre style={styles.outputText}>
          {output || "Run code to see output..."}
        </pre>
      </div>

    </div>
    <Analytics />
  </div>
);
}
const styles = {
  banner: {
    background: "#fff3cd",
    color: "#856404",
    padding: "10px 20px",
    textAlign: "center",
    fontSize: "14px",
    borderBottom: "1px solid #ddd"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#1e1e1e",
    color: "white"
  },

  logoutBtn: {
    padding: "8px 15px",
    background: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  mainContainer: {
    display: "flex",
    flex: 1
  },

editorSection: {
  flex: 2,
  padding: "10px",
  borderRight: "2px solid #333",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden"
},

  runBtn: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  },

  outputSection: {
    flex: 1,
    background: "#000",
    color: "#0f0",
    padding: "15px"
  },

  outputText: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word"
  }
};
export default App;