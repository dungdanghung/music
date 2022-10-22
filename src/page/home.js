import './page.css'
import Renderwcconten from '../renderitem/renderwcconten'
import Animationwc from '../renderitem/animationwc'
import Gandaycontenitem from '../renderitem/gandaycontenitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Listmusic from '../renderitem/listmusic'
import datasongs from '../data/songs.json'
import { useEffect } from 'react'
const data = [
    {
        src: 'https://photo-zmp3.zmdcdn.me/banner/a/6/4/8/a6480aa703cff5161709dff3353104b3.jpg'
    },
    {
        src: 'https://photo-zmp3.zmdcdn.me/banner/6/4/3/0/643085bfa775814e512121e6791c0249.jpg'
    },
    {
        src: 'https://photo-zmp3.zmdcdn.me/banner/1/3/3/2/133297fcd071c47643210cef52473975.jpg'
    },
    {
        src: 'https://photo-zmp3.zmdcdn.me/banner/0/8/6/f/086f0f029380b3b574b1134be3337575.jpg'
    },
    {
        src: 'https://photo-zmp3.zmdcdn.me/banner/a/0/6/a/a06af87a17f2a8e3644c64147b476a84.jpg'
    }
]
const dataganday = [
    {
        active: true,
        text: "Chill Hits",
        url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/e/d/7/4ed7e48e3b81c3387155f6c885f03ff7.jpg"
    },
    {
        active: false,
        text: "Chill",
        url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/8/7/f/087faec09429d0f42545a3e2503e2dad.jpg"
    },
    {
        active: false,
        text: "C-POP",
        url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/4/b/9/24b9acce0f6a1e67f063f5ae936a66ef.jpg"
    },
    {
        active: false,
        text: "EDM",
        url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/f/6/2/ef629460aba3bf16ced1931b951a9dc6.jpg"
    },
    {
        active: false,
        text: "V-POP",
        url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg"
    },
    {
        active: false,
        text: "K-POP",
        url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg"
    },
    {
        active: true,
        text: "Remix Việt Hay Nhất",
        url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/3/e/023ec1a260786a871b488a508b81ad8f.jpg"
    },

]


function Home(testprop) {

    useEffect(() => {

        Animationwc();
    }, [])

    return (
        <div className="conten">
            {/* ==============wc=============== */}
            <div className='wc'>
                <div className='wcitem'>
                    <div className='wcitem1'>
                        {data.map((d, index) => {
                            return Renderwcconten(d, index)
                        })}
                    </div>
                </div>
            </div>

            {/* ===============gan day========== */}
            <div className='ganday'>
                <div className='gandaytitle'>
                    <div className='titleganday'><p>GẦN ĐÂY</p></div>
                    <div className='titletatca'>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <p>TẤT CẢ</p>
                    </div>

                </div>
                <div className='gandayconten'>
                    {dataganday.map((da, index) => {
                        return Gandaycontenitem(da, index)
                    })}
                </div>
            </div>

            {/* ===============list music========== */}
            <div className='listmusic'>
                <div className='titlelistmusic'>
                    <div className='titlemainlistmusic'>Mới phát hành</div>
                    <div className='actionlistmusic'>
                        <div className='wrapbtnactionlistmusic'>
                            <button className='actionbtnlistmusic'>BÀI HÁT</button>
                            <button>ALBUM</button>
                        </div>
                        <div className='titletatca'>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <p>TẤT CẢ</p>
                        </div>
                    </div>
                </div>

                <div className='listmusicconten'>
                    {Listmusic(datasongs, 9, testprop)}
                </div>
            </div>



        </div>
    )
}

export default Home

