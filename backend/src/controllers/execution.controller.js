import { executeCode } from "../services/execution.service.js";

export const runCode = async (req, res) => {
  
  try {
    const result = await executeCode(req.body);
    
res.json({
  output: result.stdout || result.stderr || result.compile_output,
  status: result.status.description,
  time: result.time
});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};