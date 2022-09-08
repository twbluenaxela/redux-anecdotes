import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = (props) => {

  // const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.quote.value
    event.target.quote.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    // dispatch(createAnecdote(content))
    props.createAnecdote(content)
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


export default connect(
  null,
  { createAnecdote }
)(AnecdoteForm)