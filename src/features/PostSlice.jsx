import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    posts: [],
    error: ''
}


export const getPosts = createAsyncThunk(
    'post/getPosts',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?&_limit=5')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue('kek')
        }
    }
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return id
        } catch (error) {
            return thunkAPI.rejectWithValue('lel')
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.fulfilled]: (state,action) => {
            state.posts = action.payload
            state.isLoading = false
            state.error = ''
        },
        [getPosts.pending]: (state) => {state.isLoading = true},
        [getPosts.rejected]: (state,action) => {
            state.isLoading = false
            state.error = action.payload},
        [deletePost.fulfilled]: (state,action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
            state.isLoading = false
            state.error = ''
        },
        [deletePost.pending]: (state) => {state.isLoading = true},
        [deletePost.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload}
    }
})

export default postSlice.reducer