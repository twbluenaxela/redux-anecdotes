import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { displayMessage } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return [...state.anecdotes].sort((a, b) => {
      return b.votes - a.votes;
    });
  });

  // const vote = (id) => {
  //   console.log("vote", id);
  //   dispatch(addVote(id));
  // };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote 
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={() => dispatch(addVote(anecdote.id))}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
