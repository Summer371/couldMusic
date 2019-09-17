import {
    CHANGE_TOP_PALYLIST,
    CHANGE_HIGHQUALITY,
    CHANGE_TOP_ALBUM
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
    }
    return state;
}
