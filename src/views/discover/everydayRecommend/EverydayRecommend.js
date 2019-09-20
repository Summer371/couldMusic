import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    Icon
} from "antd";
import recommend from "../../../store/actionCreator/recommend";
import SongLists from "../../../components/discover/everydayRecommend/SongLists"
import "../../../assets/style/discover/everydayRecommend.css";
class EverydayRecommend extends React.Component{
    render(){
        return(
            <div className={"everydayRecommend"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={() => this.props.history.push("/")}/>
                </nav>
                <div className={"head"}>
                    <p>
                        {
                            this.$filter.date(Date.now())
                        }
                    </p>
                </div>
                <SongLists {...this.props}></SongLists>
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