import Header from '../compunen/header'
import Sirdbar from '../compunen/sirdbar'
import { useEffect, useState } from "react";
import Playmusic from '../compunen/playmusic';
import "./defaulayout.css"
import dungdanghung_React_scrollbar from "danghungdung-react-scrollbar"




function Defaylayout({ children }) {
    const [backgrou, setbackgrou] = useState("transparent")
    const [state, setstate] = useState();
    function testprop(data) {
        setstate(data)
    }
    useEffect(()=>{
        let a = document.querySelector(".test")
        dungdanghung_React_scrollbar(a)
    })
    
    console.log(children)

    return (
        <div className='wrapdefaulayout'>
            <div className='wrapcontenmain'>

                <Sirdbar></Sirdbar>
                <div className='wrapheaderconten'>
                    <Header backgrou={backgrou}></Header>
                    <div className='test' style={{ height: "100%", width: "100%", position: "absolute" }}>
                            <div className="wrapconten">
                                {children(testprop)}
                            </div>
                    </div>
                </div>
            </div>
            <Playmusic data={state}></Playmusic>
        </div>

    )
}

export default Defaylayout