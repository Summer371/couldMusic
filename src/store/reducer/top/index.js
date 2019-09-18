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
import initState from "../../state/top";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_TOP_PALYLIST){
        state.playlists=payload;
    }else if(type===CHANGE_HIGHQUALITY){
        state.highquality=payload;
    }else if(type===CHANGE_TOP_ALBUM){
        state.topAlbum=payload;
    }else if(type===CHANGE_All_PLAYLIST){
        state.allPlayList=payload
    }else if(type===CHANGE_RANKINGLIST){
        state.rankingList=payload
    }else if(type===CHANGE_ALLRANKINGLIST){
        state.allRankingList=payload;
    }else if(type===CHANGE_ARTISTRANKINGLIST){
        state.artistRankingList=payload
    }else if(type===CHANGE_RANKINGDETAIL){
        state.rankingListDetail=payload
    }
    return state;
}
