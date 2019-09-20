import React from "react";
import {
    Progress
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
            isLyric:false,
            percent:1,
            singer:null,
            songName:null,
            songImg:null,
            songId:null,
            imgs:[],
            singers:[],
            songNames:[],
            index:0,
            loop:true,
            time:0
        }
    }
    render() {
        const {songsUrl,lyric}=this.props;
        let songUrl={};
        let index=0;
         songsUrl.map((v,i)=>{
            if(v.id===this.state.songId){
                    songUrl=v;
                    index=i;
            }
        })
        let newLyric=lyric.split("[");
         let time=Math.floor(this.refs.play?this.refs.play.currentTime:0).toString();
        let allTime=(this.refs.play?this.refs.play.duration/60:0).toFixed(2).toString();
        return(
            <div className={"player"}>
                <nav className={"playerNav"}>
                    <i className={"iconfont icon-fanhuipt"} onClick={() => this.props.history.go(-1)}/>
                    <div className={"songName"}>
                        <span>{this.state.songName}</span>
                        <span>{this.state.singer}</span>
                    </div>
                </nav>
                <i className={"iconfont icon-fenxiangpt"}></i>
                <div className={"rotate"} ref={"rotateImg"} onClick={()=>{
                    this.setState({
                        isLyric:!this.state.isLyric
                    })
                    if(this.state.isLyric){
                        this.refs.img.style.opacity="0";
                        this.refs.img.style.position="absolute";
                        this.refs.lyric.style.display="block";
                    }else{
                        this.refs.img.style.opacity="1";
                        this.refs.lyric.style.display="none";
                    }
                }}>
                    <div className={"img"} ref={"img"}>
                        <img src={this.state.songImg} alt=""/>
                    </div>
                    <div className={"lyric"} style={{display:"none"}} ref={"lyric"}>
                        <div>
                            {
                                newLyric.map((v,i)=>{
                                    return(
                                        <h5 key={i}>
                                            {v}
                                        </h5>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className={"playerBody"}>
                    <audio ref={"play"} src={songUrl.url}  loop={this.state.true} autoPlay={true}></audio>
                    <div className={"likeIcon"}>
                        <i className={"iconfont icon-xihuan-kongpt-wangyiicon1"}></i>
                        <i className={"iconfont icon-xiazaipt-wangyiicon"}></i>
                        <i className={"iconfont icon-jingyunyinxiaopt-wangyiicon"}></i>
                        <i className={"iconfont icon-pinglunpt1"}></i>
                        <i className={"iconfont icon-xinxipt"}></i>
                    </div>
                    <div className={"progress"}>
                        <span>{time}</span><h3><i></i></h3><span>{allTime}</span>
                    </div>
                    <div className={"playerBotton"}>
                        <i className={this.state.loop?"iconfont icon-danquxunhuan1":"iconfont icon--lbxh"} onClick={this.loop.bind(this)}></i>
                        <i className={"iconfont icon-shangyiqu"} onClick={this.lastSong.bind(this,index)}></i>
                        <i className={this.state.play?"iconfont icon-bofang":"iconfont icon-zanting"} onClick={this.play.bind(this)}></i>
                        <i className={"iconfont icon-xiayiqu"} onClick={this.nextSong.bind(this,index)}></i>
                        <i className={"iconfont icon-caidan"}></i>
                    </div>
                </div>
            </div>
        )
    }
    loop(){
        this.setState({
            loop:!this.state.loop
        })
    }
    skip(){
        this.refs.play.fastSeek(20)
    }
    play(){
       console.log( this.refs.play.currentTime)
       console.log( this.refs.play.duration)
        this.setState({
            play:!this.state.play
        });
        if(this.state.play){
            this.refs.play.pause()
            this.refs.img.style.animationPlayState="paused";
        }else{
            this.refs.play.play()
            this.refs.img.style.animationPlayState = "running";
        }
    }
    lastSong(index){
        index--;
        this.setState({
            singer:this.state.singers[index],
            songName:this.state.songNames[index],
            songImg:this.state.imgs[index],
            songId:this.state.songIds[index]
        })
    }
    nextSong(index){
        index++;
        this.setState({
            singer:this.state.singers[index],
            songName:this.state.songNames[index],
            songImg:this.state.imgs[index],
            songId:this.state.songIds[index]
        })
    }
    getMusicUrl(id){
        this.props.getSongsUrlList(id)
    }
    componentDidMount() {
        this.getMusicUrl(this.props.location.state.ids);
        this.props.getLyricList(this.props.location.state.id);
        this.setState({
            singer:this.props.location.state.singer,
            songName:this.props.location.state.songName,
            songImg:this.props.location.state.img,
            songId:this.props.location.state.id,
            imgs:this.props.location.state.imgs,
            singers:this.props.location.state.singers,
            songNames:this.props.location.state.songNames,
            songIds:this.props.location.state.ids
        })
    }
}
function mapStateToProps(state) {
    return {
        songsUrl: state.playUrl.songsUrl,
        everydaySongs:state.recommend.everydaySongs,
        lyric: state.playUrl.lyric
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playUrl, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)