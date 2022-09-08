import { setFilter } from "../reducers/filterReducer"
import { useDispatch, connect } from "react-redux"

const Filter = (props) => {

    // const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      const filterToSet = event.target.value
      // dispatch(setFilter(filterToSet))
      props.setFilter(filterToSet)
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default connect(
    null,
    { setFilter }
  )(Filter)