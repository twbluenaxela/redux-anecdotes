import { createSlice } from "@reduxjs/toolkit"

const initialState = null

// export const displayMessage = (message) => {
//   return {
//     type: 'SET_MESSAGE',
//     payload: message
//   }
// }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayMessage(state, action) {
        const message = action.payload
        if(message){
          state = message
        }
        return state
        
    },
    removeMessage(state, action) {
      state = null
      return null
    }
  }
})

export const { displayMessage, removeMessage } = notificationSlice.actions
export default notificationSlice.reducer