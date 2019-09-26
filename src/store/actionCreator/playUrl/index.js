import {CHANGE_SONGS_URL,CHANGE_LYRIC} from "../../actionType/playUrl";
import axios from "axios";
//地址
function songsUrlList(payload) {
    return{
        type:CHANGE_SONGS_URL,
        payload
    }
}
//歌词
function lyricList(payload) {
    return{
        type:CHANGE_LYRIC,
        payload
    }
}
export default {
    getSongsUrlList(id){
        return async (dispatch)=>{
            const isPlay= await axios.get("/check/music?id="+id);
            const {data} = await axios.get("/song/url?id="+id);
            dispatch(songsUrlList(data.data))
        }
    },
    getLyricList(id){
        return async (dispatch)=>{
            const {data} = await axios.get("/lyric?id="+id)
            dispatch(lyricList(data.lrc?data.lrc.lyric:""))
        }
    }
}