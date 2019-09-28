import React from "react";
import {
    connect
} from "react-redux";
import Lyric from "lyric-parser";
import {
    bindActionCreators
} from "redux";
import playUrl from "../../store/actionCreator/playUrl";
import "../../assets/style/player.css";
import "../../assets/style/font/iconfont.css";
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
            songId:0,
            imgs:[],
            singers:[],
            songNames:[],
            lyric:[],
            index:0,
            loop:true,
            time:0,
            totalTime:0,
            nextTime:Date.now()
        };
        this.timer=null
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
        let newLyric=new Lyric(lyric,this.getLyric.bind(this));
        return(
            <div className={"player"}>
                <nav className={"playerNav"}>
                    <i className={"iconfont icon-fanhuipt"} onClick={() => this.props.history.go(-1)}/>
                    <div className={"songName"}>
                        <span>{this.state.songName}</span>--
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
                        this.refs.lyricList.style.display="block";
                    }else{
                        this.refs.img.style.opacity="1";
                        this.refs.lyricList.style.display="none";
                    }
                }}>
                    <div className={"img"} ref={"img"}>
                        <img src={this.state.songImg} alt=""/>
                    </div>
                    <div className={"lyric"} style={{display:"none"}} ref={"lyricList"}>
                        <div>
                            {
                                newLyric.lines.map((v,i)=>{
                                    return(
                                        <h5 key={i}>
                                            {v.txt}
                                        </h5>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className={"playerBody"}>
                    <audio ref={"play"} src={songUrl.url}  loop={this.state.true?"loop":""} autoPlay={true}></audio>
                    <div className={"likeIcon"}>
                        <i className={"iconfont icon-xihuan-kongpt-wangyiicon1"}></i>
                        <i className={"iconfont icon-xiazaipt-wangyiicon"}></i>
                        <i className={"iconfont icon-jingyunyinxiaopt-wangyiicon"}></i>
                        <i className={"iconfont icon-pinglunpt1"}></i>
                        <i className={"iconfont icon-xinxipt"}></i>
                    </div>
                    <div className={"progress"} ref={"long"} >
                        <span>{this.state.time}</span>
                        <h3 ref={"progress"} style={{width:"80%"}}
                            onClick={this.skip.bind(this)}>
                        <i ref={"hander"}
                        ></i></h3><span>{this.$filter.songTime(this.state.totalTime)}</span>
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
    getLyric({lineNum, txt}){
        if (lineNum > 5) {
            let lineEl = this.$refs.lyricLine[lineNum - 5];
            this.$refs.lyricList.scrollToElement(lineEl, 1000)// 滚动到元素
        } else {
            this.$refs.lyricList.scrollTo(0, 0, 1000)// 滚动到顶部
        }


    }
    loop(){
        this.setState({
            loop:!this.state.loop
        })
    }
    skip=(e)=>{
        let {duration}=this.refs.play;
        let width=document.body.clientWidth*0.8;
        this.refs.hander.style.left=e.clientX-37+"px";
        let handerll=this.refs.hander.style.left.split("");
        handerll.splice(-2);
        let handerLeft=  handerll.join("")/1;
        this.refs.play.currentTime=duration*handerLeft/width;
    }
    play(){
        this.setState({
            play:!this.state.play
        });
        if(this.state.play){
            this.refs.play.pause();
            this.refs.img.style.animationPlayState="paused";
        }else{
            this.refs.play.play();
            this.refs.img.style.animationPlayState = "running";
        }
    }
    lastSong(index){
        --index;
        this.setState({
            singer:this.state.singers[index],
            songName:this.state.songNames[index],
            songImg:this.state.imgs[index],
            songId:this.state.songIds[index],
            isLyric:false
        });
        this.props.getLyricList(this.state.songIds[index]);
    }
    nextSong(index){
        ++index;
        this.setState({
            singer:this.state.singers[index],
            songName:this.state.songNames[index],
            songImg:this.state.imgs[index],
            songId:this.state.songIds[index],
            isLyric:false
        });
        this.props.getLyricList(this.state.songIds[index]);
    }
    getMusicUrl(id){
        this.props.getSongsUrlList(id)
    }
    initSongDetail(){
        this.setState({
            singer:this.props.location.state.singer,
            songName:this.props.location.state.songName,
            songImg:this.props.location.state.img,
            songId:this.props.location.state.id,
            imgs:this.props.location.state.imgs,
            singers:this.props.location.state.singers,
            songNames:this.props.location.state.songNames,
            songIds:this.props.location.state.ids
        });
        let width=document.body.clientWidth*0.8;
       this.refs.play.oncanplay=()=>{
            this.setState({
                totalTime:Math.floor(this.refs.play.duration),
                nextTime:Date.now()
            })
        };
        this.timer=setInterval(()=>{
            this.setState({
                time:this.$filter.songTime(Math.floor(this.refs.play.currentTime))
            });
            let {currentTime,duration}=this.refs.play;
            let precent =currentTime/duration;
            this.refs.hander.style.left=width*precent-5+"px";
        },1000)
    }
    componentDidMount() {
        this.getMusicUrl(this.props.location.state.ids);
        this.props.getLyricList(this.props.location.state.id);
        this.initSongDetail();
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}
function mapStateToProps(state) {
    return {
        songsUrl: state.playUrl.songsUrl,
        lyric: state.playUrl.lyric
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playUrl, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)