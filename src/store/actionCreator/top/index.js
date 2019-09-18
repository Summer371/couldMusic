import {
    CHANGE_TOP_PALYLIST,
    CHANGE_HIGHQUALITY,
    CHANGE_TOP_ALBUM,
    CHANGE_All_PLAYLIST,
    CHANGE_RANKINGLIST,
    CHANGE_ALLRANKINGLIST,
    CHANGE_ARTISTRANKINGLIST,
    CHANGE_RANKINGDETAIL
} from "../../actionType/top";
import axios from "axios";
//推荐歌单
function topPlayList(payload) {
    return{
        type:CHANGE_TOP_PALYLIST,
        payload
    }
}
//所有榜单
function allRankingList(payload) {
    return{
        type:CHANGE_ALLRANKINGLIST,
        payload
    }
}
//歌手榜单
function artistRankingList(payload) {
    return{
        type:CHANGE_ARTISTRANKINGLIST,
        payload
    }
}
//榜单详情
function rankingDetail(payload) {
    return{
        type:CHANGE_RANKINGDETAIL,
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
//各类排行榜
function rankingList(payload) {
    return{
        type:CHANGE_RANKINGLIST,
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
//各类歌单
function allPlayList(payload) {
    return{
        type:CHANGE_All_PLAYLIST,
        payload
    }
}

export default {
    getTopPlayList(limit=50){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist?limit="+limit);
            dispatch(topPlayList(data.playlists))
        }
    },
    getNewAlbumList(limit=3){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/album?limit="+limit);
            dispatch(topAlbumList(data.albums))
        }
    },
    getHeighqualityList(limit=50){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist/highquality?limit"+limit);
            dispatch(heighqualityList(data.playlists))
        }
    },
    getAllPlayList(tag,limit=50){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist?limit="+limit+"&cat="+tag);
            dispatch(allPlayList(data.playlists))
        }
    },
    getRankingList(ids=1){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/list?idx="+ids);
            dispatch(rankingList(data.playlist))
        }
    },
    getAllRankingList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/toplist");
            dispatch(allRankingList(data.list))
        }
    },
    getArtistRankingList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/toplist/artist");
            dispatch(artistRankingList(data.list))
        }
    },
    getRankingDetail(){
        return async (dispatch)=>{
            const {data} = await axios.get("/toplist/detail");
            dispatch(rankingDetail(data.list))
        }
    }

}