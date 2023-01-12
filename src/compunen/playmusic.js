
import Handleplaymusic from '../handle/handleplaymusic'
import Handlecontainmusic from '../handle/handlecontainmusic'
import Handlendplaymusic from '../handle/handleendplaymusic'


function Playmusic({ data }) {



  return (
    <>
    
        <div className = {`playmusic ${data ? 'activeplaymusic' : ''}`}>
          <div className=" playmusicitem">
            <Handlecontainmusic data={data} ></Handlecontainmusic>
            <Handleplaymusic data={data} ></Handleplaymusic>
            <Handlendplaymusic ></Handlendplaymusic>
          </div>
        </div>
      
    </>
  )
}

export default Playmusic