import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    userData: { email: string; password: string; username: string },
    thunkAPI
  ) => {
    try {
      const res = await api.post("/auth/register/", userData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to register a user"
      );
    }
  }
);
