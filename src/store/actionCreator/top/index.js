import {CHANGE_TOP_ALBUM, CHANGE_TOP_PALYLIST} from "../../actionType/top";
import {CHANGE_HIGHQUALITY} from "../../actionType/top";
import axios from "axios";
function topPlayList(payload) {
    return{
        type:CHANGE_TOP_PALYLIST,
        payload
    }
}
//精品歌单
function heighqualityList(payload) {
    return{
        type:CHANGE_HIGHQUALITY,
        payload
    }
}
//新碟
function topAlbumList(payload) {
    return{
        type:CHANGE_TOP_ALBUM,
        payload
    }
}

export default {
    getTopPlayList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist");
            dispatch(topPlayList(data.playlists))
        }
    },
    getHeighqualityList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist/highquality");
            dispatch(heighqualityList(data.playlists))
        }
    },
    getNewAlbumList(limit){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/album?limit="+limit);
            dispatch(topAlbumList(data.albums))
        }
    }
}