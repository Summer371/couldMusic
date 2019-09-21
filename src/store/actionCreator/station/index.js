import {CHANGE_STATION,CHANGE_TODAY,CHANGE_BANNER,CHANGE_PAY,CHANGE_SHOW,CHANGE_XQ} from '../../actionType/station'
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
export const ShowDetails=(payload)=>{
    return{
        type:CHANGE_SHOW,
        payload
    }
}
export const TheHostDetails=(payload)=>{
    return{
        type:CHANGE_XQ,
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
    todayRecommend(num=0,limit=3){//电台推荐
        return async (dispatch)=>{
            // const {data}=await axios.get("/dj/today/perfered")
            // let list=data.data
            const {data}=await axios.get("/dj/hot?limit="+limit+"&offset="+num+"")
            let list=data.djRadios
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
    },
    ShowDetails(id){//电台二级
        return async (dispatch)=>{
            const {data}=await axios.get("/dj/program?rid="+id+"&limit=999")
            let list=data.programs
            dispatch(ShowDetails(list))
        }
    },
    TheHostDetails(id){//电台二级详情
        return async (dispatch)=>{
            const {data}=await axios.get("/dj/detail?rid="+id+"")
            let list=data.djRadio
            dispatch(TheHostDetails(list))
        }
    }
}