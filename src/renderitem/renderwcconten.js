

function Renderwcconten(data , index) {
   return(
    
    <div key={index} id={index} className={`wcitem1_1 `}>
        <img src={data.src}></img>
    </div>


   )
}


export default Renderwcconten