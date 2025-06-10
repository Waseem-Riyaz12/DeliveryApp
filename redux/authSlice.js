import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phoneDetails: null,
    user: null,
    token: null,
    deviceToken: null,
    isAuthenticated: false, // Track authentication status
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setPhoneDetails(state, action) {
      state.phoneDetails = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setDeviceToken(state, action) {
      state.deviceToken = action.payload;
    },
    setisAuthenticated(state, action) {
      state.isAuthenticated = action.payload; // Set authentication status
    },
    setUserProfilePic(state, action) {
      if (state.user) {
        state.user = {
          ...state.user,
          UserProfile: {
            ...state.user.UserProfile,
            profilePicture: action.payload,
          },
        };
      }
    },
  },
});
export const {
  setUser,
  setPhoneDetails,
  setToken,
  setDeviceToken,
  setUserProfilePic,
  setisAuthenticated
} = authSlice.actions;
export default authSlice.reducer;
