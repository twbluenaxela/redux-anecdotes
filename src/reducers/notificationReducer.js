import { createSlice } from "@reduxjs/toolkit"

const initialState = 'I am alive'

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
      state = message
    }
  }
})

export const { displayMessage } = notificationSlice.actions
export default notificationSlice.reducer