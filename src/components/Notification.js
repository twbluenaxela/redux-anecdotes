import { useSelector, connect } from "react-redux"
import notificationReducer, { displayMessage } from "../reducers/notificationReducer"

const Notification = (props) => {
  // const notification = useSelector(state => state.notification)
  console.log('Notification ', props.notification);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)