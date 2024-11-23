import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faElevator } from "@fortawesome/free-solid-svg-icons"

import "./Header.scss"

const Header = () => {
    return <div className="Header">
        <h1><FontAwesomeIcon icon={faElevator} />&nbsp;Elevator Saga</h1>
    </div>
}

export default Header