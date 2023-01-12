const state = {
    scroll: "",
}


function Rootreducer(intistate = state, action) {
    switch (action.type) {
        case "testactionupdate":
            return {
                ...intistate,
                test: action.data,
            }
    
        default:
            break;
    }
}


export default Rootreducer