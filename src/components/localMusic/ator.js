import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import createDispatch from "../../store/actionCreator/myRecentlyPlay";
class Sing extends React.Component{
    render() {
        let list = this.props.PlayList?this.props.PlayList:[]
        return (
            <div className={"rencently"} id={"only"}>
                {
                    list.map((v,i)=>(
                        <div className={"playAllator"} key={i}>
                            <div className={"left"} style={{lineHeight:'0.15rem'}}>
                                <img className={"Img"} src={v.song.al.picUrl} alt=""/>
                                <div className={"center"}>
                                    <span className={"span"}>{v.song.ar[0].name}</span>
                                    <span className={"span"}>1首</span>
                                </div>
                            </div>
                            <div className={"right"}>
                                <i className={"iconfont iconcaidan-dian"}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
    componentDidMount() {
        this.props.getRecentlyPlay(1);
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