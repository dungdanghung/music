import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"

function Handlecontainmusic({data}){

    return(
        <>
         <div className="itemuser">
              <div className="thumner">
                <img className='hg' src={data ? data.links.images[1].url : 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96'}></img>
              </div>
              <div className="contenplaymusic">
                <div>
                  <div className="titlecontenplaymusic">
                    <a href="/">
                      <span className="text_titlecontenplaymusic">{data ? data.name : 'dang hung dung'}</span>
                    </a>
                  </div>
                  <div className="titleitemcontenplaymusic">
                    <a href="/" className="titleitemcontenplaymusic_title2"> {data ? data.author : 'dang hung dung'}</a>
                  </div>
                </div>
              </div>
              <div className="icenitemuser">
                <div className="tim">
                  <button><FontAwesomeIcon className='coler' icon={faHeart} /></button>
                </div>
                <div className="more">
                  <button><FontAwesomeIcon className='coler' icon={faEllipsis} /></button>
                </div>
              </div>
            </div>
        </>
    )
}

export default Handlecontainmusic