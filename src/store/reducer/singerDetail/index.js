import initState from "../../state/singerDetail";
import {
    CHANGE_SONG_LIST,
    CHANGE_SINGER_MV,
    CHANGE_SINGER_ALBUM,
    CHANGE_SINGER_DESC
} from "../../actionType/singerDetail";
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SONG_LIST){
        state.songList = payload;
    }else if(type===CHANGE_SINGER_MV){
        state.singerMv = payload;
    }else if(type===CHANGE_SINGER_ALBUM){
        state.singerAlbum = payload;
    }
    else if(type === CHANGE_SINGER_DESC){
        state.singerDesc = payload
    }
    return state;
}