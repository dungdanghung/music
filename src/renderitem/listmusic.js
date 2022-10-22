import { useEffect, useState } from "react";
import Renderlistmusic from "./renderlistmusic";


function Listmusic(data, hangf , testprop) {

    let resote = []
    data.reduce((a, b, c) => {
        if (c < hangf * 3) {
            a = a.concat(b);
            if (a.length >= hangf) {
                resote.push(a)
                return []
            } else {
                return a;
            }
        }
    }, [])

    return (
        <>
          {resote.map((data , index)=>{
            return Renderlistmusic(data , index , testprop)
          })}
        </>
    )
}

export default Listmusic;