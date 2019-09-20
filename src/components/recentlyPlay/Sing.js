import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import '../../assets/style/my/myRecentlyPlay.css'
import createDispatch from "../../store/actionCreator/myRecentlyPlay";
class Sing extends React.Component{
    render() {
        let list = this.props.PlayList?this.props.PlayList:[]
        return (
            <div className={"rencently"}>
                <div className={"playOne"}>
                    <li>
                        <i className={"iconfont iconbofang icon"}></i>
                        <span style={{marginLeft:'0.1rem'}}>播放全部{"(共100首)"}</span>
                    </li>
                    <dl>
                        <i style={{marginRight:'0.1rem'}} className={"iconfont iconcheck"}></i>
                        <span>多选</span>
                    </dl>
                </div>
                {
                    list.map((v,i)=>(
                        <div className={"playAll"} key={i}>
                            <div className={"left"} style={{lineHeight:'0.15rem'}}>
                                <span>{v.song.name}</span>
                                <span style={{display:"block"}}>{v.song.ar[0].name}-{v.song.al.name}</span>
                            </div>
                            <div className={"right"}>
                                <i style={{marginRight:'0.08rem'}} className={"iconfont iconbofang"}></i>
                                <i className={"iconfont iconcaidan-dian"}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
    componentDidMount() {
        this.props.getRecentlyPlay();
    }
};
function mapState(state) {
    return {
        PlayList:state.myRecentlyPlay.playList
    }
};
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(Sing);