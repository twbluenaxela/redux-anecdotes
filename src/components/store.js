import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from '../reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer
  }
})

store.subscribe(() => console.log(store.getState()))

export default store