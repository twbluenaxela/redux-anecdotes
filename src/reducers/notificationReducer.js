import { createSlice } from "@reduxjs/toolkit"

const initialState = null
let notificationTimer = null


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
        // const currentMessageInState = state
        // if(state) {
        //   state = null
        //   return null
        // }
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

export const setNotification = ({ message, timer }) => {
  return async dispatch => {
    // dispatch(removeMessage())
    // clearTimeout('notificationTimer')
    if(notificationTimer) {
      clearTimeout(notificationTimer)
    }

    dispatch(displayMessage(message))
    notificationTimer = setInterval(() => {
      dispatch(removeMessage())
    }, timer * 1000)
    // clearTimeout('notificationTimer')
  }
}

export const { displayMessage, removeMessage } = notificationSlice.actions
export default notificationSlice.reducer