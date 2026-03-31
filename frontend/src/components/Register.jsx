import { useState } from "react";
import axios from "axios";

function Register({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });

      alert("Registered successfully!");
      goToLogin(); // 👈 go back to login
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>

      {/* LEFT PANEL */}
      <div style={styles.leftPanel}>
        <h1>Hello, Friend!</h1>
        <p>Create your account to start your journey</p>

        <button onClick={goToLogin} style={styles.ghostBtn}>
          SIGN IN
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.rightPanel}>
        <h2>Create Account</h2>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
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

        <button onClick={handleRegister} style={styles.mainBtn}>
          SIGN UP
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
    border: "1px solid #ccc"
  },

  mainBtn: {
    padding: "12px 25px",
    background: "#00b894",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer"
  },

  ghostBtn: {
    padding: "10px 20px",
    background: "transparent",
    border: "2px solid white",
    color: "white",
    cursor: "pointer"
  }
};
export default Register;