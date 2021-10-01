/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type UIState = {
  loading: boolean;
};

export type UIReducers = {
  showLoading(state: UIState): void;
  hideLoading(state: UIState): void;
};

const uiSlice = createSlice<UIState, UIReducers>({
  name: 'ui',
  initialState: { loading: false },
  reducers: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
  },
});

export const { actions } = uiSlice;
export default uiSlice.reducer;
