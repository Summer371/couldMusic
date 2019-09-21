import React,{Component} from "react";
import singerDetail from "../../../store/actionCreator/singerDetail";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    NavLink,
    Route,
    Switch
} from "react-router-dom";
import "../../../assets/style/font/iconfont.css";
import "../../../assets/style/search/singerDetail.css";
import SingerIndex from "../../../components/search/singerDetail/index";
import SingerSong from "../../../components/search/singerDetail/song"
import SingerAlbum from "../../../components/search/singerDetail/album"
import SingerVideo from "../../../components/search/singerDetail/video"
class SingerDetail extends Component{
    render(){
        const {imgurl,name} = this.props.location.state;
        let id = this.props.location.state.id
        return(
            <>
                <header className={"singerDetail-header"} style={{
                    borderRadious:"0.15rem",
                    background:"url("+imgurl+")",
                    backgroundSize:"100%"
                }}>
                 <div className={"header-cover"}>
                     <div className={"header-top"}>
                         <i className={"iconfont"} onClick={()=>{
                             this.props.history.push({
                                 pathname:"/singer"
                             })
                         }}>&#xe666;</i>
                         <i className={"iconfont"} id={"two"}>
                             &#xe664;
                         </i>
                     </div>
                     <div className={"singer-actives"}>
                         <h3>{name}</h3>
                         <h4>昵称：{name}</h4>
                         <p>网易音乐人</p>
                         <span>+关注</span>
                         <b>私信</b>
                     </div>
                     <div className={"singer-bottom"}>
                         <i className={"iconfont"}>&#xe65d;</i>
                         <div className={"concert"}>
                            <h4>10月26日-10月27日 鲜氧音乐节</h4>
                             <p>2019.10.26 宁波市 宁波市江北区梅竹路城市田园-达人村</p>
                         </div>
                         <h3>抢票</h3>
                     </div>
                 </div>
                </header>
                <main className={"singerDetail-main"}>
                    <nav className={"main-nav"}>
                        <NavLink activeStyle={{color:"lightgreen"}} to={{
                            pathname:"/searchDetail/index",
                            state:{
                                imgurl:this.props.location.state.imgurl,
                                name,
                                id
                            }
                        }}>主页</NavLink>
                        <NavLink activeStyle={{color:"lightgreen"}} to={{
                            pathname:"/searchDetail/song",
                            state:{
                                imgurl:this.props.location.state.imgurl,
                                name,
                                id
                            }
                        }}>歌曲</NavLink>
                        <NavLink  activeStyle={{color:"lightgreen"}} to={{
                            pathname:"/searchDetail/album",
                            state:{
                                imgurl:this.props.location.state.imgurl,
                                name,
                                id
                            }
                        }}>专辑</NavLink>
                        <NavLink  activeStyle={{color:"lightgreen"}} to={{
                            pathname:"/searchDetail/video",
                            state:{
                                imgurl:this.props.location.state.imgurl,
                                name,
                                id
                            }
                        }}>视频</NavLink>
                        <a>动态</a>
                    </nav>
                </main>
                <Switch>
                    <Route path={"/searchDetail/index"} component={SingerIndex}></Route>
                    <Route path={"/searchDetail/song"} component={SingerSong}></Route>
                    <Route path={"/searchDetail/album"} component={SingerAlbum}></Route>
                    <Route path={"/searchDetail/video"} component={SingerVideo}></Route>
                </Switch>
            </>
        )
    }
    componentWillMount() {
         this.props.getSongList(this.props.location.state.id);
         this.props.getSingerMv(this.props.location.state.id);
         this.props.getSingerDesc(this.props.location.state.id);
         this.props.getSingerAlbum(this.props.location.state.id);
    }
}
function mapStateToProps(state) {
    return {
        songList: state.singerDetail.songList,
        singerMv:state.singerDetail.singerMv,
        singerAlbum:state.singerDetail.singerAlbum,
        singerDesc:state.singerDetail.singerDesc,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(singerDetail, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerDetail)