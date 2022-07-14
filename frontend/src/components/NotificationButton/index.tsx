import notificationicon from '../../assets/img/notification-icon.svg'


import './styles.css'




function NotificationButton() {
    return (
            <div className="dsmeta-red-btn">
                <img src={notificationicon} alt="Pessoa Enviar" />
            </div>
    )
}

export default NotificationButton
