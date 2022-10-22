import "./compunen.css"
import { useEffect, useState } from "react"




function Scroll({ children, setbackgrou }) {
    const [scroll, setscroll] = useState('0')
    const [scrollitem, setscrollitem] = useState()
    const [all, setall] = useState();


    function handlescroll(e) {
        e.target.scrollTop > 20 ? setbackgrou("#1e1e1e") : setbackgrou("transparent")
        setscroll(all.scrollheight / 100 * ((e.target.scrollTop + e.target.offsetHeight) / all.heightconten) * 100 - (parseInt(scrollitem.slice(0, scrollitem.length - 1)) / 100 * all.scrollheight))
    }


    function handlemove(e) {
        if (e.pageY - handlemove.prototype.ofsetyclick + document.querySelector('.scrollitem').offsetHeight > all.scrollheight - 1 || e.pageY - handlemove.prototype.ofsetyclick < 0) {
            return;
        }
        setscroll(e.pageY - handlemove.prototype.ofsetyclick)
        all.wrapcontens.scrollTop = (((e.pageY - handlemove.prototype.ofsetyclick + document.querySelector('.scrollitem').offsetHeight) / all.scrollheight) * 100) * all.heightconten / 100 - all.wrapcontens.offsetHeight

    }

    function handlescrolldow(e) {
        if (e.target.className == 'scroll') {
            if (e.nativeEvent.offsetY + document.querySelector('.scrollitem').offsetHeight / 2 >= e.target.offsetHeight) {
                setscroll(e.target.offsetHeight - document.querySelector('.scrollitem').offsetHeight)
                all.wrapcontens.scrollTop = all.wrapcontens.children[0].offsetHeight - all.wrapcontens.offsetHeight
            } else if (e.nativeEvent.offsetY - document.querySelector('.scrollitem').offsetHeight / 2 <= 0) {
                setscroll(0)
                all.wrapcontens.scrollTop = 0
            }
            else {
                setscroll(e.nativeEvent.offsetY - document.querySelector('.scrollitem').offsetHeight / 2)
                all.wrapcontens.scrollTop = ((e.nativeEvent.offsetY + document.querySelector('.scrollitem').offsetHeight / 2) / all.scrollheight * 100) * all.heightconten / 100 - all.wrapcontens.offsetHeight
            }
        }

        else if (e.target.className == 'scrollitem') {
            handlemove.prototype.ofsetyclick = e.nativeEvent.offsetY
            window.onmousemove = handlemove
            window.onmouseup = () => {
                window.onmousemove = null
            }
        }
    }

    const rever = new ResizeObserver((a)=>{
        setall({
            scrollheight: document.querySelector('.scroll').offsetHeight,
            heightconten: document.querySelector('.wrapconten').children[0].children[0].offsetHeight,
            wrapcontens: document.querySelector('.wrapcontens')
        })
        setscrollitem((document.querySelector('.scroll').offsetHeight / document.querySelector('.wrapconten').children[0].children[0].offsetHeight * 100).toFixed(0) + '%')
    })

    useEffect(() => {
        rever.observe(document.querySelector('.wrapcontens'))
        rever.observe(document.querySelector('.wrapconten').children[0].children[0])
    }, [])

    
    return (
        <>
            <div className="wrapconten">
                <div className="wrapcontens" onScroll={handlescroll}>
                    {children}
                </div>
                <div className='scroll' style={{ display: 'block' }} onMouseDown={handlescrolldow}>
                    <div className='scrollitem' style={{ top: scroll ? scroll : 0, height: scrollitem }} ></div>
                </div>
            </div>
        </>
    )
}



export default Scroll