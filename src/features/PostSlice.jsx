import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: [],
}


export const getPosts = createAsyncThunk(
    'post/getPosts',
    async (_, {rejectWithValue, dispatch, getState}) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?&_limit=5')
        dispatch(setPosts(data))
    }
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (id, {rejectWithValue, dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePostById(id))
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state,action) => {
            state.posts = action.payload
        },
        deletePostById: (state,action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fullfilled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
        [deletePost.fulfilled]: () => console.log('delete fullfilled'),
        [deletePost.pending]: () => console.log('delete pending'),
        [deletePost.rejected]: () => console.log('delete rejected')
    }
})

export const {setPosts,deletePostById} = postSlice.actions
export default postSlice.reducer