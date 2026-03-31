import axios from "axios";

const JUDGE0_URL = "https://ce.judge0.com/submissions";

export const executeCode = async ({ code, language }) => {
  try {
    const response = await axios.post(
      `${JUDGE0_URL}?base64_encoded=false&wait=true`,
      {
        source_code: code,
        language_id: getLanguageId(language)
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Execution error:", error.message);
    throw new Error("Execution failed");
  }
};

const getLanguageId = (lang) => {
  if (lang === "javascript") return 63;
  if (lang === "python") return 71;
  return 63;
};