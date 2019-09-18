import React from 'react';
import createDispatch from "../../../../store/actionCreator/myPlayList/playListDetail";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
class PlayListDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        const songs=this.props.PlayListDetail.songs?this.props.PlayListDetail.songs:[];
        return (
            <div>
                {
                    songs.map((v,i)=>(
                    <div className={"singList"}key={i}>
                        <div className={"left"}>
                            <div className={"num"}>{i+1}</div>
                            <div className={"singDetail"}>
                                <span>{v.name}</span>
                                <span className={"detail"}>{v.ar[0].name}</span>
                            </div>
                        </div>
                        <div className={"right"}>
                            <i className={"iconfont iconbofang left"}></i>
                            <i className={"iconfont iconcaidan-dian"}></i>
                        </div>
                    </div>
                    ))
                }
            </div>
        );
    };
    componentDidMount() {
        this.props.getPlayListDetail(this.props.ids);
    }
};
function mapState(state) {
    return {
        PlayListDetail:state.playListDetail.playListDetail
    }
}
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(PlayListDetail)