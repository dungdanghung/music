import Header from '../compunen/header'
import Sirdbar from '../compunen/sirdbar'
import { useState , useEffect } from "react";
import Playmusic from '../compunen/playmusic';
import "./defaulayout.css"


function Defaylayout({ children }) {
   
    const [backgrou , setbackgrou] = useState("transparent");
    const a =window.addEventListener('scroll', () => {
        let a = parseInt(window.scrollY);
        a==0 ? setbackgrou("transparent") : setbackgrou("#242424")
        
    })

    return (
        <div className='wrapdefaulayout'>
            
            <Sirdbar></Sirdbar>
            <div className='wrapheaderconten'>
                <Header backgrou = {backgrou}></Header>
                {children}
            </div>
            <Playmusic></Playmusic>
        </div>
    )
}

export default Defaylayout