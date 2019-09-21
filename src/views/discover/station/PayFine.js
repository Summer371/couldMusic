import
    React, {
    Fragment
}
    from 'react';
import {connect} from "react-redux"
import actionCreators from '../../../store/actionCreator/station'
import {
    bindActionCreators
} from "redux"
import "../../../assets/style/station/Payfine.css"

class PayFine extends React.Component {
    render() {
        const { PayFineList } = this.props;//付费精品
        return (
            <Fragment>
                <header className="payfine">
                    <div className="go_back">
                        <div className="n_go_back" >
                            <i className="iconfont icon-xia" onClick={()=>{
                            this.props.history.push("/station")}
                            }></i>
                            <span onClick={()=>{
                                this.props.history.push("/station")}}>付费精品</span>
                        </div>
                    </div>
                </header>
                <section className={"section"}>
                    {
                        PayFineList.map(v=>(
                            <div className="n_content" key={v.id} onClick={() => {
                                this.props.history.push({
                                    pathname: "/ShowDetails",
                                    state: {
                                        id: v.id,
                                        img: v.picUrl
                                    }
                                })
                            }}>
                                <div className="ns_content">
                                    <img src={v.picUrl} alt=""/>
                                </div>
                                <div className="nx_content">
                                    <h4>{v.name}</h4>
                                    <p>{v.rcmdText}</p>
                                    <p>最新上架</p>
                                    <span>￥{v.originalPrice}</span>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </Fragment>)
    }

    componentDidMount() {
        this.props.PayFine(30)
    }
}

function mapStateToProps(state) {
    return {
        PayFineList: state.PayFineList //付费精品
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PayFine)

