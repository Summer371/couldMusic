import songListed from '../../state/songListed';
import {CHANGE_SONGLISTED} from '../../actionType/songListed';
export default function (state=songListed,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SONGLISTED){
        state.songListed = payload
    }
    return state;
}