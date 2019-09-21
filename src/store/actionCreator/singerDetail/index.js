import axios from "axios";
import {
    CHANGE_SONG_LIST,
    CHANGE_SINGER_MV,
    CHANGE_SINGER_ALBUM,
    CHANGE_SINGER_DESC
}from "../../actionType/singerDetail";
function songList (payload){
    return {
        type:CHANGE_SONG_LIST,
        payload
    }
}
function singerMv(payload){
    return{
        type:CHANGE_SINGER_MV,
        payload
    }
}
function singerAlbum(payload){
    return {
        type:CHANGE_SINGER_ALBUM,
        payload
    }
}
function singerDesc(payload){
    return {
        type:CHANGE_SINGER_DESC,
        payload
    }
}
export default {
    getSongList(id){
        return async(dispatch)=>{
            const {data} = await axios.get("/artists?id="+id);
            dispatch(songList(data.hotSongs))
        }
    },
    getSingerMv(id){
        return async(dispatch)=>{
            const {data} = await axios.get("/artist/mv?id="+id);
            dispatch(singerMv(data.mvs))
        }
    },
    getSingerDesc(id){
        return async(dispatch)=>{
            const {data} = await axios.get("/artist/desc?id="+id);

            dispatch(singerDesc(data))
        }
    },
    getSingerAlbum(id){
        return async(dispatch,limit=20)=>{
            console.log(id)
            const {data} = await axios.get("/artist/album?id="+id);
            dispatch(singerAlbum(data.hotAlbums))
        }
    }
}