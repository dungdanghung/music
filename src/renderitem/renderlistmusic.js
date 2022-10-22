import Renderlistmusicitem from "./renderlistmusicitem";

function Renderlistmusic(data, index , testprop) {

  return (
    <div key={index} className="listmusiccontenitem">
      {data.map((da, index) => {

        return <div key={index} className="listmusiccontenitem_item" >
          {Renderlistmusicitem(da , testprop)}
        </div>
      })}
    </div>
  )
}

export default Renderlistmusic;