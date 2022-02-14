import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: '',
    surname: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state,action) => {
            state.username = action.payload
        },
        setSurname (state,action) {
            state.surname = action.payload
        },
    }
})

export const {setUsername, setSurname} = loginSlice.actions
export default loginSlice.reducer 