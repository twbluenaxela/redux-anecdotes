import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.quote.value
    event.target.quote.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(content))
  }


  return (
    <form onSubmit={addAnecdote}>
      <div>
        <h2>create new</h2>
        <input name="quote" />
      </div>
    <button type='submit'>create</button>
  </form>
  )
}

export default AnecdoteForm