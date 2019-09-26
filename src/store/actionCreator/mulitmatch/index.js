import {
    CHANGE_MULITMATCH,
    CHANGE_SEARCH_RESULT2,
    CHANGE_DEFAULT,
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
        type:CHANGE_SEARCH_RESULT2,
        payload
    }
}
function searchDefault(payload){
    return {
        type:CHANGE_DEFAULT,
        payload
    }
}
export default {
    getMultimatch(keyword){
        return async (dispatch)=>{
            const {data} = await axios.get("/search/multimatch?keywords="+keyword);
            dispatch(mulitmatch(data.result))
            }
    },
    getSearchResult2(keywords=""){
        return async (dispatch)=>{
            if(keywords!==""){
                const {data} = await axios.get("/search?keywords="+keywords);

                dispatch(search(data.result.songs))
            }else{
                dispatch(search([]))
            }
        }
    },
    getSearchDefault(){
        return async (dispatch)=>{
            const {data}= await axios.get("/search/default");
            dispatch(searchDefault(data.data.realkeyword))
        }
    }
}