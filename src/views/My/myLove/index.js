import React from 'react';
import '../../../assets/style/my/mylove.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import createDispatch from '../../../store/actionCreator/myPlayList';
import SongList from '../../../components/My/MyPlayList/songList'
class MyMusic extends React.Component{
    render() {
        let topList = this.props.topList?this.props.topList:[]
        return (
            <div className={"playListDetail"}>
                <div className={"fiexd"}>
                    <div className={"left"}>
                        <i className={"iconfont iconxia"} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span className={"size"}>歌单</span>
                    </div>
                    <div className={"right"}>
                        <i className={"iconfont iconsousuo"} onClick={()=>{
                        }}></i>
                        <i className={"iconfont iconcaidan-dian"} onClick={()=>{
                        }}></i>
                    </div>
                </div>
                {
                    topList.map((v,i)=>(
                        <div className={"playListPic"} key={i}>
                            <img src={v.coverImgUrl} alt=""/>
                            <span className={"num"}><i className={"iconjianyingyoujiantou-copy"}></i>{v.playCount}</span>
                            <div className={"picRight"}>
                                <li>{v.name}</li>
                                <span>
                                    <img className={'logo'} src={v.creator.avatarUrl} alt=""/>
                                    <span className={"size"}>{v.creator.nickname}</span>
                                    <span>></span>
                                </span>
                            </div>
                        </div>
                    ))
                }
                <div className={"playDoList"}>
                    <li>
                        <i className={"iconfont iconpinglun"}></i>
                        <span className={"icon"}>评论</span>
                    </li>
                    <li>
                        <i className={"iconfont iconfenxiang"}></i>
                        <span className={"icon"}>分享</span>
                    </li>
                    <li>
                        <i className={"iconfont iconxiazaiguanli"}></i>
                        <span className={"icon"}>下载</span>
                    </li>
                    <li>
                        <i className={"iconfont iconcheck"}></i>
                        <span className={"icon"}>多选</span>
                    </li>
                </div>
                <div className={"playSingList"}>
                    <div className={"top"}>
                        <i className={"iconfont iconrandom"}></i>
                        <span className={"center"}>随机播放</span>
                        <span>{'(共'+this.props.myPlayList.length+'首)'}</span>
                    </div>
                    <SongList id={this.props.location.state.playListId} ></SongList>
                </div>
            </div>
        );
    };
    fixed(){
        var divtwo = document.querySelector(".top");
        window.addEventListener("scroll",function () {
            let leng = document.documentElement.scrollTop;
            if(leng>=150){
                divtwo.id = "centerfiexd";
            }else {
                divtwo.id = null
            }
        })
    }
    componentDidMount() {
        this.fixed();
    }
}function mapState(state) {
    return {
        topList:state.myPlayList.topList,
        myPlayList:state.myPlayList.myPlayList
    }
}
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}

export default connect(mapState,mapDispatch)(MyMusic)  ;