import Handleimghover from "./handleimghove";

function Gandaycontenitem(da, index) {
    if (da.active) {
        return setgandayitemactive(da, index);
    }
    else {
        return setgandayitemnoactive(da, index);
    }
}



function setgandayitemactive(data, index) {
    return (
        <div key={index} className="gandayactiveitem">
            <div className="gandayactiveitem_conten">
                <div className= 'wraphandliimg'>
                <img className="handleimg" src={data.url}></img>
                <Handleimghover full={true} />
                </div>
            </div>
            <div className="gandayactiveitem_title">
            <h3 className="gandayactiveitem_title-text">{data.text}</h3>
            </div>
        </div>
    )
}

function setgandayitemnoactive(data, index) {
    return (
        <div key={index} className="gandayactiveitem">
            <div className="gandayactiveitem_conten">
                <div className="circlegandayitem">
                    <svg className="svg" width="100%" height="100%" viewBox="0 0 100 100"><circle fill="none" stroke="rgba(255, 255, 255, 0.2)" cx={50} cy={50} r="48.75" strokeWidth="2.5" /><circle fill="none" stroke="#ff4b4a" cx={50} cy={50} r="48.75" strokeWidth="2.5" strokeDasharray="306.3052837250048" strokeDashoffset={0} style={{ transition: "stroke-dashoffset 850ms ease-in-out 0s" }} /></svg>
                    <img className="handleimg" src={data.url}></img>
                    <Handleimghover />
                </div>
                <div className="circlegandayitem1">
                    
                    <img src={data.url} ></img>
                   
                </div>
                <div className="like">
                    <img  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"></img>
                </div>
            </div>
            <div className="gandayactiveitem_title">
                <h3 className="gandayactiveitem_title-text">{data.text}</h3>
            </div>
        </div>
    )
}




export default Gandaycontenitem;