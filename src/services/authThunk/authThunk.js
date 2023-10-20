import { createAsyncThunk } from "@reduxjs/toolkit";

import { login, logout, signup } from "../api/authAPI";

export const signupThunk = createAsyncThunk("auth/register", (credentilas) => signup(credentilas));

export const loginThunk = createAsyncThunk("auth/login", (user) => login(user));

export const logoutThunk = createAsyncThunk("auth/logout", () => logout());

// export const currentUserThunk = createAsyncThunk("user/currentUser", async (token) =>
//    currentUser(token)
// );

// export const subscribeThunk = createAsyncThunk("user/subscribe", (user) => subscribeUser(user));
