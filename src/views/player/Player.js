import React from "react";
import {
    PageHeader,Progress
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
    constructor(){
        super();
        this.state={
            play:true,
            percent:0
        }
    }
    render() {
        const {songsUrl,lyric}=this.props;
        console.log(lyric)
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
                <div className={"rotate"} ref={"rotateImg"} onClick={()=>{
                    this.refs.rotateImg.setAttribute("display","none")
                    this.refs.rotateImg.display="none";
                    this.refs.lyric.display="block";
                }}>
                    <div>
                        <img src={this.props.location.state.img} alt=""/>
                    </div>
                </div>
                <div className={"playerBody"}>
                    <div style={{display:"none"}} ref={"lyric"} onClick={()=>{
                        this.refs.rotateImg.display="block";
                        this.refs.lyric.display="none";
                    }}>
                        {lyric}
                    </div>
                    <Progress percent={this.state.percent} status="active" />
                    <audio ref={"play"} src={songUrl.url}  loop={"loop"} autoPlay={true}></audio>
                    <div className={"playerBotton"}>
                        <i className={"iconfont icon-xihuan-kongpt"} onClick={this.skip.bind(this)}></i>
                        <i className={"iconfont icon-shangyiqu"} onClick={this.lastSong.bind(this,index)}></i>
                        <i className={this.state.play?"iconfont icon-bofang":"iconfont icon-zanting"} onClick={this.play.bind(this)}></i>
                        <i className={"iconfont icon-xiayiqu"} onClick={this.nextSong.bind(this,index)}></i>
                        <i className={"iconfont icon-caidan"}></i>
                    </div>
                </div>
            </div>
        )
    }
    play(){
        this.setState({
            play:!this.state.play
        });
        if(this.state.play){
            this.refs.play.pause()
        }else{
            this.refs.play.play()
        }
    }
    skip(){
        console.log(this.refs.play.currentTime)
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
        this.props.getLyricList(this.props.location.state.id)

    }
}
function mapStateToProps(state) {
    return {
        songsUrl: state.playUrl.songsUrl,
        everydaySongs:state.recommend.everydaySongs,
        lyric:state.playUrl.lyric
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playUrl, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)