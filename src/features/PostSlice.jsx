import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    }
})

export {} = postSlice.actions
export default postSlice.reducer