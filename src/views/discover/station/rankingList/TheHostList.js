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
                <section>
                    <div className="hearff">
                        <div className="h_hearff">
                            <span>24小时榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearff">
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>1111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                        </div>
                    </div>
                    <div className="hearff">
                        <div className="h_hearff">
                            <span>新人榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearff">
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                            <li>
                                <div className="n_imgff"><img src="" alt=""/></div>
                                <p>1111111</p>
                                <div className="n_reduff"><i className="iconfont icon-redu"></i> <span>1111万</span></div>
                            </li>
                        </div>
                    </div>
                    <div className="chorusff">
                        <div className="s_chorusff">
                            <div className="sz_chorusff">
                                <h4>最热主播</h4>
                                <i className="iconfont icon-wenhao"></i>
                            </div>
                        </div>
                        <div className="x_chorusff">
                            <li>
                                <div className="z_chorusff">
                                    <div className="z_shuff">
                                        <p>1</p>
                                        <span>-0</span>
                                    </div>
                                    <div className="znz_chorusff">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="zny_chorusff">
                                        <h5>雅俗共赏</h5>
                                    </div>
                                </div>
                                <div className="y_chorusff">
                                    <i className="iconfont icon-redu"></i>
                                    <span>11万</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(TheHostList)