import Sing from '../../components/recentlyPlay/Sing'
import ZhiBo from '../../components/recentlyPlay/ZhiBo'
import Vedios from '../../components/recentlyPlay/Vedios'

export default [
    {
        path:"/myRecentlyPlay",
        title:'歌曲',
        exact:true,
        component:Sing
    },
    {
        path:"/myRecentlyPlay/recentlyZhiBo",
        title:'直播',
        component:ZhiBo
    },
    {
        path:"/myRecentlyPlay/recentlyVedios",
        title:'视频',
        component:Vedios
    },
]