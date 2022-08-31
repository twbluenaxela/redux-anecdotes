import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.quote.value
    event.target.quote.value = ''
    dispatch(createAnecdote(content))
  }


  return (
    <form onSubmit={addAnecdote}>
    <div><input name="quote" /></div>
    <button type='submit'>create</button>
  </form>
  )
}

export default AnecdoteForm