import
    React, {
    Fragment
}
    from 'react';
import {
    bindActionCreators
} from "redux"
import { connect } from "react-redux"
import actionCreators from '../../../../store/actionCreator/station'
import "../../../../assets/style/station/Anchorwoman.css"

class TheHostList extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={"zbbzx"}>
                    <h5>你查找的主播不在线</h5>
                    <div> <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2254017796,3779260921&fm=15&gp=0.jpg" alt=""/></div>
                </div>
            </Fragment>)
    }
}
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TheHostList)