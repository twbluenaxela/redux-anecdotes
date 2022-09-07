import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            state = action.payload
            return state
        }
    }

})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer