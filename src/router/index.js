import Login from "../views/login/Login";
import LoginByTel from "../views/login/LoginByTel";
import CheckNum from "../views/login/CheckNum";
import Password from "../views/login/Password";
import SongSheet from "../views/discover/songSheet/SongSheet";
import Ranking from "../views/discover/ranking/Ranking";
import Home from "../views/Home";
import EverydayRecommend from "../views/discover/everydayRecommend/EverydayRecommend"
import Station from "../views/discover/station"   //电台首页
import PayFine from '../views/discover/station/PayFine'  //付费精品
import DJHome from '../views/discover/station/rankingList/DJHome'
import ShowDetails from '../views/discover/station/ShowDetails' //电台二次点击详情页
import Djclassify from '../views/discover/station/Djclassify'//电台分类
import MyPlayList from '../views/My/myLove' //我的歌单
import MyRecentlyPlay from '../views/My/myRecentlyPlay'//最近播放
import LocalMusic from '../views/My/localMusic';//本地音乐
import Download from '../views/My/Download';//本地下载
import SingerSearch from "../views/Search/singerSearch";//歌手搜索列表
import SingerDetail from "../views/Search/singerDetail";//歌手详细信息页
import Search from "../views/Search";
import SearchList from "../views/Search/searchList";
import Player from "../views/player/Player";//播放器
import FF from '../views/player/FF'  //v
import SongSheetDetail from "../views/discover/songSheet/SongSheetDetail";//歌单详情
export default [
    {
        path: "/loginByTel",
        title: "手机号登陆",
        component: LoginByTel
    },
    {
        path: "/login",
        title: "登陆",
        component: Login
    },
    {
        path: "/checkNum",
        title: "验证码",
        component: CheckNum
    },
    {
        path: "/password",
        title: "登陆",
        component: Password
    },
    {
        path: "/songSheet",
        title: "歌单",
        component: SongSheet
    },
    {
        path: "/ranking",
        title: "排行榜",
        component: Ranking
    },
    {
        path: "/everydayRecommend",
        title: "每日推荐",
        component: EverydayRecommend
    },
    {
        path: "/station",
        title: "电台",
        component: Station
    },
    {
        path: "/PayFine",
        title: "付费精品",
        component: PayFine
    },
    {
        path: "/Djclassify",
        title: "电台分类",
        component: Djclassify
    },
    {
        path: "/search",
        title: "搜索",
        component: Search
    },
    {
        path: "/searchList",
        title: "搜索结果",
        component: SearchList
    },
    {
        path: "/singer",
        title: "歌手搜索",
        component: SingerSearch
    },
    {
        path: "/myMusic",
        title: "我喜欢的",
        component: MyPlayList
    },
    {
        path: "/player",
        title: "播放器",
        component: Player
    },
    {
        path: "/DJHome",
        title: "电台排行",
        component: DJHome
    },
    {
        path: "/ShowDetails",
        title: "电台二级",
        component: ShowDetails
    },
    {

        path: "/songSheetDetail",
        title: "歌单详情",
        component: SongSheetDetail
    }, {
        path: '/myRecentlyPlay',
        title: '最近播放',
        component: MyRecentlyPlay
    },
    {
        path: '/localmusic',
        title: '本地音乐',
        component: LocalMusic
    },
    {
        path: '/download',
        title: '下载管理',
        component: Download
    },
    {

        path:"/searchDetail",
        title:"歌手详情",
        component:SingerDetail
    },
    {
        path:"/ff",
        title:"FN",
        component:FF
    },
    {
        path:"/",
        title:"主页",
        component:Home
    }

]
