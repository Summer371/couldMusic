import {CHANGE_CATLIST,CHANGE_HOT_LIST,CHANGE_LIST_DETAIL} from "../../actionType/playList";
import axios from "axios";
//获取catlist
function catlist(payload) {
    return{
        type:CHANGE_CATLIST,
        payload
    }
}
//歌单详情
function listDetail(payload) {
    return{
        type:CHANGE_LIST_DETAIL,
        payload
    }
}
//热歌列表
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
    },
    getListDetail(id){
        return async (dispatch)=>{
            const {data} = await axios.get("/playlist/detail?id="+id);
            dispatch(listDetail(data.playlist))
        }
    }
}