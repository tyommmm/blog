import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from '../../firebase';

const initialState = {
  item: {} as DocumentData | undefined,
};

export const fetchUserById = createAsyncThunk(
  "userById/fetchUserByIdStatus",
  async (id: string) => {
    const docRef = doc(db, 'users', id)
    const data = await getDoc(docRef)
    return data.data()
  }
);

const userByIdSlice = createSlice({
  name: "userById",
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<DocumentData>) {
      state.item = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.item = action.payload;

    });
  },
});

export const { setItem } = userByIdSlice.actions;

export default userByIdSlice.reducer;
