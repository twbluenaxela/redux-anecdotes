import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// const getId = () => (100000 * Math.random()).toFixed(0)
    
  const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState: [],
    reducers: {
      updateVote(state, action) {
        const changedAnecdote = action.payload
      console.log('REDUX SIDE - Changed anecdote:  ', changedAnecdote)
      return state.map(anecdote => 
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote)
      },
      setAnecdotes(state, action) {
        return action.payload
      },
      appendAnecdote(state, action) {
        state.push(action.payload)
      }
    }
  })



export const { setAnecdotes, appendAnecdote, updateVote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.vote(id)
    dispatch(updateVote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer