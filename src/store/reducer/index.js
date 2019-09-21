//合并reducer
import personalized from "./personalized";
import recommend from "./recommend";
import playList from "./playList";
import top from "./top";
import search from  "./search";
import banner from "./banner";
import multimatch from "./multimatch"
import {
    combineReducers
} from "redux";
import  stationList from './station' //电台推举类型
import todayRecommendList from './station/todayRecommend'  //电台推荐
import djBannerList from './station/djBanner'  //电台轮播
import PayFineList from './station/PayFine' //付费精品
import ShowDetailsList from './station/ShowDetails' //电台二级
import TheHostDetailsList from './station/TheHostDetails' //电台二级详情
import myPlayList from './myPlayList'//我的歌单中所有歌曲Id
import userPlayList from "./userPlayList";//获取我的歌单
import playListDetail from './myPlayList/playListDetail'//歌曲详情

import singerDetail from "./singerDetail"//歌手详细信息

import myRecentlyPlay from './myRecentlyPlay'//播放记录
import userDetail from './userDetail'//用户详情；
import singer from "./singer"
import playUrl from "./playUrl";//播放地址
export default combineReducers({
    personalized,
    recommend,
    playList,
    top,
    banner,
    stationList,
    todayRecommendList,
    djBannerList,
    PayFineList,
    ShowDetailsList,
    TheHostDetailsList,
    myPlayList,
    userPlayList,
    playListDetail,
    search,
    multimatch,

    singerDetail,
    singer,
    playUrl,


    myRecentlyPlay,

    userDetail

})