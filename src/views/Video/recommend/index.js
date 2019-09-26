import React from "react"
import "../../../assets/style/video/recommend.css";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import mv from "../../../store/actionCreator/mv";
import VedioList from "../../../components/mv/VedioList";

class Tv extends React.Component {
    render() {
        const {vedioId} = this.props;
        return (
            <div className={"video"}>
                <div className={"v-ul"}>
                    <VedioList {...this.props} ></VedioList>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getVideoId();
    }
}

function mapStateToProps(state) {
    return {
        vedioId: state.mv.vedioId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mv, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tv)