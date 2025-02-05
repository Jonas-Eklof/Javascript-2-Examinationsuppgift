import { createSlice, configureStore } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: { projects: [] },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;
export const store = configureStore({
  reducer: { projects: projectSlice.reducer },
});
