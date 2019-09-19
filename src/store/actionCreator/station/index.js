import {CHANGE_STATION,CHANGE_TODAY,CHANGE_BANNER,CHANGE_PAY} from '../../actionType/station'
import axios from 'axios'
export const stateList=(payload)=>{
    return{
        type:CHANGE_STATION,
        payload
    }
}
export const todayRecommend=(payload)=>{
    return{
        type:CHANGE_TODAY,
        payload
    }
}
export const djBanner=(payload)=>{
    return{
        type:CHANGE_BANNER,
        payload
    }
}
export const PayFine=(payload)=>{
    return{
        type:CHANGE_PAY,
        payload
    }
}

export default {
    recommend(){
        return async (dispatch)=>{
            const {data}=await axios.get("/dj/category/recommend")
            let list=data.data
            dispatch(stateList(list))
        }
    },
    todayRecommend(){//电台推荐
        return async (dispatch)=>{
            const {data}=await axios.get("/dj/today/perfered")
            let list=data.data
            dispatch(todayRecommend(list))
        }
    },
    djBanner(){//轮播
        return async (dispatch)=>{
            const {data}=await axios.get("/banner")
            let list=data.banners
            dispatch(djBanner(list))
        }
    },
    PayFine(limit){//付费精品
        return async (dispatch)=>{
            const {data}=await axios.get("/dj/paygift?limit="+limit+"")
            let list=data.data.list
            dispatch(PayFine(list))
        }
    }
}