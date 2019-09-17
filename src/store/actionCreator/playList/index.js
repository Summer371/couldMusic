import {CHANGE_CATLIST,CHANGE_HOT_LIST} from "../../actionType/playList";
import axios from "axios";
//获取catlist

function catlist(payload) {
    return{
        type:CHANGE_CATLIST,
        payload
    }
}
function hotlist(payload) {
    return{
        type:CHANGE_HOT_LIST,
        payload
    }
}

export default {
    getCatList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/playlist/catlist");
            dispatch(catlist(data))
        }
    },
    getHotlist(){
        return async (dispatch)=>{
            const {data} = await axios.get("/playlist/hot");
            dispatch(hotlist(data))

        }
    }
}