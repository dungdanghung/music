import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import { faFileAudio } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

function Handlendplaymusic() {

    const [indexvolume, setindexvolume] = useState("30%")

    useEffect(() => {
        document.querySelector("#audio").volume = (((indexvolume.slice(0, indexvolume.length - 1)) - 7) / 100).toFixed(1)
    }, [indexvolume])

    function xulymove(e) {
        setindexvolume((e.offsetX / 70) * 100 + 7 + "%")
    }

    function handlemousedow(e) {
        setindexvolume((e.nativeEvent.offsetX / 70) * 100 + 7 + "%")
        e.target.addEventListener("mousemove", xulymove)
        function setmouseup(){
            e.target.removeEventListener('mousemove', xulymove);
            e.target.removeEventListener('mouseup' , setmouseup);
        }
        e.target.addEventListener('mouseup', setmouseup)
    }
    return (
        <>
            <div className="itemactionmusic">
                <div className='wrapactionicon'>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faCompactDisc} /></div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faMicrophoneLines} /></div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faExpand} /></div>
                    <div className='wrapvolum'>
                        <div className='iconhover wrapactioniconitemvolum'><FontAwesomeIcon icon={faVolumeLow} className="kh" /></div>
                        <div className='wrapinputrange'>
                            <div className='rangevolume'>
                                <div className='nutrange'>
                                    <div className='nutrangeitem1' style={{ width: indexvolume }}>
                                        <div className='nutrangeitem' ></div>
                                    </div>
                                </div>
                                <div className='divoutside' onMouseDown={handlemousedow} >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' gach'>
                        <div className='gachitem'></div>
                    </div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faFileAudio} /></div>
                </div>
            </div>
        </>
    )
}

export default Handlendplaymusic