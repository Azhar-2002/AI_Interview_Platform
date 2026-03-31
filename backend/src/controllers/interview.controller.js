import { createSession, getSessionById } from "../services/interview.service.js";

export const startInterview = async (req, res) => {
  try {
    const session = await createSession(req.user.id);
    res.status(201).json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getInterview = async (req, res) => {
  try {
    const session = await getSessionById(req.params.id);
    res.json(session);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};