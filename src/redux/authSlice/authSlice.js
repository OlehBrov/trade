import { createSlice, isAnyOf } from "@reduxjs/toolkit";


import { loginThunk, logoutThunk, signupThunk } from "../../services/authThunk/authThunk";

const authInitialState = {
   user: { name: null, email: null, avatarURL: null },
   token: null,
   isLoggedIn: false,
   isRefreshing: false,
   isAuthLoading: false,
   error: "",
};

const handlePending = (state) => {
   state.isAuthLoading = true;
   state.error = "";
};

const handleRejected = (state, { error }) => {
   state.isAuthLoading = false;
   state.error = error;
};

const handleFulfilled = (state, { payload }) => {
   state.isLoggedIn = true;
   state.isAuthLoading = false;
   state.error = "";
   state.token = payload.token;
   state.user = payload.user;
};

const handleLogout = (state) => {
   state.user = { name: null, email: null };
   state.token = null;
   state.isLoggedIn = false;
   state.isAuthLoading = false;
   state.isRefreshing = false;
   state.error = "";
};

const authSlice = createSlice({
   name: "auth",
   initialState: authInitialState,

   extraReducers: (builder) => {
      builder
         .addCase(logoutThunk.rejected, handleLogout)
         .addMatcher(isAnyOf(logoutThunk.fulfilled), handleLogout)
         .addMatcher(
            isAnyOf(
               signupThunk.pending,
               loginThunk.pending,
               logoutThunk.pending,
              
            ),
            handlePending
         )
         .addMatcher(isAnyOf(loginThunk.fulfilled, signupThunk.fulfilled), handleFulfilled)
         .addMatcher(isAnyOf(signupThunk.rejected, loginThunk.rejected), handleRejected);
   },
});

export const { updateName, updateAvatarURL } = authSlice.actions;
export const authReducer = authSlice.reducer;
