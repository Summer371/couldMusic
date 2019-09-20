import ASong from '../../components/localMusic/aSong'
import Ator from '../../components/localMusic/ator'
import ZhuanJi from '../../components/localMusic/zhuanJi'

export default [
    {
        path:"/localmusic",
        title:'单曲',
        exact:true,
        component:ASong
    },
    {
        path:"/localmusic/ator",
        title:'歌手',
        component:Ator
    },
    {
        path:"/localmusic/zhuanji",
        title:'专辑',
        component:ZhuanJi
    },
]