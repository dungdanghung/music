

function Renderlistmusicitem(da , testprop) {

    function settestprop(){
        da.pause = true
      testprop(da)
    }

    return (
        <>
        
        <div className="wrapallitemlistmusic" onClick={settestprop}>
            <div className="wraplistmusicitemimg">
                <img src={da.links.images[1].url} className="imgmusicitem"></img>
            </div>
            <div className="wraplistmusicitemconten">
                <div className="wraptenbaihatlistmusicitem"> <h3>{da.name}</h3> </div>
                <div className="wraptacgialistmusicitem"> <h5>{da.author}</h5> </div>
            </div>
        </div>
        </>
    )
}

export default Renderlistmusicitem