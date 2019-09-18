import {CHANGE_SEARCH_HOT,
    CHANGE_SEARCH_RESULT,
    CHANGE_SEARCH_DEFAULT
} from "../../actionType/search";
import axios from "axios";
function search(payload) {
    return{
        type:CHANGE_SEARCH_RESULT,
        payload
    }
}
function searchHot(payload){
    return {
        type:CHANGE_SEARCH_HOT,
        payload
    }
}
function searchDefault(payload){
    return {
        type:CHANGE_SEARCH_DEFAULT,
        payload
    }
}
export default {
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
    getSearchHot(){
        return async (dispatch)=>{
            const {data} = await axios.get("/search/hot/detail");
            console.log("hot",data.data);
            dispatch(searchHot(data.data))
        }
    },
    getSearchDefault(){
        return async (dispatch)=>{
            const {data}= await axios.get("/search/default");
            console.log(data.data.realkeyword);
            dispatch(searchDefault(data.data.realkeyword))
        }
    }
}