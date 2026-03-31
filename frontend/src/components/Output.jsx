const Output = ({ output }) => {
  return (
    <div style={{ background: "#000", color: "#0f0", padding: "10px" }}>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;