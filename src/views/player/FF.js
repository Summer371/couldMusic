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
            num:0
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
                            <audio src={v.url} controls={"controls"} preload={"preload"} id={"audio"}
                                   autoplay={"autoplay"}></audio>
                        </div>
                    ))}

                    <div className={"playerBottony"}>
                        <i className={"iconfont icon-xihuan-kongpt"}></i>
                        <i className={"iconfont icon-shangyiqu"} onClick={this.clickZuo.bind(this)}>
                        </i>
                        <span id={"off"} className={"paly"}>
                            <i className={"zbhh iconfont icon-bofang"} onClick={this.clickbf.bind(this)}>
                            </i>
                        </span>
                        <i className={"iconfont icon-xiayiqu "} onClick={this.clickYou.bind(this)}></i>
                        <i className={"iconfont icon-caidan"}></i>
                    </div>
                </div>
            </div>
        )
    }

    clickbf() {
        var audio = document.getElementById("audio");
        var musiIocn = document.querySelector(".rotateimg img");
        var off = document.getElementById("off");
        let sj=this.state.num;//获取当前音频时长
        if (off.className == "paly") {  //如果当前播放
            audio.pause(); //停止（暂停）
            off.className = "stop"; //暂停
            // musiIocn.src = "img/music130.png";  //暂停图片
            musiIocn.className = " "; //取消图片360旋转CSS3动画
            clearInterval(this.state.timer)//关闭音频定时器
        } else if (off.className == "stop") {  //如果当前暂停
            audio.play();  //开始播放
            off.className = "paly";  //开始播放
            // musiIocn.src = "img/music131.png"; //播放图片
            musiIocn.className = "myimg";  //追加图片360旋转CSS3动画
            this.timerMusic(sj)//开启音频定时器
            sj=0;
        }
    }

    clickZuo(e) {
        clearInterval(this.state.timer)//关闭音频定时器
        this.setState({
            index: --this.props.location.state.index,
            num:0
        })
        this.timerMusic()//开启音频定时器
        this.playMusic(this.state.urlList[this.props.location.state.index].mainSong.id)
    }

    clickYou(e) {
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
        audio.oncanplay = function () { //获取音乐时长
            console.log(audio.duration)
            ssj = parseInt(audio.duration)
        }
        this.state.timer = setInterval(() => {//添加定时器
            this.setState({
                num:++timerSj
            })
            if (this.state.num === ssj) { //判断歌曲是否唱完
                this.setState({
                    index: ++this.props.location.state.index,
                    num:0
                })
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