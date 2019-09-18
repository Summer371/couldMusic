import React from "react";
import { Icon } from 'antd';
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import personalized from "../../../store/actionCreator/personalized";
class SongList extends React.Component{
    render(){
        const {songsList} =this.props;
        return(
            <div className={"recommendSongs"}>
                <h4>推荐歌单</h4>
                <ul>
                    {
                        songsList.map(v=>{
                            return(
                                <li key={v.id}>
                                    <span><Icon type="caret-right"/>{v.playCount}</span>
                                    <img  src={v.picUrl} alt=""/>
                                    <p>{v.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.recommendSongsList();
    }
}
function mapStateToProps(state) {
    return{
        songsList:state.personalized.songsList//推荐歌单
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators(personalized,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SongList)