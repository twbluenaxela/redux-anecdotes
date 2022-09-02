import { useSelector } from "react-redux"
import notificationReducer, { displayMessage } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log('Notification ', notification);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification