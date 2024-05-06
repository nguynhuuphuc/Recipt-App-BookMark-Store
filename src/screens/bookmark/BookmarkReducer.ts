import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import storage from '../../storage/storage';
import {STORAGE_KEY} from '../../constant/Constant';
import {BookmarkType} from '../../api/Type';

export const bookmarkMeal = createAsyncThunk('meal/bookmark', async () => {
  const listBookmark = await storage.load({key: STORAGE_KEY.bookmark});
  return listBookmark;
});
export interface BookmarkState {
  values: BookmarkType[];
  loading: boolean;
}

const initState: BookmarkState = {
  values: [],
  loading: false,
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(bookmarkMeal.fulfilled, (state, action) => {
      state.values = action.payload;
      state.loading = true;
    });
  },
});

export default bookmarkSlice.reducer;
