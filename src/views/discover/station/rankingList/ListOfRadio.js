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
import "../../../../assets/style/station/broadcasting.css"

class ListOfRadio extends React.Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="hearfff">
                        <div className="h_hearfff">
                            <span>付费精品榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearfff">
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
                    <div className="hearfff">
                        <div className="h_hearfff">
                            <span>有声书|广播剧榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearfff">
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
                    <div className="chorusfff">
                        <div className="s_chorusfff">
                            <div className="sz_chorusfff">
                                <h4>最热节目</h4>
                                <i className="iconfont icon-wenhao"></i>
                            </div>
                        </div>
                        <div className="x_chorusfff">
                            <li>
                                <div className="z_chorusfff">
                                    <div className="z_shufff">
                                        <p>1</p>
                                        <span>-0</span>
                                    </div>
                                    <div className="znz_chorusfff">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="zny_chorusfff">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorusfff">
                                            <div className="nzx_chorusfff">
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorusfff">
                                                <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListOfRadio)