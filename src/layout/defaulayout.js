import Header from '../compunen/header'
import Sirdbar from '../compunen/sirdbar'
import { useState } from "react";
import Playmusic from '../compunen/playmusic';
import "./defaulayout.css"
import Scroll from '../compunen/scroll';




function Defaylayout({ children }) {
    const [backgrou, setbackgrou] = useState("transparent")
    const [state, setstate] = useState();
    function testprop(data) {
        setstate(data)
    }

    return (
        <div className='wrapdefaulayout'>
            <div className='wrapcontenmain'>

                <Sirdbar></Sirdbar>
                <div className='wrapheaderconten'>
                    <Header backgrou={backgrou}></Header>
                    <Scroll setbackgrou={setbackgrou}>
                        <div className='wrapcontenitem'>
                            {children.type(testprop)}
                        </div>
                    </Scroll>

                </div>
            </div>
            <Playmusic data={state}></Playmusic>
        </div>

    )
}

export default Defaylayout