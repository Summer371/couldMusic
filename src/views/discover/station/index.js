import
React, {
    Fragment
}
    from 'react';
import { connect } from "react-redux"
import actionCreators from '../../../store/actionCreator/station'
import {
    bindActionCreators
} from "redux"
import '../../../assets/style/station/station.css'
import StationList from "../../../components/discover/station/Station"
import Djheader from "../../../components/discover/station/DJheader"

class Station extends React.Component {
    render() {
        return (
            <Fragment>
                <Djheader {...this.props}></Djheader>
                <StationList {...this.props}></StationList>
            </Fragment>)
    }
}
function mapStateToProps(state) {
    return {
        todayRecommendList:state.todayRecommendList,
        stationList:state.stationList,
        djBannerList:state.djBannerList,
        PayFineList:state.PayFineList //付费精品
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Station)