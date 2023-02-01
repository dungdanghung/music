import { useEffect, useState } from 'react'
import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons"
import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause } from "@fortawesome/free-solid-svg-icons"
import "./handle.css"



function Handleplaymusic({ data }) {
    const [thanhchayindexvolume, setthanhchayindexvolume] = useState("0%")
    const [changetimemusic, setchangetimemusic] = useState(false)
    const [stateplay, setstateplay] = useState(true);
    const [handlechangtimemusic , sethandlechangtimemusic] = useState(true);
    const [statetest , setstatetest]  = useState(0);

    function xulymove(e) {
         if (e.target.className === "thanhchayoutside") {
            setthanhchayindexvolume((e.offsetX / e.target.clientWidth) * 100 + "%")    
        }
    }
    function handlemousedow(e) {
         if (e.target.className === "thanhchayoutside") {
            sethandlechangtimemusic(false)
            setthanhchayindexvolume(((e.nativeEvent.offsetX / e.target.clientWidth) * 100).toFixed(0) + "%")
            e.target.addEventListener('mousemove' , xulymove)

            function testt() {
                setchangetimemusic(true)
                sethandlechangtimemusic(true)
              e.target.removeEventListener('mousemove', xulymove)
              e.target.removeEventListener('mouseup' , testt)
            }
            e.target.addEventListener('mouseup' , testt )         
        }
    }
    useEffect(()=>{
        if(handlechangtimemusic){
            setthanhchayindexvolume(((document.querySelector('#audio').currentTime / document.querySelector('#audio').duration) * 100).toFixed(3) + "%")
        }
        document.querySelector('.margintime').textContent = timemusic(statetest)
    },[statetest])
    function handleplayclick() {
        const a = document.querySelector("#audio")
        let c = document.querySelector(".margintime")
        if (a.attributes.check.value === 'false') {
            a.play()
            a.ontimeupdate = ()=>{
                setstatetest(a.currentTime)
            }
            setstateplay(true);

        } else if (a.attributes.check.value === 'true') {
            a.pause()
            setstateplay(false);
        }
    }
    useEffect(() => {
        if (stateplay) {
            document.querySelector('.playclick').classList.remove('activebtnplay');
            document.querySelector('.pauseclick').classList.add('activebtnplay');
        } else {
            document.querySelector('.pauseclick').classList.remove('activebtnplay');
            document.querySelector('.playclick').classList.add('activebtnplay');
        }
    }, [stateplay])
    useEffect(() => {
        if (changetimemusic) {
            const a = document.querySelector("#audio")
            let num = parseInt(thanhchayindexvolume.slice(0, thanhchayindexvolume.length - 1))
            a.currentTime = (a.duration * num) / 100      
            setchangetimemusic(false) 
        }
    }, [changetimemusic])
    useEffect(() => {
        const c = document.querySelector(".maxtime")
        let b = setTimeout(() => {
            const a = document.querySelector("#audio")
            c.textContent = timemusic(a.duration)
            if (!isNaN(a.duration)) {
                clearInterval(b)
            }
        }, 200)
    },[data])
    function timemusic(value) {
        let a = Math.floor(value / 60)
        let b = Math.floor(value - a * 60)
        if (b < 10) {
            b = "0" + b
        }
        return `${a}:${b}`
    }
    function handlepause() {
        handleplayclick()
    }
    useEffect(() => {
        setthanhchayindexvolume('0%')
        setTimeout(()=>{
          setstateplay(false)
        },100)
    }, [data])

    useEffect(()=>{
      console.log(document.getElementById("audio").duration)
    },[data])

   

    return (
        <>
            <div className="itemplaymusic">
                <audio id='audio' check={stateplay.toString()} src={data ? data.url : ''} onEnded={handlepause}></audio>
                <div className='wrapitemplaymusic'>
                    <div className='controplay'>
                        <div className='cssbtnplay active'><FontAwesomeIcon icon={faShuffle} /></div>
                        <div className='cssbtnplay'><FontAwesomeIcon icon={faBackwardStep} /></div>
                        <div className='cssbtnplaymusic' onClick={handleplayclick}>
                            <FontAwesomeIcon icon={faCirclePlay} className="playclick activebtnplay" />
                            <FontAwesomeIcon icon={faCirclePause} className='pauseclick' />
                        </div>
                        <div className='cssbtnplay'><FontAwesomeIcon icon={faForwardStep} /></div>
                        <div className='cssbtnplay'><FontAwesomeIcon icon={faRepeat} /></div>
                    </div>

                    <div className='thanhchayplay'>
                        <div className="wrapthanhchayplay">
                            <p className='margintime'>0:00</p>
                            <div className='wrapthanhchay'>
                                <div className='thanhchay'>
                                    <div className='thanhchayitem' style={{ width: thanhchayindexvolume }} >
                                        <div className='thanhchayitem1'></div>
                                    </div>
                                    <div className='thanhchayoutside' onMouseDown={handlemousedow}  check='false'></div>
                                </div>
                            </div>
                            <p className='maxtime'></p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )

}

export default Handleplaymusic