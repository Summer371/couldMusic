import
    React, {
    Fragment
}
    from 'react';
import { connect } from "react-redux"
import actionCreators from '../../../../store/actionCreator/station'
import "../../../../assets/style/station/anchor.css"
import {
    bindActionCreators
} from "redux"
class Program extends React.Component {
    render() {
        return (
            <Fragment>
                    <section>
                        <div className="hearf">
                            <div className="h_hearf">
                                <span>24小时榜</span>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="n_hearf">
                                <li>
                                    <div><img src="" alt=""/></div>
                                    <p>11111111111111</p>
                                </li>
                                <li>
                                    <div><img src="" alt=""/></div>
                                    <p>11111111111111</p>
                                </li>
                                <li>
                                    <div><img src="" alt=""/></div>
                                    <p>11111111111111</p>
                                </li>
                            </div>
                        </div>
                        <div className="chorusf">
                            <div className="s_chorusf">
                                <div className="sz_chorusf">
                                    <h4>最热节目</h4>
                                    <i className="iconfont icon-wenhao"></i>
                                </div>
                            </div>
                            <div className="x_chorusf">
                                <li>
                                    <div className="z_chorusf">
                                        <div className="z_shuf">
                                            <p>1</p>
                                            <span>-0</span>
                                        </div>
                                        <div className="znz_chorusf">
                                            <img src="" alt=""/>
                                        </div>
                                        <div className="zny_chorusf">
                                            <h5>雅俗共赏</h5>
                                            <div className="znx_chorusf">
                                                <div className="nzx_chorusf">
                                                    <div>
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>不不不</span>
                                                </div>
                                                <div className="nyx_chorusf">
                                                    |&nbsp;
                                                    <i className="iconfont icon-redu"></i>
                                                    <span>11万</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="y_chorusf">
                                        <i className="iconfont icon-bofang"></i>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(Program)