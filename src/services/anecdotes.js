import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async(content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id) => {
    //retrieve all data from database
    const request = await axios.get(`${baseUrl}/${id}`)
    const anecdoteToUpdate = request.data
    console.log('Anecdote to update:  ', anecdoteToUpdate)
    const updatedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1}
    console.log('Updated anecdote (backend:', updatedAnecdote)
    const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
    console.log('Response data: ', response.data)
    return response.data
}

export default { getAll, createNew, vote }