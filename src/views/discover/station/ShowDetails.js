import
    React, {
    Fragment
}
    from 'react';
import {
    bindActionCreators
} from "redux"
import {connect} from "react-redux"
import actionCreators from '../../../store/actionCreator/station'
import '../../../assets/style/station/ShowDetails.css'

class ShowDetails extends React.Component {
    constructor(){
        super();
        this.state={
            TheHostDetailsList:{
                category:"",
                desc:"",
                dj:{
                    rewardCount:'',
                    nickname:'',
                    avatarUrl:''
                },
                commentDatas:[{
                    content:"",
                    programName:"",
                    userProfile:{
                        avatarUrl:"",
                        nickname:""
                    }
                }]
            }
        }
    }
    render() {
        let {ShowDetailsList} = this.props;
        let TheHostDetailsList=this.state.TheHostDetailsList;
        let arr = [{
            radio: {
                name: '',
                subCount: ''
            }
        }]
        if (ShowDetailsList.length > 1) {
            arr = ShowDetailsList
        }
        return (
            <Fragment>
                <div className={"backround"} style={{
                    backgroundImage: 'url(' + this.props.location.state.img + ')',
                    backgroundSize: "104% 153%"
                }}>
                    <div className={"navdj_bottom"}>
                        <p>{arr[0].radio.name}</p>
                        <span>{this.djCount(arr[0].radio.subCount)}人已订阅</span>
                    </div>
                    <div className={"tounav"}>
                        <div className="nav_header">
                            <i className="iconfont icon-xia" onClick={() => {
                                this.props.history.push("/station")
                            }
                            }></i>
                            <span onClick={() => {
                                this.props.history.push("/station")
                            }
                            }>电台</span>
                        </div>
                    </div>
                </div>
                <div className={"showBottom"}>
                    <div className={"zzhao"}>
                        <div className={"zzhaozz"}>
                            <nav>
                                <li onClick={this.djXq.bind(this)} className={"djxq"}><a>详情</a></li>
                                <li onClick={this.djJm.bind(this)} className={"djjm"}><a
                                    className={'djactive'}>节目</a><span>{ShowDetailsList.length}</span></li>
                            </nav>
                        </div>
                    </div>
                    <div className={"djdisplay"}>
                        <h4 className={"djexpect"}>共{ShowDetailsList.length}期</h4>
                        <div className={"djconten"}>
                            {
                                ShowDetailsList.map((v, i) => (
                                    <div className={"ww_dj"} key={v.id}>
                                        <div className={"w_djcon"}>
                                            <div className={"zdj"}>{v.serialNum}</div>
                                            <div className={"ydj"}>
                                                <p>{v.name}</p>
                                                <div>
                                                    <span>{this.getDate(v.createTime)}</span>
                                                    <b><i
                                                        className={"iconfont icon-kaishi1"}></i>{this.djCount(v.listenerCount)}
                                                    </b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"w_djyou"}>
                                            <i className={"iconfont icon-sangedian"}></i>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>
                    </div>
                    <div className={"djxqdisplay"}>
                        <div className={"djconentZb"}>
                            <h4>主播</h4>
                            <div className={"n_djconentZb"}>
                                <div className={"nz_djconentZb"}>
                                    <img src={TheHostDetailsList.dj.avatarUrl} alt=""/>
                                    <div>
                                        <p>{TheHostDetailsList.dj.nickname}</p>
                                        <span>网易音乐人</span>
                                    </div>
                                </div>
                                <div className={"ny_djconentZb"}>
                                    <button>赞赏</button>
                                    <span>{this.djCount(TheHostDetailsList.dj.rewardCount)}次赞赏</span>
                                </div>
                            </div>
                        </div>
                        <div className={"djconentXq"}>
                            <h4>
                                电台内容详情
                            </h4>
                            <div className={"djconentFl"}>
                                <li>分类 : </li>
                                <li>{TheHostDetailsList.category}</li>
                            </div>
                            <p>
                                {TheHostDetailsList.desc}
                            </p>
                        </div>
                        <div className={"djplun"}>
                            <h4>精彩评论</h4>
                            {
                                TheHostDetailsList.commentDatas.map((v,i)=>(
                                    <div className={"pls"} key={i}>
                                        <div className={"spls"} >
                                            <div className={"ppls"}>
                                                <img src={v.userProfile.avatarUrl} alt=""/>
                                            </div>
                                            <div className="ypls">
                                                <span>{v.userProfile.nickname}</span>
                                                <p>{v.content}</p>
                                                <div className={"xpls"}>—{v.programName}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }

    djXq() {
        const djxq = document.querySelector(".djxq a")
        const djjm = document.querySelector(".djjm a")
        const djdisplay = document.querySelector(".djdisplay")
        const djxqdisplay = document.querySelector(".djxqdisplay")
        djxq.className = "djactive"
        djjm.className = null;
        djdisplay.style.display = "none"
        djxqdisplay.style.display = "block"
    }

    djJm() {
        const djxq = document.querySelector(".djxq a")
        const djjm = document.querySelector(".djjm a")
        const djdisplay = document.querySelector(".djdisplay")
        const djxqdisplay = document.querySelector(".djxqdisplay")
        djdisplay.style.display = "block"
        djxq.className = null;
        djjm.className = "djactive";
        djxqdisplay.style.display = "none"
    }

    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.props.ShowDetails(this.props.location.state.id);
        this.props.TheHostDetails(this.props.location.state.id)
        window.onscroll = function () {
            var winHeight = document.documentElement.scrollHeight;//总高
            var winScrollTop = document.documentElement.scrollTop;//滚动的高
            var nav = document.querySelector(".nav_header span");
            var _nav = document.querySelector(".navdj_bottom p")
            var tou = document.querySelector(".tounav")
            var zz = document.querySelector(".zzhaozz")
            var zy = document.querySelector(".zzhao")
            if (winScrollTop >= 172) {
                zz.style.position = "fixed"
                zy.style.position = "fixed"
                zy.style.background = "#000";
                zy.style.top = "0.54rem"
                zz.style.top = "0.54rem"
                zy.style.borderRadius = "0"
            }
            if (winScrollTop < 172) {
                zz.style.position = null
                zy.style.position = null
                zy.style.background = "#FFF";
                zy.style.borderRadius = "inherit"
            }
            if (winScrollTop >= 0 && winScrollTop <= 30) {
                tou.style.backgroundColor = 'rgba(0,0,0,0)'
            }
            if (winScrollTop > 30 && winScrollTop <= 60) {
                tou.style.backgroundColor = 'rgba(0,0,0,0.3)'
            }
            if (winScrollTop > 60 && winScrollTop <= 120) {
                tou.style.backgroundColor = 'rgba(0,0,0,0.5)'
            }
            if (winScrollTop > 120 && winScrollTop <= 160) {
                tou.style.backgroundColor = 'rgba(0,0,0,0.8)'
            }
            if (winScrollTop > 160) {
                tou.style.backgroundColor = 'rgba(0,0,0,1)'
            }
            if (winScrollTop >= 172) {
                nav.innerText = _nav.innerHTML
            }
            if (winScrollTop < 172) {
                nav.innerText = "电台"
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState(
            {
                TheHostDetailsList:nextProps.TheHostDetailsList
            }
        )
    }

    djCount(n) {
        let num = n;
        if (num > 10000) {
            num = parseInt(n / 1000)
            return num / 10 + "万"
        }else {
            return num
        }
    }

    getDate(v) {
        const time = new Date(v);
        return (time.getMonth() + 1).toString().padStart(2, "0") + "-" +
            (time.getDate()).toString().padStart(2, "0")
    }
}

function mapStateToProps(state) {
    return {
        ShowDetailsList: state.ShowDetailsList,
        TheHostDetailsList:state.TheHostDetailsList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails)