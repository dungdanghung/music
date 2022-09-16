import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons"
import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import { faFileAudio } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'



function Playmusic() {

  const [indexvolume, setindexvolume] = useState("7%")
  const [thanhchayindexvolume, setthanhchayindexvolume] = useState("0%")
  const [changetimemusic, setchangetimemusic] = useState(false)
  function xulymove(e) {
    if(e.target.className === "divoutside"){

      setindexvolume((e.offsetX/70) * 100 +7+ "%")
    }
    else if(e.target.className === "thanhchayoutside"){
      setthanhchayindexvolume((e.offsetX/e.target.clientWidth)*100+1+"%")
    }
  }

  
   function handlemousedow(e) {
    const a = e.target
    if(a.className === "divoutside"){
      setindexvolume((e.nativeEvent.offsetX/70) * 100 +7+ "%")
      a.addEventListener("mousemove",xulymove)
    }
    else if(a.className === "thanhchayoutside"){
      setthanhchayindexvolume((e.nativeEvent.offsetX/e.target.clientWidth) * 100 + "%")
      setchangetimemusic(true)
      a.addEventListener("mousemove",xulymove)
    }
  }
  
  window.addEventListener("mouseup", () => {
    const c = document.querySelector(".divoutside")
    const d = document.querySelector(".thanhchayoutside")
    c.removeEventListener("mousemove", xulymove);
    d.removeEventListener("mousemove", xulymove);
  })

  function handleplayclick() {
    const a = document.querySelector("#audio")
    const b = document.querySelector(".thanhchayitem")
    let c = document.querySelector(".margintime")
    if(a.attributes.check.value === 'true') {
      a.play()
      a.ontimeupdate = () =>{
        b.style.width = ((a.currentTime / a.duration) *100).toFixed(0) + "%"
        c.textContent = test(a.currentTime)
      }
      a.attributes.check.value = "false"
    }else if(a.attributes.check.value === 'false') {
      a.pause()
      a.attributes.check.value = "true"
    }
  }

  
  useEffect(() => {
    const a = document.querySelector("#audio")
    let b = indexvolume.slice(0 , indexvolume.length-1)
    a.volume = ((b-7)/100).toFixed(1)
  },[indexvolume])
  
  
  useEffect(() => {
    if(changetimemusic)
    {
      const a = document.querySelector("#audio")
      let num = parseInt(thanhchayindexvolume.slice(0,thanhchayindexvolume.length -1))
      a.currentTime = (a.duration*num)/100
    }
  },[thanhchayindexvolume])

  
   useEffect(()=>{
    const c = document.querySelector(".maxtime")
   let b= setInterval(() => {
      const a = document.querySelector("#audio")
      c.textContent = test(a.duration)
      if(!isNaN(a.duration))
      {
        clearInterval(b)
      }
    },10)
   })

   function test (value) {
     let a = Math.floor(value / 60)
     let b = Math.floor(value - a *60)
     if(b < 10)
     {
      b= "0" + b
     }
     return `${a}:${b}`
   }



  return (
    <div className="playmusic">
      <div className=" playmusicitem">
        <div className="itemuser">
          <div className="thumner">
            <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/c/1/f/ac1f3f4e016f9c5abc58c9bebf414a57.jpg"></img>
          </div>


          <div className="contenplaymusic">
            <div>
              <div className="titlecontenplaymusic">
                <a href="/">
                  <span className="text_titlecontenplaymusic">Một Đêm Say (DJ DSmall Remix)</span>
                </a>
              </div>
              <div className="titleitemcontenplaymusic">
                <a href="/" className="titleitemcontenplaymusic_title1">DJ DSmall</a>
                <a href="/" className="titleitemcontenplaymusic_title2">Thịnh Suy</a>
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

        <div className="itemplaymusic">

        <audio  id='audio' check="true" src='https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3'></audio>

          <div className='wrapitemplaymusic'>
            <div className='controplay'>
              <div className='cssbtnplay active'><FontAwesomeIcon icon={faShuffle} /></div>
              <div className='cssbtnplay'><FontAwesomeIcon icon={faBackwardStep} /></div>
              <div className='cssbtnplaymusic'><FontAwesomeIcon icon={faCirclePlay} className="playclick" onClick={handleplayclick}/></div>
              <div className='cssbtnplay'><FontAwesomeIcon icon={faForwardStep} /></div>
              <div className='cssbtnplay'><FontAwesomeIcon icon={faRepeat} /></div>
            </div>

            <div className='thanhchayplay'>

              <div className="wrapthanhchayplay">
                <p className='margintime'>0:00</p>
                <div className='wrapthanhchay'>
                <div className='thanhchay'>
                  <div className='thanhchayitem'style={{width: thanhchayindexvolume}} >
                    <div className='thanhchayitem1'></div>
                  </div>
                  <div className='thanhchayoutside' onMouseDown={handlemousedow} check = 'false'></div>
                </div>
                </div>
                <p className='maxtime'></p>
              </div>
            </div>
          </div>

          


        </div>

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
                    <div className='nutrangeitem1' style={{width: indexvolume}}>
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
      </div>
    </div>
  )
}

export default Playmusic