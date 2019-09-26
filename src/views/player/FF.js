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
import "../../assets/style/FF.css";

class FF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.location.state.index,
            songsUrlList: [{
                url: ''
            }],
            urlList: [],
            timer: null,
            num:0,//每秒增加时间
            play:true,//判断歌曲点击播放
            jdw:0,//歌曲每秒增加长度
            ssjj:0//歌曲总时长
        }
    }

    render() {
        let list = this.props.location.state.ShowDetailsList
        let songsUrl = this.state.songsUrlList
        return (
            <div className={"playery"}>
                <div className="go_backy">
                    <div className="n_go_backy">
                        <i className="iconfont icon-xia" onClick={() => {
                            this.props.history.go(-1)
                        }}></i>
                        <span>{list[this.state.index].name}</span>
                    </div>
                </div>
                <div className={"rotatee"}>
                    <div className={"rotateimg "}>
                        <img src={list[this.state.index].coverUrl} className={"myimg"} alt=""/>
                    </div>
                </div>
                <div className={"playerBodyy"}>
                    {songsUrl.map((v, i) => (
                        <div key={i}>
                            <audio src={v.url}  preload={"preload"} id={"audio"}
                                   autoplay={"autoplay"}></audio>
                        </div>
                    ))}
                    <div className={"progressmusic"}  >
                        {/*<span>{this.state.num}</span>*/}
                        <span >{this.$filter.songTime(this.state.num)}</span>
                        <h3 className={"musicjd"} >
                            <span className={"paowa"}></span>
                            <i className={"jzcd"}></i>
                        </h3>
                       <span>{this.$filter.FFtime(list[this.state.index].mainSong.lMusic.playTime)}</span>
                    </div>
                    <div className={"playerBottony"}>
                        <i className={"iconfont icon-xihuan-kongpt"}></i>
                        <i className={"iconfont icon-shangyiqu"} onClick={this.clickZuo.bind(this)}>
                        </i>
                        <span id={"off"} className={"paly"}>
                            <i className={this.state.play?"iconfont icon-bofang":"iconfont icon-zanting"} onClick={this.clickbf.bind(this)}>
                            </i>
                        </span>
                        <i className={"iconfont icon-xiayiqu "} onClick={this.clickYou.bind(this)}></i>
                        <i className={"iconfont icon-caidan"}></i>
                    </div>
                </div>
            </div>
        )
    }

    jdw(){
        var minutes = parseInt((this.state.yyjd % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (this.state.yyjd % (1000 * 60)) / 1000;
        let ss=minutes+" : "+seconds
        if(this.state.yyjd<60){
            return "0 : "+this.state.yyjd
        }else{
            return ss
        }
    }
    clickbf() {
        var audio = document.getElementById("audio");
        var musiIocn = document.querySelector(".rotateimg img");
        var off = document.getElementById("off");
        let sj=this.state.num;//获取当前音频时长
        if (off.className == "paly") {  //如果当前播放
            this.setState({
                play:false
            })
            audio.pause(); //停止（暂停）
            off.className = "stop"; //暂停
            musiIocn.className = " "; //取消图片360旋转CSS3动画
            clearInterval(this.state.timer)//关闭音频定时器
        } else if (off.className == "stop") {  //如果当前暂停
            this.setState({
                play:true
            })
            audio.play();  //开始播放
            off.className = "paly";  //开始播放
            musiIocn.className = "myimg";  //追加图片360旋转CSS3动画
            this.timerMusic(sj)//开启音频定时器
            sj=0;
        }
    }
    clickZuo(e) {
        let paowu=document.querySelector(".paowa");//小黑点
        let jzcd=document.querySelector(".jzcd");//进度条颜色
        jzcd.style.width=0//进度为0
        paowu.style.left=0//让偏移量重新为0
        clearInterval(this.state.timer)//关闭音频定时器
        this.setState({
            index: --this.props.location.state.index,
            num:0
        })
        this.timerMusic()//开启音频定时器
        this.playMusic(this.state.urlList[this.props.location.state.index].mainSong.id)
    }

    clickYou(e) {
        let paowu=document.querySelector(".paowa");//小黑点
        let jzcd=document.querySelector(".jzcd");//进度条颜色
        jzcd.style.width=0//进度为0
        paowu.style.left=0//让偏移量重新为0
        clearInterval(this.state.timer)//关闭音频定时器
        this.setState({
            index: ++this.props.location.state.index,
            num:0
        })
        this.timerMusic()//开启音频定时器
        this.playMusic(this.state.urlList[this.props.location.state.index].mainSong.id)
    }

    playMusic(id) {
        this.props.getSongsUrlList(id)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            songsUrlList: nextProps.songsUrl
        })
    }
    timerMusic(timerSj=0){//控制音频
        var audio = document.getElementById("audio");//获取音频
        let ssj = 0;
        let paowu=document.querySelector(".paowa");//小黑点
        let musicjd=document.querySelector(".musicjd");//进度条
        let jzcd=document.querySelector(".jzcd");//进度条颜色
        let widthwa=musicjd.offsetWidth
        audio.oncanplay = ()=>{ //获取音乐时长
            console.log(audio.duration)
            ssj = Number(parseInt(audio.duration))
            this.setState({
                ssjj:Number(parseInt(audio.duration)),
                jdw:paowu.offsetLeft+(widthwa/ssj)
            })
        }
        // paowu.offsetLeft+(ssj/musicjd.offsetWidth)
        this.state.timer = setInterval(() => {//添加定时器
            this.setState({
                num:++timerSj
            })

            paowu.style.left=this.state.num*this.state.jdw+"px";//进度条动起来
            jzcd.style.width=this.state.num*this.state.jdw+"px";//已放的长度
            if (this.state.num === this.state.ssjj&&paowu.offsetLeft>=musicjd.offsetWidth) { //判断歌曲是否唱完，进度条是否完成
                this.setState({
                    index: ++this.props.location.state.index,
                    num:0,
                    jdw:0
                })
                jzcd.style.width=0//进度为0
                paowu.style.left=0//让偏移量重新为0

                clearInterval(this.state.timer)//关闭音频定时器
                this.timerMusic(this.state.num)//开启定时器
                this.playMusic(this.state.urlList[this.props.location.state.index].mainSong.id)
            }
        }, 1000)
    }
    componentDidMount() {
        this.playMusic(this.props.location.state.id)
        this.setState({
            urlList: this.props.location.state.ShowDetailsList
        })
        this.timerMusic()
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
}

function mapStateToProps(state) {
    return {
        songsUrl: state.playUrl.songsUrl,
        everydaySongs: state.recommend.everydaySongs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playUrl, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FF)