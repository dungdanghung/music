import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import "./renderitem.css"

function Handleimghover({ full }) {
    if (full) {
        return (
            <div className="wraphandleimghover">
                <div className="wraphandleimghoveritem">

                    <div className="cssbtnplay"><FontAwesomeIcon icon={faHeart} /></div>
                    <FontAwesomeIcon className="handleimghoveritem" icon={faCirclePlay} />
                    <div className="cssbtnplay"><FontAwesomeIcon icon={faEllipsis} /></div>
                </div>

            </div>
        )
    }
    return (
        <div className="wraphandleimghover">
            <FontAwesomeIcon className="handleimghoveritem" icon={faCirclePlay} />
        </div>
    )
}

export default Handleimghover;