import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import createDispatch from "../../../store/actionCreator/myPlayList";
import PlayListDetail from './playListDetail'
class Song extends React.Component{
    render() {
        let ids = this.props.myPlayList.map(v=>v.id);
        return (
            <div>
                {
                    ids.length>0?<PlayListDetail ids={ids}></PlayListDetail>:null
                }
            </div>
        );
    }
    componentDidMount() {
        this.props.getMyPlayList();
    }
};
function mapState(state) {
    return {
        myPlayList:state.myPlayList.myPlayList,
    }
}
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(Song)
