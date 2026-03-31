import Interview from "../models/Interview.js";

export const createSession = async (userId) => {
  const session = await Interview.create({
    userId
  });
  return session;
};

export const getSessionById = async (sessionId) => {
  const session = await Interview.findById(sessionId);
  if (!session) throw new Error("Session not found");
  return session;
};