import {ADD_MV} from ../../actionType/mv
import axios from "axios"
function addMvStop(payload){
    return {
        type:ADD_MV,
        payload
    }
}

export default{

}