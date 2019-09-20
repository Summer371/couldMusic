import React from "react";
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import top from "../../../store/actionCreator/top";

 class TopAlbum extends React.Component {
    render() {
        const {topAlbum}=this.props;
        return (
            <ul>
                {
                    topAlbum.map((v, i) => {
                        return (
                            <li key={i}>
                                <img src={v.picUrl} alt=""/>
                                <p>{v.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
     componentDidMount(){
         this.props.getNewAlbumList();
     }
}
function mapStateToProps(state) {
    return{
        topAlbum:state.top.topAlbum//新碟
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators(top,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TopAlbum)