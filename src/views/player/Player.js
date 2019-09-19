import React from "react";
import {
    PageHeader
} from "antd";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import playUrl from "../../store/actionCreator/playUrl";
import "../../assets/style/player.css";
class Player extends React.Component{
    render() {
        const {songsUrl}=this.props;
        let songUrl={};
        let index=0;
         songsUrl.map((v,i)=>{
            if(v.id===this.props.location.state.id){
                    songUrl=v;
                    index=i;
            }
        })
        return(
            <div className={"player"}>
                <PageHeader
                    onBack={() =>  this.props.history.push("/everydayRecommend")}
                    title={this.props.location.state.songName}
                    subTitle={this.props.location.state.singer} />
                <div className={"rotate"}>
                    <div>
                        <img src={this.props.location.state.img} alt=""/>
                    </div>
                </div>
                <div className={"playerBody"}>
                    <audio src={songUrl.url} controls={"controls"} loop={"loop"}></audio>
                    <div className={"playerBotton"}>
                        <i className={"iconfont icon-xihuan-kongpt"}></i>
                        <i className={"iconfont icon-shangyiqu"} onClick={this.lastSong.bind(this,index)}></i>
                        <i className={"iconfont icon-bofang"}></i>
                        <i className={"iconfont icon-xiayiqu"} onClick={this.nextSong.bind(this,index)}></i>
                        <i className={"iconfont icon-caidan"}></i>
                    </div>
                </div>
            </div>
        )
    }
    lastSong(index){
        index--;
    }
    nextSong(index){
        index++;
    }
    playMusic(id){
        this.props.getSongsUrlList(id)
    }
    componentDidMount() {
        this.playMusic(this.props.location.state.ids)
    }
}
function mapStateToProps(state) {
    return {
        songsUrl: state.playUrl.songsUrl,
        everydaySongs:state.recommend.everydaySongs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playUrl, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)