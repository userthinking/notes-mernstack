import axios from "axios";

// Create axios instance with base configuration
const notesAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL_NOTES || "https://notes-mernstack-backend.onrender.com/api/notes",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
notesAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllNotes = async () => {
  const res = await notesAPI.get("/");
  return res.data.data;
};

export const createNote = async (note) => {
  const res = await notesAPI.post("/", note);
  return res.data.data;
};

export const deleteNote = async (id) => {
  await notesAPI.delete(`/${id}`);
};

export const updateNote = async (id, note) => {
  const res = await notesAPI.put(`/${id}`, note);
  return res.data.data;
};
