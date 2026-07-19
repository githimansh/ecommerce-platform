import axios from "axios";

// Local development
// export const API_URL = "http://localhost:5454";

// Production Backend (Render)
export const API_URL = "https://ecommerce-platform-tzjq.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});