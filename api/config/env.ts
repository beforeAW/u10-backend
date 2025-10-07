/* eslint-disable @typescript-eslint/no-namespace */
import dotenv from "dotenv";

dotenv.config();

declare global {
  namespace NodeJS {
    // Standard way to extend ProcessEnv no ESLint here
    interface ProcessEnv {
      PORT?: string;
      MONGODB_URI?: string;
      SESSION_SECRET?: string;
      JWT_SECRET?: string;
    }
  }
}

const env = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "",
  SESSION_SECRET: process.env.SESSION_SECRET || "your_default_session_secret",
  JWT_SECRET: process.env.JWT_SECRET || "your_default_jwt_secret",
};

export default env;
