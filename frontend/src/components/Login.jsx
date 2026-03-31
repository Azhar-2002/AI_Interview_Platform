import { useState } from "react";
import axios from "axios";

function Login({ setToken , goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://ai-interview-platform-coeo.onrender.com/api/auth/login",
        { email, password }
      );

      const token = res.data.token;

      localStorage.setItem("token", token);
      setToken(token);

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>

      {/* LEFT PANEL */}
      <div style={styles.leftPanel}>
        <h1>Welcome Back!</h1>
        <p style={{ textAlign: "center" }}>
          To keep connected with us please login with your personal info
        </p>
        <br />
      <p onClick={goToRegister} style={{ cursor: "pointer", color: "#007bff" }}>
      Create Account
      </p>
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.rightPanel}>
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          SIGN IN
        </button>
      </div>

    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial"
  },

  leftPanel: {
    flex: 1,
    background: "linear-gradient(135deg, #00b894, #00cec9)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },

  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px"
  },

  input: {
    width: "250px",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none"
  },

  button: {
    padding: "12px 25px",
    background: "#00b894",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
export default Login;