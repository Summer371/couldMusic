import {CHANGE_RECOMMEND_SONGS_LIST} from "../../actionType/personalized";
import {CHANGE_NEW_SONGS_LIST} from "../../actionType/personalized";
import axios from "axios";
//推荐歌单
function recommendSongsList(payload) {
    return{
        type:CHANGE_RECOMMEND_SONGS_LIST,
            payload
    }
}
//新歌
function newSongs(payload) {
    return{
        type:CHANGE_NEW_SONGS_LIST,
        payload
    }
}

export default {
    recommendSongsList(limit){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized?limit="+limit)
            dispatch(recommendSongsList(data.result))
        }
    },
    newSongs(){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized/newsong")
            dispatch(newSongs(data.result))
        }
    },
}