import { useSelector } from "react-redux"
import { RootState } from "../../store"

const NotificationBar: React.FC = () => {
    const notifications = useSelector((state: RootState) => state.notifications.notifications)

    return(
        <div>
            {notifications.map((n, index) => {
                return(
                    <div key={index} className={n.error ? 'inside-background error' : 'inside-background success'}>
                        <p>{n.message}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default NotificationBar