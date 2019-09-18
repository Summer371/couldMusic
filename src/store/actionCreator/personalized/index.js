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
    recommendSongsList(limit=6){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized?limit="+limit)
            dispatch(recommendSongsList(data.result))
        }
    },
    newSongs(limit=3){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized/newsong?limit="+limit)
            dispatch(newSongs(data.result))
        }
    },
}