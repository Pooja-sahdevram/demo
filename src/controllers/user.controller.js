import { asynchandler } from "../utils/asynchandler.js";

export const register = asynchandler(async (req, res) => {
  res.status(200).json({ message: "ok" });
});
