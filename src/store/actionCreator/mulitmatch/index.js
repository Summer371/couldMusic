import {
    CHANGE_MULITMATCH,
    CHANGE_SEARCH_RESULT
} from "../../actionType/multimatch";
import axios from "axios";
function mulitmatch(payload){
    return {
        type:CHANGE_MULITMATCH,
        payload
    }
}
function search(payload){
    return {
        type:CHANGE_SEARCH_RESULT,
        payload
    }
}
export default {
    getMultimatch(keyword){
        return async (dispatch)=>{
            const {data} = await axios.get("/search/multimatch?keywords="+keyword);
            console.log(data);
            //dispatch(mulitmatch(data))
            }

    },
    getSearchResult(keywords=""){
        return async (dispatch)=>{
            if(keywords!==""){
                const {data} = await axios.get("/search?keywords="+keywords);
                console.log(data);
                dispatch(search(data.result.songs))
            }else{
                dispatch(search([]))
            }
        }
    },
}