import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import recommend from "../../../store/actionCreator/recommend";
class EverydayRecommend extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                meiri
            </div>
        )
    }
    componentDidMount(){
        this.props.getResourceList();
        this.props.getEverydaySongsList();
    }
}
function mapStateToProps(state) {
    return {
        resource: state.recommend.resource,
        everydaySongs:state.recommend.everydaySongs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(recommend, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EverydayRecommend)